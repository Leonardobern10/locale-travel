import type { DoThisProps } from "src/types/DoThisProps";
import type { ReactElement } from "react";

export default function DoThis({
  icon,
  subtitle,
  text,
}: DoThisProps): ReactElement {
  const Icon = icon;
  return (
    <article className="border-2 flex flex-col items-start justify-evenly gap-5 p-8">
      <div className="w-10 h-10 border-2">
        <Icon />
      </div>
      <h5>{subtitle}</h5>
      <p>{text}</p>
    </article>
  );
}
