import type { ReactElement } from 'react';

export default function TitleSectionColored(props: {
     title: string;
     padding?: boolean;
     center?: boolean;
     white?: boolean;
     midColor?: boolean;
}): ReactElement {
     return (
          <h2
               className={`text-2xl lg:text-4xl max-md:text-center font-hunnin ${
                    props.white ? 'text-white-default' : 'text-neutral-700'
               } md:pt-10 ${props.padding ? 'p-4' : 'p-0'} ${
                    props.center && 'self-center'
               } tracking-normal h-fit`}>
               {props.title}
          </h2>
     );
}
