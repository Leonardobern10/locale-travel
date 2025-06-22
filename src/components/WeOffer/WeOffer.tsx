import type { ReactElement } from "react";
import TitleSectionColored from "../TitleSection";
import { offerData } from "@data/OfferData";
import OfferComponent from "./OfferComponent";
import Subtitle from "../Subtitle";

export default function WeOffer(): ReactElement {
  return (
    <section className="h-fit w-full bg-neutral-800 flex flex-col justify-between gap-y-20 font-hunnin padding-v-content">
      <div className="flex flex-col items-center text-neutral-400 font-bold w-full self-center">
        <TitleSectionColored
          white={true}
          center={true}
          title="What we offer"
          padding={true}
        />
        <Subtitle
          white={true}
          title="
          Learn about our travel management services for Corporate, Sports, Entertainment, Groups, Events and Leisure."
        />
      </div>
      <div className="flex flex-col justify-evenly gap-y-30 ">
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
