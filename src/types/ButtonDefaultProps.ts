import type { ReactNode } from "react";
import type { IconType } from "react-icons";

export type ButtonDefaultProps = {
  buttonName: string | ReactNode;
  icon?: boolean;
  onClick: Function;
};
