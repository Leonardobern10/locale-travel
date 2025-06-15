import type { ReactElement } from "react";
import image1 from "@images/locale_img_1.png";
import TextValue from "./TextValue";

export default function OurValueComponent(props: {
  rightPosition: boolean;
}): ReactElement {
  return (
    <div
      className={`w-full h-full flex ${
        props.rightPosition ? "flex-row-reverse" : "flex-row"
      } items-center justify-between `}
    >
      <div className="w-1/2 h-full">
        <img
          className="w-full h-full"
          src={image1}
          alt="Image for our values"
        />
      </div>
      <div className="w-1/2 h-full padding-h-content flex flex-col items-center justify-center">
        <TextValue
          title="Our Locale Story"
          subtitle="Well-crafted at every touchpoint"
          text1="Locale Travel is an independent, Australian owned and operated company. Our staff have project managed some of the most difficult travel and freight logistic tasks in Australia. As a company we are fully experienced in all areas of travel management."
          text2="From our innovative corporate travel solutions, to our expertise in strategic planning for Sporting organisations, LOCALE Travel creates one-of-a-kind experiences for our partners. Success to us means doing what it takes to earn your business every day through passion, innovation and a steadfast commitment to our customers’ needs."
          buttonName="see more"
        />
      </div>
    </div>
  );
}
