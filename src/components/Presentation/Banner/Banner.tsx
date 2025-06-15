import type { BannerProps } from "../../../types/BannerProps";
import type { ReactElement } from "react";
import BannerTitle from "./BannerTitle";

export default function Banner({
  bannerTitle,
  description,
  buttonContent,
}: BannerProps): ReactElement {
  return (
    <div className="padding-h-content w-1/2 h-4/7 flex flex-col items-start justify-between">
      <BannerTitle title={bannerTitle} />
      <p className="text-white w-5/6 font-hunnin text-sm">{description}</p>
      <button className="text-white font-hunnin hover:cursor-pointer hover:border-2 hover:border-esmerald p-2 hover:rounded-lg">
        {buttonContent}
      </button>
    </div>
  );
}
