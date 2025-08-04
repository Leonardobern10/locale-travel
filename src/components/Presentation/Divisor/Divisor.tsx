import { divisorData } from '@data/DivisorData';
import { ButtonThemeType } from 'src/types/button/ButtonThemeType';
import type { ReactElement } from 'react';
import ButtonDefault from '@/components/Buttons/ButtonDefault';
import useWidth from 'src/hooks/useWidth';

export default function Divisor(): ReactElement {
     const { text, icon, buttonText } = divisorData;
     const Icon = icon;
     return (
          <div className="w-screen h-fit md:h-20 flex flex-col md:flex-row items-center justify-center gap-y-5 md:gap-x-8 py-4 md:py-8 bg-esmerald font-hunnin text-sm md:text-xl md:tracking-wide text-white">
               <p>{text}</p>
               {useWidth() && (
                    <div>
                         {' '}
                         <Icon className="h-fit w-10" />{' '}
                    </div>
               )}
               <ButtonDefault
                    theme={ButtonThemeType.BLACK}
                    onClick={() => console.log('ola')}
                    buttonName={buttonText}
               />
          </div>
     );
}
