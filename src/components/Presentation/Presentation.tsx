import type { ReactElement } from 'react';
import imageMain from '@images/image-main.png'; // resolve para um path final
import Banner from './Banner/Banner';
import { bannerTitleData } from '@data/BannerTitleData';
import Divisor from './Divisor/Divisor';

export default function Presentation(): ReactElement {
     const content = bannerTitleData;
     return (
          <div
               className="w-screen h-full lg:h-full flex flex-col justify-between bg-cover bg-no-repeat bg-center"
               style={{
                    backgroundImage: `url(${imageMain})`
               }}>
               <Banner
                    bannerTitle={content.title}
                    description={content.description}
                    buttonContent={content.buttonContent}
               />
               <Divisor />
          </div>
     );
}
