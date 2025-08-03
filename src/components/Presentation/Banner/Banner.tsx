import type { BannerProps } from '../../../types/BannerProps';
import { useRef, type ReactElement } from 'react';
import BannerTitle from './BannerTitle';
import LinkDefault from 'src/components/LinkDefault';
import { useScroll } from 'src/hooks/useScroll';
import DescriptionText from 'src/components/DescriptionText';

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
               className="p-6 w-full lg:w-5/7 h-screen flex flex-col items-center lg:items-start justify-center lg:justify-center gap-y-4 md:gap-y-4">
               <BannerTitle title={bannerTitle} />
               <div>
                    <DescriptionText description={description} />
                    <LinkDefault linkName={buttonContent} />
               </div>
          </div>
     );
}
