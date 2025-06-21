import type { OfferDataProps } from "src/types/OfferDataProps";
import type { ReactElement } from "react";
import ButtonDefault from "../ButtonDefault";

export default function OfferComponent({
  index,
  image,
  offerTitle,
  linkName,
}: OfferDataProps): ReactElement {
  const i = index % 2 === 0;
  return (
    <div
      className={`relative ${
        i ? "self-end" : "self-start"
      } shadow-offer h-fit w-3/5`}
    >
      <img
        className="w-full h-full object-cover"
        src={image}
        alt={`Image ilustrativa para ${offerTitle} `}
      />
      <div
        className={`absolute inset-0 ${
          i ? "right-4/6" : "left-4/8"
        } bg-esmerald/40 w-1/2 bg-opacity-50"`}
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
