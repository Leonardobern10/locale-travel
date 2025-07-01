import type { ButtonDefaultProps } from "src/types/ButtonDefaultProps";
import type { MouseEvent, ReactElement } from "react";
import { FaArrowTrendUp } from "react-icons/fa6";

export default function ButtonDefault({
  buttonName,
  onClick,
  icon,
  black,
  disabled,
}: ButtonDefaultProps): ReactElement {
  const handleClick = (e: MouseEvent) => {
    e.stopPropagation();
    if (onClick) onClick(e);
  };

  return (
    <button
      disabled={disabled}
      onClick={handleClick}
      className={`${
        icon ? "flex flex-row items-center justify-between w-fit" : ""
      } ${
        black
          ? "bg-black-default text-white"
          : "bg-white text-esmerald border-2 border-esmerald"
      } w-fit h-8 md:h-12 text-sm md:text-lg py-2 px-4 md:px-7 font-hunnin rounded-4xl hover:cursor-pointer hover:scale-95
        ${disabled ? "opacity-50 cursor-not-allowed hover:scale-100" : ""}
      `}
    >
      {buttonName}{" "}
      {icon && (
        <span className="ml-2 flex items-center justify-center">
          <FaArrowTrendUp className="w-5 h-5 text-esmerald" />
        </span>
      )}
    </button>
  );
}
