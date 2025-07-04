import type { BannerTitleProps } from "src/types/BannerTitleProps";
import type { ReactElement } from "react";

export default function BannerTitle({ title }: BannerTitleProps): ReactElement {
  const [firstWord, ...rest] = title.split(" ");
  return (
    <h1 className="border-2 text-4xl md:text-5xl lg:text-6xl text-white w-fit md:w-2/3 lg:w-full h-45 tracking-widest font-bold font-ranchers md:text-left md:leading-15 md:text-shadow-2xs md:text-shadow-black">
      <span className="text-esmerald">{firstWord}</span> {rest.join(" ")}
    </h1>
  );
}
