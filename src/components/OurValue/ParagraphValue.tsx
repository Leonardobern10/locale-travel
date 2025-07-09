import type { ReactElement } from 'react';
import TextDefault from '../TextDefault';

export default function ParagraphValue(props: {
     paragraphs: Array<string>;
}): ReactElement {
     return (
          <div className="flex flex-col gap-y-5 tracking-wide">
               {props.paragraphs.map((el, index) => (
                    <TextDefault text={el} key={index} />
               ))}
          </div>
     );
}
