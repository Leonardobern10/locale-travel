import type { NavBarItemsType } from 'src/types/navbar/NavBarItemsType';
import type { ReactElement } from 'react';
import { Link } from 'react-scroll';
import { useAuthStore } from '@/store/useAuthStore';
import { logout as submitLogout } from 'src/services/UserService';

import { Link as LinkRouter } from 'react-router';
import ButtonHeader from '../Buttons/ButtonHeader';
import { ButtonHeaderThemeType } from 'src/types/button/ButtonHeaderThemeType';

export default function DesktopNavBar(props: {
     items: NavBarItemsType[];
}): ReactElement {
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
          <div className="w-full h-fit flex flex-row justify-between">
               <ul className="flex flex-row items-center justify-around gap-x-4 font-ibm ">
                    {props.items.map((el, index) => (
                         <li
                              className="lg:text-md xl:text-md font-light text-white hover:cursor-pointer hover:underline"
                              key={index}>
                              <Link to={el.href} smooth={true} duration={500}>
                                   {el.title}
                              </Link>
                         </li>
                    ))}
               </ul>
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
          </div>
     );
}
