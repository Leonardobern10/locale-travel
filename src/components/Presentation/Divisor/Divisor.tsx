import { divisorData } from "@data/DivisorData";
import type { ReactElement } from "react";
import ButtonDefault from "src/components/ButtonDefault";

export default function Divisor(): ReactElement {
  const { text, icon, buttonText } = divisorData;
  const Icon = icon;
  return (
    <div className="w-screen h-20 flex flex-row items-center justify-center gap-x-8 bg-esmerald font-hunnin text-xl tracking-wide text-white">
      <p>{text}</p>
      <div>
        <Icon className="h-fit w-10" />
      </div>
      <ButtonDefault
        onClick={() => console.log("ola")}
        buttonName={buttonText}
      />
    </div>
  );
}
