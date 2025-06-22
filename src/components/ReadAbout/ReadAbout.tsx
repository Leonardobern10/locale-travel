import type { ReactElement } from "react";
import TitleSectionColored from "../TitleSection";
import Link from "../Link";
import type { readAboutData } from "@data/ReadAboutData";

export default function ReadAbout({
  title,
  subtitle,
  text,
  buttonName,
  image,
}: readAboutData): ReactElement {
  return (
    <section>
      <TitleSectionColored title={title} padding={true} center={true} />
      <p>{subtitle}</p>
      <div>
        <div>
          <img
            src={image}
            alt="Imagem de funcionários utilizando computador."
          />
        </div>
        <div>
          <p>{text}</p>
          <Link linkName={buttonName} />
        </div>
      </div>
    </section>
  );
}
