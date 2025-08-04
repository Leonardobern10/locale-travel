import type { ReactElement } from 'react';
import { NavLink } from 'react-router';

export default function RedirectLink(props: {
     to: string;
     str1: string;
     str2: string;
}): ReactElement {
     return (
          <p className="font-ibm">
               {props.str1 + ' Clique '}
               <NavLink
                    to={props.to}
                    className="font-hunnin text-blue-500 hover:text-white">
                    aqui
               </NavLink>{' '}
               {props.str2 + '.'}
          </p>
     );
}
