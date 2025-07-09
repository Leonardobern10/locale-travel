import type { ReactElement } from 'react';
import TextValue from './TextValue';
import type { OurValueComponentProps } from 'src/types/OurValueComponentProps';

export default function OurValueComponent({
     image,
     title,
     subtitle,
     text1,
     text2,
     linkName,
     rightPosition
}: OurValueComponentProps): ReactElement {
     return (
          <article
               className={`w-full h-full flex flex-col ${
                    rightPosition ? 'lg:flex-row-reverse' : 'lg:flex-row'
               } items-center justify-between padding-v-content`}>
               <div className="w-full lg:w-1/2 h-full">
                    <img
                         className="w-full h-full"
                         src={image}
                         alt="Image for our values"
                    />
               </div>
               <div className="w-5/6 lg:w-1/2 h-full padding-h-content padding-v-mobile md:py-0 flex flex-col items-center justify-center">
                    <TextValue
                         title={title}
                         subtitle={subtitle}
                         paragraphs={[text1, text2]}
                         linkName={linkName}
                    />
               </div>
          </article>
     );
}
