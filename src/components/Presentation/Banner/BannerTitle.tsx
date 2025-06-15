import type { BannerTitleProps } from "src/types/BannerTitleProps";
import type { ReactElement } from "react";

export default function BannerTitle({ title }: BannerTitleProps): ReactElement {
  const [firstWord, ...rest] = title.split(" ");
  return (
    <h1 className="text-6xl text-white w-7/8 h-45 tracking-widest font-bold font-ranchers">
      <span className="text-esmerald">{firstWord}</span> {rest.join(" ")}
    </h1>
  );
}
