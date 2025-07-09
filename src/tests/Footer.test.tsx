import { render, screen } from '@testing-library/react';
import { it, expect } from 'vitest';
import Footer from '../components/Footer/Footer';
import { footerData, footerIcons } from '@data/FooterData';

it('deve renderizar o rodapé com a logo', () => {
     render(<Footer />);
     const logo = screen.getByAltText(/logo da empresa em cor azul/i);
     expect(logo).toBeInTheDocument();
});

it('Deve renderizar todas as seções de informações do rodapé', () => {
     render(<Footer />);
     footerData.forEach((el) => {
          expect(screen.getByText(el.title)).toBeInTheDocument();
          expect(screen.getByText(el.text)).toBeInTheDocument();
     });
});

it('deve renderizar todos os ícones do rodapé', () => {
     render(<Footer />);
     const icons = screen.getAllByTestId('footer-icon');
     expect(icons.length).toBe(footerIcons.length);
});

it('deve renderizar o texto de copyright', () => {
     render(<Footer />);
     const copyright = screen.getByTestId('footer-copyright');
     expect(copyright).toBeInTheDocument();
});
