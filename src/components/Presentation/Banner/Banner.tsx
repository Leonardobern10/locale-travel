import type { BannerProps } from '../../../types/banner/BannerProps';
import { useRef, type ReactElement } from 'react';
import BannerTitle from './BannerTitle';
import LinkDefault from '@/components/Links/LinkDefault';
import { useScroll } from 'src/hooks/useScroll';
import DescriptionText from 'src/components/DescriptionText';
import { ButtonThemeType } from 'src/types/button/ButtonThemeType';

export default function Banner({
     bannerTitle,
     description,
     buttonContent
}: BannerProps): ReactElement {
     const bannerRef = useRef<HTMLDivElement>(null);
     useScroll(bannerRef, 1.5, -100, 0);
     return (
          <div
               ref={bannerRef}
               className="p-6 w-full lg:w-5/7 h-screen flex flex-col items-center lg:items-start justify-center lg:justify-end gap-y-4 md:gap-y-12">
               <BannerTitle title={bannerTitle} />
               <div>
                    <DescriptionText description={description} />
                    <LinkDefault
                         icon={true}
                         theme={ButtonThemeType.BLUE}
                         linkName={buttonContent}
                    />
               </div>
          </div>
     );
}
