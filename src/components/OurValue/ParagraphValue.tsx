import type { ReactElement } from "react";

export default function ParagraphValue(props: {
  text1: string;
  text2: string;
}): ReactElement {
  return (
    <div className="flex flex-col gap-y-5 tracking-wide">
      <p>{props.text1}</p>
      <p>{props.text2}</p>
    </div>
  );
}
