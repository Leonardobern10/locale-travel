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
               className="bg-black/50 text-white py-4 px-8 flex justify-between items-center fixed w-screen z-50">
               <Logo />
               <div className="w-fit lg:w-full flex justify-center lg:justify-end">
                    <NavBar items={items} />
               </div>
          </header>
     );
}
