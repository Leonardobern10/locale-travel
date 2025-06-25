import type { OfferDataProps } from "src/types/OfferDataProps";
import { useRef, type ReactElement } from "react";
import ButtonDefault from "../ButtonDefault";
import { useScroll } from "src/animation/scroll";

export default function OfferComponent({
  index,
  image,
  offerTitle,
  linkName,
}: OfferDataProps): ReactElement {
  const i = index % 2 === 0;
  const containerRef = useRef<HTMLDivElement>(null);

  useScroll(containerRef, 1, -200, 0);

  return (
    <div
      ref={containerRef}
      className={`relative ${
        i ? "self-end" : "self-start"
      } w-3/5 min-h-[300px]`} // 🔧 garantia de altura visível
    >
      <img
        className="w-full h-full object-cover"
        src={image}
        alt={`Imagem ilustrativa para ${offerTitle}`}
      />
      <div
        className={`absolute inset-0 ${
          i ? "right-4/6" : "left-4/8"
        } bg-emerald-500/40 w-1/2 shadow-offer`}
      />
      <div
        className={`absolute bottom-20 ${
          i ? "left-20" : "right-20"
        } flex flex-col gap-y-4`}
      >
        <h4 className="text-4xl text-white">{offerTitle}</h4>
        <ButtonDefault
          black={false}
          buttonName={linkName}
          onClick={() => console.log("ola")}
        />
      </div>
    </div>
  );
}
