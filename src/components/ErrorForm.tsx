import type { ReactElement } from 'react';

export default function ErrorForm(props: {
     errorMessage: string;
}): ReactElement {
     return (
          <span className="text-red-700 font-hunnin font-bold">
               {props.errorMessage}
          </span>
     );
}
