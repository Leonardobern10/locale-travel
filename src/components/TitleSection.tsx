import type { ReactElement } from "react";

export default function TitleSectionColored(props: {
  title: string;
  padding: boolean;
  center?: boolean;
  white?: boolean;
}): ReactElement {
  let string = props.title.split(" ");
  return (
    <h2
      className={`text-4xl font-ranchers ${
        props.white ? "text-white-default" : "text-neutral-500/40"
      } pt-10 ${props.padding ? "p-4" : "p-0"} ${
        props.center && "self-center"
      } tracking-widest h-fit`}
    >
      {string[0]}
      <span className="text-esmerald px-2"> {string[1]} </span>
      {string[2]}
    </h2>
  );
}
