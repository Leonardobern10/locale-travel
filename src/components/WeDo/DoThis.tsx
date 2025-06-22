import type { DoThisProps } from "src/types/DoThisProps";
import type { ReactElement } from "react";

export default function DoThis({
  icon,
  subtitle,
  text,
}: DoThisProps): ReactElement {
  const Icon = icon;
  return (
    <article className="flex flex-col items-start justify-evenly gap-5 p-8 font-hunnin">
      <div className="w-20 h-20 border-2 border-dashed rounded-br-4xl border-esmerald p-4">
        <Icon className="text-esmerald w-full h-full" />
      </div>
      <h5 className="font-bold text-lg">{subtitle}</h5>
      <p className="text-neutral-500">{text}</p>
    </article>
  );
}
