import type { ButtonThemeType } from 'src/types/button/ButtonThemeType';
import type { ReactElement } from 'react';
import { FaArrowTrendUp } from 'react-icons/fa6';
import { Link } from 'react-router';

export default function LinkDefault(props: {
     linkName: string;
     icon: boolean;
     theme: ButtonThemeType;
     path: string;
}): ReactElement {
     return (
          <Link
               to={props.path}
               className={`font-hunnin w-fit h-5 px-2 py-4 rounded-2xl ${props.theme ?? 'hover:text-white hover:bg-esmerald text-esmerald last:mask-conic-to-neutral-50'}  mt-5 flex flex-row items-center justify-between gap-x-1 transition-colors delay-100`}>
               <p className="link">{props.linkName}</p>
               {props.icon && <FaArrowTrendUp className="w-fit h-fit" />}
          </Link>
     );
}
