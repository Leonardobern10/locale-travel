import type { BannerTitleProps } from 'src/types/BannerTitleProps';
import type { ReactElement } from 'react';

export default function BannerTitle({ title }: BannerTitleProps): ReactElement {
     const [firstWord, ...rest] = title.split(' ');
     return (
          <h1 className="text-4xl sm:text-5xl lg:text-7xl text-white w-fit md:w-2/3 lg:w-5/6 xl:w-5/8 h-45 tracking-normal font-normal font-hunnin sm:text-left sm:leading-15">
               <span className="text-esmerald">{firstWord}</span>{' '}
               {rest.join(' ')}
          </h1>
     );
}
