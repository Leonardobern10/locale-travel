import type { BannerTitleProps } from "src/types/BannerTitleProps";
import type { ReactElement } from "react";

export default function BannerTitle({ title }: BannerTitleProps): ReactElement {
  const [firstWord, ...rest] = title.split(" ");
  return (
    <h1 className="text-4xl md:text-5xl lg:text-6xl text-white w-fit md:w-full h-45 tracking-widest font-bold font-ranchers md:text-center lg:text-left md:leading-15">
      <span className="text-esmerald">{firstWord}</span> {rest.join(" ")}
    </h1>
  );
}
