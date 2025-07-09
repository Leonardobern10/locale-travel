import type { ReactElement } from 'react';

export default function TitleSectionColored(props: {
     title: string;
     padding: boolean;
     center?: boolean;
     white?: boolean;
     midColor?: boolean;
}): ReactElement {
     let string = props.title.split(' ');
     return (
          <h2
               className={`text-2xl md:text-4xl max-md:text-center font-ranchers ${
                    props.white ? 'text-white-default' : 'text-neutral-700'
               } md:pt-10 ${props.padding ? 'p-4' : 'p-0'} ${
                    props.center && 'self-center'
               } tracking-normal h-fit`}>
               {string[0]}
               <span
                    className={`${props.midColor ? 'text-esmerald' : ''} px-1`}>
                    {' '}
                    {string[1]}{' '}
               </span>
               {string[2]}
          </h2>
     );
}
