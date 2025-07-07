import type { ReactElement } from "react";
import image from "@images/logo_blue.svg";
import { footerData, footerIcons, textCopyright } from "@data/FooterData";
import FooterIcon from "./FooterIcon";
import FooterInfo from "./FooterInfo";
import SpotlightCard from "src/ui/SpotlightCard/SpotlightCard";
import useWidth from "src/hooks/useWidth";

export default function Footer(): ReactElement {
  return (
    <footer className="pt-20 padding-h-content w-full h-fit bg-black-default flex flex-col items-center justify-evenly gap-y-10 font-hunnin">
      <div className="w-25 h-25">
        <img
          className="w-full h-full"
          src={image}
          alt="Logo da empresa em cor AZUL."
        />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-evenly gap-y-5 gap-x-5">
        {footerData.map((el) => (
          <FooterInfo title={el.title} content={[el.text]} key={el.index} />
        ))}
      </div>
      <div className="w-5/6 md:w-full flex flex-row items-center justify-evenly gap-x-5">
        {useWidth()
          ? footerIcons.map((el) => (
              <SpotlightCard
                children={<FooterIcon key={el.index} icon={el.icon} />}
              />
            ))
          : footerIcons.map((el) => (
              <FooterIcon key={el.index} icon={el.icon} />
            ))}
      </div>
      <p
        data-testid="footer-copyright"
        className="w-5/6 md:w-full text-sm md:text-lg text-neutral-400 text-center"
      >
        {textCopyright}
      </p>
    </footer>
  );
}
