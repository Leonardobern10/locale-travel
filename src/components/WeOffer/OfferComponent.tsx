import type { OfferDataProps } from 'src/types/OfferDataProps';
import { useRef, type ReactElement } from 'react';
import ButtonDefault from '../Buttons/ButtonDefault';
import { useScroll } from 'src/hooks/useScroll';
import useWidth from 'src/hooks/useWidth';
import { ButtonThemeType } from 'src/types/button/ButtonThemeType';

export default function OfferComponent({
     index,
     image,
     offerTitle,
     linkName
}: OfferDataProps): ReactElement {
     const i = index % 2 === 0;
     const containerRef = useRef<HTMLDivElement>(null);

     useScroll(containerRef, 1, -200, 0);

     return (
          <div
               ref={containerRef}
               style={{
                    background: `url(${image})`,
                    backgroundPosition: 'center'
               }}
               className={`${
                    i ? 'self-end  rounded-l-lg' : 'self-start rounded-r-lg'
               } w-full md:w-1/2 lg:min-h-[300px]`} // 🔧 garantia de altura visível
          >
               <div
                    className={`${i ? 'place-self-start  rounded-l-lg' : 'place-self-end  rounded-r-lg'} bg-esmerald/50 shadow-2xl shadow-esmerald min-h-[300px] h-full w-1/2 flex flex-col justify-end items-center md:gap-y-4 pb-8 backdrop-brightness-50 px-2`}>
                    <h4 className="md:text-2xl xl:text-3xl text-clip text-white font-hunnin font-normal">
                         {offerTitle}
                    </h4>
                    {useWidth() && (
                         <ButtonDefault
                              theme={ButtonThemeType.BLUE}
                              buttonName={linkName}
                              onClick={() => console.log('ola')}
                         />
                    )}
               </div>
          </div>
     );
}
