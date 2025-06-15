import type { ReactElement, MouseEvent } from "react";
import type { IconType } from "react-icons";

export default function ButtonHeader(props: { icon: IconType }): ReactElement {
  const handleClick = (e: MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
  };

  const RenderIcon = props.icon;

  return (
    <button
      onClick={handleClick}
      className="bg-white rounded-full w-8 h-8 p-2 font-hunnin hover:cursor-pointer"
    >
      <RenderIcon />
    </button>
  );
}
