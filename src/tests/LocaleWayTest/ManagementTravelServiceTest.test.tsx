import { render, screen, fireEvent } from '@testing-library/react';
import { it, expect, describe } from 'vitest';
import ManagementTravelService from 'src/components/LocaleWay/ManagementTravelService';
import image from '@images/image2.png';
import { Fa3 } from 'react-icons/fa6';

const mockProps = {
     index: 1,
     img: image,
     icon: Fa3,
     service: 'Gestão de Viagens',
     description: 'Descrição do serviço de gestão de viagens.'
};

describe('ManagementTravelService', () => {
     it('deve renderizar o nome do serviço', () => {
          render(<ManagementTravelService {...mockProps} />);
          expect(screen.getByText(mockProps.service)).toBeInTheDocument();
     });

     it('deve renderizar o ícone com o data-testid correto', () => {
          render(<ManagementTravelService {...mockProps} />);
          expect(
               screen.getByTestId('icon-management-travel-desktop')
          ).toBeInTheDocument();
     });

     it('deve renderizar o background com a imagem correta', () => {
          render(<ManagementTravelService {...mockProps} />);
          const container = screen.getByTestId(
               'management-travel-container-desktop'
          );
          expect(container).toHaveStyle(
               `background-image: url(${mockProps.img})`
          );
     });

     it('deve mostrar a descrição ao passar o mouse', () => {
          render(<ManagementTravelService {...mockProps} />);
          const container = screen.getByTestId(
               'management-travel-container-desktop'
          );
          fireEvent.mouseEnter(container);
          expect(screen.getByText(mockProps.description)).toBeInTheDocument();
          fireEvent.mouseLeave(container);
          // Após mouseLeave, a descrição não deve estar visível
          expect(
               screen.queryByText(mockProps.description)
          ).not.toBeInTheDocument();
     });
});
