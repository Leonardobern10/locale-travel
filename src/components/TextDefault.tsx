import type { ReactElement } from 'react';

export default function TextDefault(props: { text: string }): ReactElement {
     return (
          <p className="text-neutral-500 text-sm md:text-md font-hunnin">
               {props.text}
          </p>
     );
}
