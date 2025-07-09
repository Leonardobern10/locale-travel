import type { ReactElement } from 'react';
import { FaArrowTrendUp } from 'react-icons/fa6';

export default function LinkDefault(props: { linkName: string }): ReactElement {
     return (
          <a
               href=""
               className="font-hunnin w-fit h-5 px-2 py-4 rounded-2xl text-esmerald last:mask-conic-to-neutral-50 mt-5 flex flex-row items-center justify-between gap-x-1 hover:text-white hover:bg-esmerald transition-colors delay-100">
               <p className="link">{props.linkName}</p>
               <FaArrowTrendUp className="w-fit h-fit" />
          </a>
     );
}
