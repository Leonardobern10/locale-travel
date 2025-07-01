import type { ReactElement } from "react";
import ManagementTravelService from "./ManagementTravelService";
import TitleSectionColored from "../TitleSection";
import { LocaleWayServiceData } from "@data/LocalWayServiceData";
import TiltedCard from "../../ui/TiltedCard/TiltedCard";
import Subtitle from "../Subtitle";
import useWidth from "src/hooks/useWidth";
import ManagementTravelServiceMobile from "./ManagementTravelServiceMobile";

export default function LocaleWay(): ReactElement {
  return (
    <section className="w-full h-full flex flex-col items-center justify-between gap-y-15 padding-v-content font-hunnin bg-linear-to-t from-0% from-esmerald/70 to-40% to-white-default">
      <div className="flex flex-col items-center justify-between h-fit">
        <TitleSectionColored
          padding={true}
          title={LocaleWayServiceData.title}
        />
        <Subtitle white={false} title={LocaleWayServiceData.description} />
      </div>
      <div className="padding-h-content h-fit md:h-130 w-full flex flex-col md:flex-row items-center justify-between gap-x-4">
        {useWidth() > 575
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
