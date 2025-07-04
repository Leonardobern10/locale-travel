import type { ReactElement } from "react";
import DoThis from "./DoThis";
import TitleSectionColored from "../TitleSection";
import { doThisData } from "@data/DoThisData";
import Subtitle from "../Subtitle";
import ShowSequence from "src/hooks/useShowSequence";

export default function WeDo(): ReactElement {
  ShowSequence(".article", "#all-we-do");

  return (
    <section className="bg-linear-to-b from-white from-80% to-esmerald/20 to-100% w-screen flex flex-col gap-y-10 md:gap-y-20 items-center justify-between padding-v-content padding-v-mobile max-md:pt-8">
      <div className="flex flex-col items-center justify-between">
        <TitleSectionColored
          white={false}
          title="O que fazemos?"
          center={true}
          padding={true}
        />
        <Subtitle
          white={false}
          title="Serviços que atendem com excelência a qualquer necessidade."
        />
      </div>
      <div
        id="all-we-do"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-row-3  lg:grid-cols-3 lg:grid-rows-2 md:w-5/6 h-fit place-content-center items-start gap-4 md:gap-8"
      >
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
