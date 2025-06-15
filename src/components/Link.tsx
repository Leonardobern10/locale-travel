import type { ReactElement } from "react";
import { FaArrowTrendUp } from "react-icons/fa6";

export default function Link(props: { linkName: string }): ReactElement {
  return (
    <a
      href=""
      className="w-fit h-5 text-esmerald last:mask-conic-to-neutral-50 mt-5 flex flex-row items-center justify-between gap-x-1"
    >
      <p className="link">{props.linkName}</p>
      <FaArrowTrendUp className="w-fit h-fit" />
    </a>
  );
}
