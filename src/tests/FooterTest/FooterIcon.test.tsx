import { render, screen } from '@testing-library/react';
import FooterIcon from 'src/components/Footer/FooterIcon';
import { expect, it } from 'vitest';
import { FaBeer } from 'react-icons/fa';

it('deve renderizar o ícone que recebe', () => {
     render(<FooterIcon icon={FaBeer} />);
     const icon = screen.getByTestId('icon-imports');
     expect(icon).toBeInTheDocument();
});

it('deve aplicar as classes tailwind corretamente no container', () => {
     render(<FooterIcon icon={FaBeer} />);
     const container = screen.getByTestId('footer-icon');
     expect(container).toHaveClass('w-10');
     expect(container).toHaveClass('h-10');
     expect(container).toHaveClass('hover:scale-110');
     expect(container).toHaveClass('hover:cursor-pointer');
});

it('deve aplicar as classes Tailwind corretamente no ícone', () => {
     render(<FooterIcon icon={FaBeer} />);
     const icon = screen.getByTestId('icon-imports');
     expect(icon).toHaveClass('w-full');
     expect(icon).toHaveClass('h-full');
     expect(icon).toHaveClass('text-esmerald');
});
