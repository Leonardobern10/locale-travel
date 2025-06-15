import type { ReactElement } from "react";

export default function TitleSectionColored(props: {
  title: string;
}): ReactElement {
  let string = props.title.split(" ");
  return (
    <h2 className="text-4xl font-ranchers text-neutral-500/40 pt-10 p-4 tracking-widest">
      {string[0]}
      <span className="text-esmerald"> {string[1]} </span>
      {string[2]}
    </h2>
  );
}
