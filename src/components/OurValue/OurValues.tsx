import type { ReactElement } from "react";
import { ourValueData } from "@data/OurValueData";
import OurValueComponent from "./OurValueComponent";

export default function OurValues(): ReactElement {
  return (
    <section className="w-screen h-fit">
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
    </section>
  );
}
