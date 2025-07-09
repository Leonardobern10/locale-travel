import { render, screen } from '@testing-library/react';
import FooterInfo from 'src/components/Footer/FooterInfo';
import { expect, it } from 'vitest';

it('deve renderizar o titulo do corretament', () => {
     render(<FooterInfo title="Contato" content={['email@exemplo.com']} />);
     expect(screen.getByTestId('footer-info-title')).toHaveTextContent(
          'Contato'
     );
});

it('deve renderizar todos os itens de conteudo', () => {
     const content = ['email@exemplo.com', 'telefone: 1234-5678'];
     render(<FooterInfo title="Contato" content={content} />);
     content.forEach((item) => {
          expect(screen.getByText(item)).toBeInTheDocument();
     });
});
