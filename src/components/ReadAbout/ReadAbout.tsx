import type { ReactElement } from "react";
import TitleSectionColored from "../TitleSection";
import Link from "../Link";
import { readAboutData } from "@data/ReadAboutData";
import Subtitle from "../Subtitle";
import ParagraphValue from "../OurValue/ParagraphValue";
import { useShowContainer } from "src/hooks/useShowContainer";

export default function ReadAbout(): ReactElement {
  useShowContainer("#section-read-about");

  return (
    <section
      id="section-read-about"
      className="h-full w-screen flex flex-col items-center justify-between gap-y-20 py-10 padding-h-content padding-v-mobile"
    >
      <div className="flex flex-col items-center md:items-start md:self-start justify-between w-full gap-y-5">
        <TitleSectionColored
          title={readAboutData.title}
          padding={false}
          center={false}
        />
        <Subtitle white={false} title={readAboutData.subtitle} />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-x-20">
        <div className="w-full md:w-1/2 h-full">
          <img
            className="w-full h-full"
            src={readAboutData.image}
            alt="Imagem de funcionários utilizando computador."
          />
        </div>
        <div className=" w-5/6 md:w-1/2 h-full flex flex-col gap-y-10 text-md md:text-lg font-hunnin pt-8">
          <ParagraphValue
            paragraphs={[readAboutData.text1, readAboutData.text2]}
          />
          <Link linkName={readAboutData.buttonName} />
        </div>
      </div>
    </section>
  );
}
