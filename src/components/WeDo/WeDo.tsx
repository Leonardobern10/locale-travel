import type { ReactElement } from "react";
import DoThis from "./DoThis";
import TitleSectionColored from "../TitleSection";
import { doThisData } from "@data/DoThisData";

export default function WeDo(): ReactElement {
  return (
    <section className="w-screen flex flex-col gap-y-20 items-center justify-between pt-30">
      <div className="flex flex-col items-center justify-between">
        <TitleSectionColored
          white={false}
          title="We Do"
          center={true}
          padding={true}
        />
        <p className="text-neutral-500 text-lg w-3/4 text-center font-hunnin">
          Learn about our travel management services for Corporate, Sports,
          Entertainment, Groups, Events and Leisure.
        </p>
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
