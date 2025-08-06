import type { ReactElement } from 'react';
import logo from '@images/logo.svg';
import { Link } from 'react-router';

export default function Logo(): ReactElement {
     return (
          <div className="w-20 h-fit md:w-30 md:h-10 flex-shrink-0 flex items-center justify-center hover:cursor-pointer">
               <Link to="/" className="w-full h-full">
                    <img
                         src={logo}
                         alt="Logo"
                         className="w-full h-full object-contain"
                    />
               </Link>
          </div>
     );
}
