import { render, screen } from '@testing-library/react';
import { it, expect, describe } from 'vitest';
import ManagementTravelServiceMobile from 'src/components/LocaleWay/ManagementTravelServiceMobile';
import { Fa3 } from 'react-icons/fa6';
import image from '@images/image2.png';

describe('ManagementTravelServiceMobile', () => {
     const mockProps = {
          service: 'Gestão Mobile',
          icon: Fa3,
          index: 1,
          img: image,
          description: ''
     };

     it('deve renderizar o nome do serviço', () => {
          render(<ManagementTravelServiceMobile {...mockProps} />);
          expect(screen.getByText(mockProps.service)).toBeInTheDocument();
     });

     it('deve renderizar o ícone com data-testid', () => {
          render(<ManagementTravelServiceMobile {...mockProps} />);
          const icon = screen.getByTestId('icon-travel-service-mobile');
          expect(icon).toBeInTheDocument();
     });

     it('deve aplicar as classes Tailwind no ícone', () => {
          render(<ManagementTravelServiceMobile {...mockProps} />);
          const icon = screen.getByTestId('icon-travel-service-mobile');
          expect(icon).toHaveClass('w-10');
          expect(icon).toHaveClass('h-10');
     });
});
