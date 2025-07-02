import type { ReactElement } from "react";

export default function Subtitle(props: {
  title: string;
  white: boolean;
}): ReactElement {
  return (
    <p
      className={`${
        props.white ? "text-neutral-100" : "text-neutral-700/50"
      } font-bold padding-h-mobile text-md md:text-lg w-fit text-center tracking-wide leading-6 font-hunnin`}
    >
      {props.title}
    </p>
  );
}
