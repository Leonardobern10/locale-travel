import type { ReactElement } from 'react';
import useWidth from 'src/hooks/useWidth';
import { Link } from 'react-scroll';
import { Link as LinkRouter } from 'react-router';
import type { NavBarProps } from 'src/types/navbar/NavBarProps';

export default function NavBar({ items }: NavBarProps): ReactElement {
     return (
          <nav className="w-fit flex flex-row items-center justify-between md:justify-between gap-x-40">
               {useWidth() && (
                    <ul className="flex flex-row items-center justify-around gap-x-4 font-ibm ">
                         {items.map((el, index) => (
                              <li
                                   className="lg:text-md xl:text-md font-light text-white hover:cursor-pointer hover:underline"
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
                         className="border border-white font-ibm px-3 py-1 rounded hover:bg-white hover:text-black transition">
                         Cadastro
                    </LinkRouter>
                    <LinkRouter
                         to="/login"
                         className="border border-white font-ibm px-3 py-1 rounded hover:bg-white hover:text-black transition">
                         Login
                    </LinkRouter>
               </div>
          </nav>
     );
}
