import { useRef, type ReactElement } from 'react';
import NavBar from './NavBar';
import { items } from '../../data/NavBarItems';
import { useScroll } from 'src/hooks/useScroll';
import Logo from '../Logo';

export default function Header(): ReactElement {
     const headerRef = useRef<HTMLDivElement>(null);
     useScroll(headerRef, 1.5, 0, -50);

     return (
          <header
               ref={headerRef}
               className="w-full h-16 lg:h-16 px-6 py-1 flex flex-row items-center justify-between gap-y-2 bg-transparent">
               <Logo />
               <div className="w-fit lg:w-full flex justify-center lg:justify-end">
                    <NavBar items={items} />
               </div>
          </header>
     );
}
