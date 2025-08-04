import type { ReactElement } from 'react';
import useWidth from 'src/hooks/useWidth';
import { Link } from 'react-scroll';
import { Link as LinkRouter } from 'react-router';
import type { NavBarProps } from 'src/types/navbar/NavBarProps';

export default function NavBar({ items }: NavBarProps): ReactElement {
     return (
          <nav className="w-fit flex flex-row items-center justify-between md:justify-between gap-x-40">
               {useWidth() && (
                    <ul className="flex flex-row items-center justify-around gap-x-4 font-hunnin ">
                         {items.map((el, index) => (
                              <li
                                   className="lg:text-md xl:text-lg font-light text-esmerald text-shadow-sm text-shadow-white hover:cursor-pointer hover:text-shadow-xs"
                                   key={index}>
                                   <Link
                                        to={el.href}
                                        smooth={true}
                                        duration={500}>
                                        {el.title}
                                   </Link>
                              </li>
                         ))}
                    </ul>
               )}
               <div className="flex flex-row gap-x-4 ">
                    <LinkRouter
                         to="/register"
                         className="lg:text-md xl:text-lg font-light font-hunnin text-esmerald text-shadow-sm text-shadow-white hover:cursor-pointer hover:text-shadow-xs">
                         Cadastro
                    </LinkRouter>
                    <LinkRouter
                         to="/login"
                         className="lg:text-md xl:text-lg font-light font-hunnin text-esmerald text-shadow-sm text-shadow-white hover:cursor-pointer hover:text-shadow-xs">
                         Login
                    </LinkRouter>
               </div>
          </nav>
     );
}
