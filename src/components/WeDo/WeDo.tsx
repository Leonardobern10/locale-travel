import type { ReactElement } from "react";
import DoThis from "./DoThis";
import TitleSectionColored from "../TitleSection";
import { doThisData } from "@data/DoThisData";
import Subtitle from "../Subtitle";

export default function WeDo(): ReactElement {
  return (
    <section className="w-screen flex flex-col gap-y-20 items-center justify-between pt-15">
      <div className="flex flex-col items-center justify-between">
        <TitleSectionColored
          white={false}
          title="We Do"
          center={true}
          padding={true}
        />
        <Subtitle
          white={false}
          title="Learn about our travel management services for Corporate, Sports,
          Entertainment, Groups, Events and Leisure."
        />
      </div>
      <div className="grid grid-cols-3 grid-rows-2 w-5/6 h-fit place-content-center items-start gap-8">
        {doThisData.map((el) => (
          <DoThis
            key={el.id}
            icon={el.icon}
            subtitle={el.subtitle}
            text={el.text}
          />
        ))}
      </div>
    </section>
  );
}
