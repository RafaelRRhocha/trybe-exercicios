import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Testando a aplicação, testando botão, e sua funcionalidade', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('Verifica se o botão está na tela com o texto "Adicionar"', () => {
    const addTask = screen.getByText(/adicionar/i);
    expect(addTask).toBeInTheDocument();
    expect(addTask).toHaveTextContent('Adicionar');
  });

  it('Ao clicar no botão Adicionar a tarefa deve ser adicionada na tela', () => {
    const getLabel = screen.getByLabelText('Tarefa:');
    const addTask = screen.getByText(/adicionar/i);
    userEvent.type(getLabel, 'teste');
    userEvent.click(addTask);

    expect(screen.getByText('teste')).toBeInTheDocument();
  });
});
