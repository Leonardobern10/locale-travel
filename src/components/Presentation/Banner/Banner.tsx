import type { BannerProps } from "../../../types/BannerProps";
import type { ReactElement } from "react";
import BannerTitle from "./BannerTitle";
import Link from "src/components/Link";

export default function Banner({
  bannerTitle,
  description,
  buttonContent,
}: BannerProps): ReactElement {
  return (
    <div className="padding-h-content w-1/2 h-4/7 flex flex-col items-start justify-between">
      <BannerTitle title={bannerTitle} />
      <p className="text-white w-5/6 font-hunnin text-sm">{description}</p>
      <Link linkName={buttonContent} />
    </div>
  );
}
