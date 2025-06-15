import type { ButtonDefaultProps } from "src/types/ButtonDefaultProps";
import type { MouseEvent, ReactElement } from "react";

export default function ButtonDefault({
  buttonName,
  onClick,
}: ButtonDefaultProps): ReactElement {
  const handleClick = (e: MouseEvent) => {
    e.stopPropagation();
    onClick(e);
  };
  return (
    <button
      onClick={handleClick}
      className="bg-black h-12 text-white text-lg py-2 px-7 font-hunnin rounded-2xl hover:cursor-pointer hover:scale-95"
    >
      {buttonName}
    </button>
  );
}
