import type { ReactElement } from "react";

export default function DoThis(): ReactElement {
  return (
    <article className="border-2 flex flex-col items-start justify-evenly gap-5 p-8">
      <div className="w-10 h-10 border-2">icon</div>
      <h5>subtitulo</h5>
      <p>texto</p>
    </article>
  );
}
