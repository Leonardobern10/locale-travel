import type { ReactElement } from 'react';
import ButtonHeader from '../../ButtonHeader';
import { iconsButton } from '@data/ButtonIcons';
import type { NavBarProps } from 'src/types/NavBarProps';
import useWidth from 'src/hooks/useWidth';
import { Link } from 'react-scroll';

export default function NavBar({ items }: NavBarProps): ReactElement {
     return (
          <nav className="w-fit flex flex-row items-center justify-between md:justify-evenly gap-x-8">
               {useWidth() && (
                    <ul className="flex flex-row items-center justify-evenly gap-x-8 font-hunnin ">
                         {items.map((el, index) => (
                              <li
                                   className="lg:text-md xl:text-lg font-bold text-white text-shadow-2xs text-shadow-black hover:cursor-pointer hover:text-shadow-xs hover:text-shadow-esmerald"
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
               <div className="flex flex-row items-center justify-between gap-x-3">
                    {iconsButton.map((el, index) => (
                         <ButtonHeader icon={el} key={index} />
                    ))}
               </div>
          </nav>
     );
}
