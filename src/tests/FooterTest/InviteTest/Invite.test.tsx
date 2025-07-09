import { inviteData } from '@data/InviteData';
import { fireEvent, render, screen } from '@testing-library/react';
import Invite from 'src/components/Invite/Invite';
import { expect, it, vi } from 'vitest';

it('deve renderizar os textos principais', () => {
     render(<Invite />);
     expect(screen.getByText(inviteData.question)).toBeInTheDocument();
     expect(screen.getByText(inviteData.mainText)).toBeInTheDocument();
});

it('deve renderizar o botão com o texto correto', () => {
     render(<Invite />);
     expect(
          screen.getByRole('button', { name: inviteData.buttonText })
     ).toBeInTheDocument();
});

it('deve chamar a função ao clicar no botão', () => {
     const logSpy = vi.spyOn(console, 'log');
     render(<Invite />);
     fireEvent.click(
          screen.getByRole('button', { name: inviteData.buttonText })
     );
     expect(logSpy).toHaveBeenCalledWith('Ola');
     logSpy.mockRestore();
});
