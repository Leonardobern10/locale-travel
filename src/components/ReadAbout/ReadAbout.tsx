import type { ReactElement } from "react";
import TitleSectionColored from "../TitleSection";
import Link from "../Link";
import { readAboutData } from "@data/ReadAboutData";
import Subtitle from "../Subtitle";

export default function ReadAbout(): ReactElement {
  return (
    <section className="w-screen flex flex-col items-center justify-between gap-y-20 py-10 padding-h-content">
      <div className="flex flex-col items-start self-start justify-between w-full gap-y-5">
        <TitleSectionColored
          title={readAboutData.title}
          padding={false}
          center={false}
        />
        <Subtitle white={false} title={readAboutData.subtitle} />
      </div>
      <div className="flex flex-row items-center justify-between gap-x-20">
        <div className="w-1/2 h-full">
          <img
            src={readAboutData.image}
            alt="Imagem de funcionários utilizando computador."
          />
        </div>
        <div className="w-1/2 h-full flex flex-col gap-y-10 text-lg font-hunnin text-neutral-400">
          <p>{readAboutData.text1}</p>
          <p>{readAboutData.text2}</p>
          <Link linkName={readAboutData.buttonName} />
        </div>
      </div>
    </section>
  );
}
