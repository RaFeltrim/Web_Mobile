import { test, expect } from '@playwright/test';

test.describe('Study-Sync App Ultimate E2E (Sprint 4)', () => {
  test('Renderiza a fundação Liquid Glass e barra de Saúde', async ({ page }) => {
    await page.goto('/');

    const header = page.locator('h1', { hasText: 'Web e Mobile' });
    await expect(header).toBeVisible();

    const healthStatus = page.locator('.health-status');
    await expect(healthStatus).toBeVisible();
    await expect(healthStatus).toContainText(/Status do Grupo:/);
  });

  test('UX: Botões respeitam a zona do polegar (Thumb Zone, min 44px)', async ({ page }) => {
     await page.goto('/');
     
     // Aguarda o fallback renderizar O botão principal da página inicial (Pomodoro)
     const startBtn = page.getByRole('button', { name: /▶️ Focar/i }).first();
     await startBtn.waitFor({ state: 'visible' });
     
     const box = await startBtn.boundingBox();
     expect(box).not.toBeNull();
     
     if (box) {
       expect(box.height).toBeGreaterThanOrEqual(44);
       expect(box.width).toBeGreaterThanOrEqual(44);
     }
  });

  test('Modal de Impacto (Smart Risk) renderiza conteúdo agressivo e cancela via escape/fechar', async ({ page }) => {
    await page.goto('/');

    // Clicar no Adiar de uma task qualquer
    const rescheduleBtn = page.getByRole('button', { name: /📅 Adiar/i }).first();
    await rescheduleBtn.waitFor({ state: 'visible' });
    await rescheduleBtn.click();

    // Modal deve aparecer
    const modalContent = page.locator('.modal-content');
    await expect(modalContent).toBeVisible();
    await expect(modalContent).toContainText('⚠️ Alerta Crítico (Smart Risk)');
    
    // Testar fechamento
    const fecharBtn = page.getByRole('button', { name: /❌ Mudar de Ideia/i });
    await fecharBtn.click();
    
    await expect(modalContent).toBeHidden();
  });

  test('Mecânica do Pomodoro: Start Engine e UI Feedback Otimista (Pulse Blur)', async ({ page }) => {
    await page.goto('/');

    const startBtn = page.getByRole('button', { name: /▶️ Focar/i }).first();
    await startBtn.waitFor({ state: 'visible' });
    
    // Salvar o Card Relacionado para ver se reflete que está ao vivo
    const card = page.locator('.task-card').first();
    
    await startBtn.click();

    // UI Feedback Imediato
    const activeTimer = page.locator('.active-timer.pulse-animation');
    await expect(activeTimer).toBeVisible();
    
    // Tag visual de Ao Vivo na Task
    await expect(card.locator('.focus-indicator')).toHaveText('🟢 Ao Vivo Focando');

    // Botão muda
    const startBtnDisabled = page.getByRole('button', { name: /▶️ Focar/i }).first();
    await expect(startBtnDisabled).toBeDisabled();

    // Parar Focus
    const stopButton = page.getByRole('button', { name: /Pausar\/Finalizar/i });
    await stopButton.click();

    await expect(activeTimer).toBeHidden();
    await expect(card.locator('.focus-indicator')).toBeHidden();
  });
});
