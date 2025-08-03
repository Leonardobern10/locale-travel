import type { ReactElement } from 'react';

export default function DescriptionText(props: {
     description: string;
}): ReactElement {
     return (
          <p className="text-white w-full lg:w-5/7 font-hunnin text-md md:text-lg md:text-center lg:text-left">
               {props.description}
          </p>
     );
}
