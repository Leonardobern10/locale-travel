import type { ReactElement } from 'react';
import type { IconType } from 'react-icons';

export default function ButtonIcon(props: { icon: IconType }): ReactElement {
     const Icon = props.icon;

     return (
          <button className="w-8 md:w-12 h-8 md:h-12" type="button">
               <Icon className="w-full h-full" />
          </button>
     );
}
