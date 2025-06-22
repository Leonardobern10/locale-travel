import type { ReactElement } from "react";
import image from "@images/logo_blue.svg";
import { footerData, footerIcons } from "@data/FooterData";
import FooterIcon from "./FooterIcon";
import FooterInfo from "./FooterInfo";

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
      <div className="flex flex-row justify-evenly gap-x-5">
        {footerData.map((el) => (
          <FooterInfo title={el.title} content={[el.text]} key={el.index} />
        ))}
      </div>
      <div className="flex flex-row items-center justify-evenly gap-x-5">
        {footerIcons.map((el) => (
          <FooterIcon key={el.index} icon={el.icon} />
        ))}
      </div>
      <p className="text-neutral-400">
        {" "}
        Copyright © 2022 Locale Travel. All rights reserved.
      </p>
    </footer>
  );
}
