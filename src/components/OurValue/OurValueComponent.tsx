import type { ReactElement } from "react";
import TextValue from "./TextValue";
import type { OurValueComponentProps } from "src/types/OurValueComponentProps";

export default function OurValueComponent({
  image,
  title,
  subtitle,
  text1,
  text2,
  linkName,
  rightPosition,
}: OurValueComponentProps): ReactElement {
  return (
    <div
      className={`w-full h-full flex ${
        rightPosition ? "flex-row-reverse" : "flex-row"
      } items-center justify-between `}
    >
      <div className="w-1/2 h-full">
        <img className="w-full h-full" src={image} alt="Image for our values" />
      </div>
      <div className="w-1/2 h-full padding-h-content flex flex-col items-center justify-center">
        <TextValue
          title={title}
          subtitle={subtitle}
          text1={text1}
          text2={text2}
          linkName={linkName}
        />
      </div>
    </div>
  );
}
