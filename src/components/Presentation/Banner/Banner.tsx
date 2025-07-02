import type { BannerProps } from "../../../types/BannerProps";
import { useRef, type ReactElement } from "react";
import BannerTitle from "./BannerTitle";
import Link from "src/components/Link";
import { useScroll } from "src/animation/scroll";

export default function Banner({
  bannerTitle,
  description,
  buttonContent,
}: BannerProps): ReactElement {
  const bannerRef = useRef<HTMLDivElement>(null);
  useScroll(bannerRef, 1.5, -100, 0);
  return (
    <div
      ref={bannerRef}
      className="p-6 md:p-0 padding-h-content w-full md:w-1/2 h-full md:h-4/7 flex flex-col items-center md:items-start justify-center md:justify-between gap-y-4 md:gap-y-8"
    >
      <BannerTitle title={bannerTitle} />
      <p className="text-white w-full md:w-full font-hunnin text-md md:text-lg">
        {description}
      </p>
      <Link linkName={buttonContent} />
    </div>
  );
}
