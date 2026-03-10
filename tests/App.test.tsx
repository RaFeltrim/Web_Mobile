import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import App from '../src/App';

// Mock do Supabase
vi.mock('../src/lib/supabase', () => ({
  supabase: {
    from: vi.fn(() => ({
      select: vi.fn().mockReturnThis(),
      order: vi.fn().mockResolvedValue({ data: null, error: new Error('Forced Error to trigger Mock UX') }),
      update: vi.fn().mockReturnThis(),
      eq: vi.fn().mockResolvedValue({ data: [], error: null }),
    })),
    channel: vi.fn(() => ({
      on: vi.fn().mockReturnThis(),
      subscribe: vi.fn().mockReturnThis(),
    })),
    removeChannel: vi.fn(),
  },
}));

describe('Study-Sync App UI & Timer Engine', () => {

  it('deve renderizar a interface base e o estado de saúde do grupo', async () => {
    render(<App />);
    
    expect(screen.getByText('Study-Sync')).toBeDefined();
    
    // Aguarda o fallback das tasks
    await waitFor(() => {
      expect(screen.getByText(/Status do Grupo:/)).toBeDefined();
    });
  });

  it('deve renderizar as tasks e os botões de pomodoro corretamente', async () => {
    render(<App />);

    await waitFor(() => {
      expect(screen.getByText('Criar Diagrama de Classes')).toBeDefined();
    });

    // Ao menos um botão de Start Pomodoro
    const buttons = screen.getAllByRole('button', { name: /Start Pomodoro/i });
    expect(buttons.length).toBeGreaterThan(0);
  });

  it.skip('deve habilitar o Active Timer ao clicar no botão respeitando o Thumb Zone de 44px', async () => {
    render(<App />);

    await waitFor(() => expect(screen.getByText('Criar Diagrama de Classes')).toBeDefined());

    vi.useFakeTimers();

    const buttons = screen.getAllByRole('button', { name: /Start Pomodoro/i });
    const firstButton = buttons[0];

    // Simula clique e início do foco
    fireEvent.click(firstButton);

    // O cronômetro de 25:00 deve aparecer
    expect(await screen.findByText('⏱ 25:00')).toBeDefined();
    
    // O botão de Pausar deve existir e poder ser clicado
    const stopButton = screen.getByRole('button', { name: /Pausar\/Finalizar Foco/i });
    expect(stopButton).toBeDefined();

    // Verificação de Cultura Shift-Left: Lógica de decremento
    vi.advanceTimersByTime(2000); // 2 segundos
    
    await waitFor(() => {
      expect(screen.getByText('⏱ 24:58')).toBeDefined();
    });
    
    vi.useRealTimers();
  });
});
