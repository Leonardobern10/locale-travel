import type { ReactElement } from 'react';
import logo from '@images/logo.svg';

export default function Logo(): ReactElement {
     return (
          <div className="w-28 h-12 md:w-fit md:h-10 flex-shrink-0 flex items-center justify-center">
               <img
                    src={logo}
                    alt="Logo"
                    className="w-full h-full object-contain"
               />
          </div>
     );
}
