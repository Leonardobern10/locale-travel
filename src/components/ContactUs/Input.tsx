import type { ReactElement } from "react";

export default function Input(props: {
  email: boolean;
  placeholder: string;
}): ReactElement {
  return (
    <input
      className="w-full h-15 border border-white"
      type={props.email ? "email" : "text"}
      placeholder={props.placeholder}
    />
  );
}
