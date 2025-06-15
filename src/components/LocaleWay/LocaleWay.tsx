import type { ReactElement } from "react";
import ManagementTravelService from "./ManagementTravelService";
import TitleSectionColored from "../TitleSection";
import { LocaleWayServiceData } from "@data/LocalWayServiceData";
import TiltedCard from "../../ui/TiltedCard/TiltedCard";

export default function LocaleWay(): ReactElement {
  return (
    <section className="h-fit flex flex-col items-center justify-between gap-y-15 font-hunnin">
      <div className="flex flex-col items-center justify-between h-fit">
        <TitleSectionColored title={LocaleWayServiceData.title} />
        <p className="text-center text-lg w-5/8 text-black-default/80">
          {LocaleWayServiceData.description}
        </p>
      </div>
      <div className="h-130 w-full flex flex-row items-center justify-between gap-x-4">
        {LocaleWayServiceData.services.map((el) => (
          <TiltedCard
            padding="0"
            key={el.index}
            captionText={el.service}
            altText={`Card for service ${el.service}`}
            containerHeight="500px"
            containerWidth="100%"
            contentHeight="100%"
            contentWidth="100%"
            content={
              <ManagementTravelService
                index={el.index}
                img={el.img}
                icon={el.icon}
                service={el.service}
                description={el.description}
              />
            }
          />
        ))}
      </div>
    </section>
  );
}
