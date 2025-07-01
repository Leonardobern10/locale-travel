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
    <article
      className={`w-full h-full flex flex-col ${
        rightPosition ? "md:flex-row-reverse" : "md:flex-row"
      } items-center justify-between `}
    >
      <div className="w-full md:w-1/2 h-full">
        <img className="w-full h-full" src={image} alt="Image for our values" />
      </div>
      <div className="w-5/6 md:w-1/2 h-full padding-h-content py-8 md:py-0 flex flex-col items-center justify-center">
        <TextValue
          title={title}
          subtitle={subtitle}
          paragraphs={[text1, text2]}
          linkName={linkName}
        />
      </div>
    </article>
  );
}
