import type { ReactElement } from "react";
import TitleSectionColored from "../TitleSection";
import { offerData } from "@data/OfferData";
import OfferComponent from "./OfferComponent";

export default function WeOffer(): ReactElement {
  return (
    <section className="h-fit w-full bg-neutral-800 flex flex-col justify-between gap-y-20 font-hunnin padding-v-content">
      <div className="text-center text-neutral-400 font-bold">
        <TitleSectionColored
          white={true}
          center={true}
          title="What we offer"
          padding={true}
        />
        <p>
          dasdsadasdas sadasd asdas dasdasd asdsad sadas dasdas dasd s a das
          dsaas dasd asdasdas dasda sdsa d
        </p>
      </div>
      <div className="flex flex-col justify-evenly gap-y-40 ">
        {offerData.map((el) => (
          <OfferComponent
            index={el.index}
            image={el.image}
            offerTitle={el.offerTitle}
            linkName={el.linkName}
          />
        ))}
      </div>
    </section>
  );
}
