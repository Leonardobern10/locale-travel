import type { ReactElement } from 'react';

export default function TextDefault(props: { text: string }): ReactElement {
     return (
          <p className="text-neutral-500 text-sm lg:text-base font-hunnin">
               {props.text}
          </p>
     );
}
