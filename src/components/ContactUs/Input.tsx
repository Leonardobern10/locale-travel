import type { ReactElement } from "react";

export default function Input(props: {
  email: boolean;
  placeholder: string;
}): ReactElement {
  return (
    <input
      className="w-full h-13 border border-white/50 text-neutral-200 px-4 py-2 rounded-xl placeholder:text-neutral-600/50 focus:text-white focus:bg-white/50 focus:outline-none"
      type={props.email ? "email" : "text"}
      placeholder={props.placeholder}
    />
  );
}
