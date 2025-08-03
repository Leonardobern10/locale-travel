import type { ButtonDefaultProps } from 'src/types/button/ButtonDefaultProps';
import type { MouseEvent, ReactElement } from 'react';
import { FaArrowTrendUp } from 'react-icons/fa6';

export default function ButtonDefault({
     buttonName,
     onClick,
     icon,
     theme,
     disabled,
     type
}: ButtonDefaultProps): ReactElement {
     const handleClick = (e: MouseEvent) => {
          e.stopPropagation();
          if (onClick) onClick(e);
     };

     return (
          <button
               disabled={disabled}
               onClick={handleClick}
               type={`${type ?? 'button'}`}
               className={`${
                    icon
                         ? 'flex flex-row items-center justify-between w-fit'
                         : ''
               } ${
                    theme ?? 'bg-white text-esmerald border-2 border-esmerald'
               } w-fit h-fit md:h-12 text-sm md:text-lg py-2 px-4 md:px-7 font-hunnin rounded-4xl hover:cursor-pointer hover:scale-95
        ${disabled ? 'opacity-50 cursor-not-allowed hover:scale-100' : ''}
      `}>
               {buttonName}{' '}
               {icon && (
                    <span className="ml-2 flex items-center justify-center">
                         <FaArrowTrendUp className="w-5 h-5 text-esmerald" />
                    </span>
               )}
          </button>
     );
}
