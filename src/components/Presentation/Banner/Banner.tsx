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
      className="padding-h-content w-full md:w-1/2 h-auto md:h-4/7 flex flex-col items-start justify-between gap-y-4"
    >
      <BannerTitle title={bannerTitle} />
      <p className="text-white w-full md:w-5/6 font-hunnin text-sm">
        {description}
      </p>
      <Link linkName={buttonContent} />
    </div>
  );
}
