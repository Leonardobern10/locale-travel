import type { ReactElement } from "react";

export default function FooterInfo(props: {
  title: string;
  content: Array<string>;
}): ReactElement {
  return (
    <div className="w-1/5 text-center font-hunnin">
      <p className="font-bold text-neutral-300">{props.title}</p>
      {props.content.map((el) => (
        <p className="text-neutral-500">{el}</p>
      ))}
    </div>
  );
}
