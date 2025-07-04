import type { ReactElement } from "react";
import ManagementTravelService from "./ManagementTravelService";
import TitleSectionColored from "../TitleSection";
import { LocaleWayServiceData } from "@data/LocalWayServiceData";
import TiltedCard from "../../ui/TiltedCard/TiltedCard";
import Subtitle from "../Subtitle";
import useWidth from "src/hooks/useWidth";
import ManagementTravelServiceMobile from "./ManagementTravelServiceMobile";
import useShowSequence from "src/hooks/useShowSequence";

export default function LocaleWay(): ReactElement {
  if (useWidth()) {
    useShowSequence(".tilted-card", "#container-locale-way");
  } else {
    useShowSequence(".travel-service", "#container-locale-way");
  }

  return (
    <section className="border-2 w-full h-full flex flex-col items-center justify-between gap-y-15 padding-v-content padding-v-mobile font-hunnin md:bg-linear-to-t md:from-0% md:from-esmerald/70 md:to-40% md:to-white-default">
      <div className="flex flex-col items-center justify-between h-fit">
        <TitleSectionColored
          padding={true}
          title={LocaleWayServiceData.title}
        />
        <Subtitle white={false} title={LocaleWayServiceData.description} />
      </div>
      <div
        id="container-locale-way"
        className="padding-h-content h-fit lg:h-130 w-full flex flex-col md:flex-row items-center justify-between gap-x-4"
      >
        {useWidth()
          ? LocaleWayServiceData.services.map((el) => (
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
                    key={el.index}
                    img={el.img}
                    icon={el.icon}
                    service={el.service}
                    description={el.description}
                  />
                }
              />
            ))
          : LocaleWayServiceData.services.map((el) => (
              <ManagementTravelServiceMobile
                index={el.index}
                key={el.index}
                img={el.img}
                icon={el.icon}
                service={el.service}
                description={el.description}
              />
            ))}
      </div>
    </section>
  );
}
