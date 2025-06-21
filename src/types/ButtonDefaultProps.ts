import type { ReactNode } from "react";

export type ButtonDefaultProps = {
  buttonName: string | ReactNode;
  icon?: boolean;
  onClick: Function;
  black: boolean;
};
