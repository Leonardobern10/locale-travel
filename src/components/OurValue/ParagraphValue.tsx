import type { ReactElement } from "react";

export default function ParagraphValue(props: {
  paragraphs: Array<string>;
}): ReactElement {
  return (
    <div className="flex flex-col gap-y-5 tracking-wide">
      {props.paragraphs.map((el, index) => (
        <p key={index}>{el}</p>
      ))}
    </div>
  );
}
