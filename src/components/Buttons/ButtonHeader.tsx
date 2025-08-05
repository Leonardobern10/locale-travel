import { ButtonHeaderThemeType } from 'src/types/button/ButtonHeaderThemeType';
import type { ReactElement, MouseEvent } from 'react';

export default function ButtonHeader(props: {
     title: string;
     event: () => void;
     theme?: ButtonHeaderThemeType;
}): ReactElement {
     const handleClick = (e: MouseEvent<HTMLButtonElement>): void => {
          e.stopPropagation();
          props.event();
     };

     return (
          <button
               onClick={handleClick}
               className={`${props.theme ?? ButtonHeaderThemeType.DEFAULT} border text-sm border-white font-ibm font-light px-3 py-1 rounded transition hover:cursor-pointer`}>
               {props.title}
          </button>
     );
}
