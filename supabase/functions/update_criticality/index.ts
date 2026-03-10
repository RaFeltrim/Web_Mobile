import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.46.1";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
    );

    const { task_id } = await req.json();

    if (!task_id) {
      return new Response(JSON.stringify({ error: "task_id is required" }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 400,
      });
    }

    // MVP: fetch task
    const { data: task, error: fetchError } = await supabaseClient
      .from("tasks")
      .select("*")
      .eq("id", task_id)
      .single();

    if (fetchError || !task) {
      throw fetchError || new Error("Task not found");
    }

    // Calcular novo score crítico (Mock: aumento linear de ansiedade)
    // Na base real, isso seria um cálculo relacionando 'due_date', dependências e etc.
    const baseScore = task.estimated_hours * 1.5;
    const isLate = task.due_date && new Date(task.due_date) < new Date();
    const newScore = isLate ? baseScore + 5.0 : baseScore + 1.0;

    // Atualiza a task (Isto dispara o Supabase Realtime automaticamente para o Dashboard)
    const { data: updatedTask, error: updateError } = await supabaseClient
      .from("tasks")
      .update({ criticality_score: newScore })
      .eq("id", task_id)
      .select()
      .single();

    if (updateError) throw updateError;

    return new Response(
      JSON.stringify({ message: "Criticality updated", task: updatedTask }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      },
    );
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
