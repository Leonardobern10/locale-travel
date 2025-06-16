import type { ReactElement } from "react";
import OurValueComponent from "./OurValueComponent";
import { ourValueData } from "@data/OurValueData";

export default function OurValues(): ReactElement {
  return (
    <div className="border-2 border-blue-600 w-screen h-fit">
      {ourValueData.map((el) => (
        <OurValueComponent
          key={el.index}
          image={el.image}
          index={el.index}
          linkName={el.linkName}
          title={el.title}
          subtitle={el.subtitle}
          text1={el.text1}
          text2={el.text2}
          rightPosition={el.rightPosition}
        />
      ))}
    </div>
  );
}
