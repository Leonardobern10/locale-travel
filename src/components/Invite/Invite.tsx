import type { ReactElement } from 'react';
import ButtonDefault from '../Buttons/ButtonDefault';
import { inviteData } from '@data/InviteData';
import { ButtonThemeType } from 'src/types/button/ButtonThemeType';

export default function Invite(): ReactElement {
     return (
          <section className="flex flex-col items-center justify-center h-90 md:h-150">
               <div className="flex flex-col items-center justify-between gap-y-8 md:gap-y-5">
                    <p className="font-extrabold text-neutral-500 font-hunnin">
                         {inviteData.question}
                    </p>
                    <p className="text-5xl md:text-9xl font-bold">
                         {inviteData.mainText}
                    </p>
                    <ButtonDefault
                         buttonName={inviteData.buttonText}
                         onClick={() => console.log('Ola')}
                         theme={ButtonThemeType.WHITE}
                    />
               </div>
          </section>
     );
}
