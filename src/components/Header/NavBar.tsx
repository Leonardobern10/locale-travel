import type { ReactElement } from 'react';
import useWidth from 'src/hooks/useWidth';
import { Link } from 'react-scroll';
import { Link as LinkRouter } from 'react-router';
import type { NavBarProps } from 'src/types/navbar/NavBarProps';

import { useAuthStore } from '@/store/useAuthStore';
import ButtonHeader from '../Buttons/ButtonHeader';
import { ButtonHeaderThemeType } from 'src/types/button/ButtonHeaderThemeType';

import { logout as submitLogout } from 'src/services/UserService';

export default function NavBar({ items }: NavBarProps): ReactElement {
     const { user, isAuthenticated, logout } = useAuthStore();

     const handleLogout = async () => {
          try {
               await submitLogout();
               logout();
          } catch (error) {
               console.error(error);
          }
     };

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
               {!isAuthenticated ? (
                    <div className="flex flex-row gap-x-4 ">
                         <LinkRouter
                              to="/register"
                              className="border text-sm border-white font-ibm px-3 py-1 rounded hover:bg-white hover:text-black transition">
                              Cadastro
                         </LinkRouter>
                         <LinkRouter
                              to="/login"
                              className="border text-sm border-white font-ibm px-3 py-1 rounded hover:bg-white hover:text-black transition">
                              Login
                         </LinkRouter>
                    </div>
               ) : (
                    <div className="flex flex-row items-center gap-x-4">
                         <p className="font-light">
                              Bem vindo, {`${user!.nome}`}!
                         </p>
                         <ButtonHeader
                              theme={ButtonHeaderThemeType.EXIT}
                              title="Sair"
                              event={handleLogout}
                         />
                    </div>
               )}
          </nav>
     );
}
