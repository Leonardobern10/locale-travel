import type { ReactElement } from 'react';
import type { NavBarProps } from 'src/types/navbar/NavBarProps';
import DesktopNavBar from './DesktopNavBar';
import ButtonIcon from '../Buttons/ButtonIcons';
import { TbMenu2 } from 'react-icons/tb';
import useMobile from '@/hooks/useMobile';

export default function NavBar({ items }: NavBarProps): ReactElement {
     const isMobile: boolean = useMobile();

     return (
          <nav className="w-full md:w-5/6 flex flex-row items-center justify-between md:justify-between gap-x-40">
               {isMobile ? (
                    <ButtonIcon icon={TbMenu2} />
               ) : (
                    <DesktopNavBar items={items} />
               )}
          </nav>
     );
}
