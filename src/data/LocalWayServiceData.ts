import type { LocalWayServiceProps } from "src/types/LocaleWayServiceProps";
import service1 from "@images/travel_tech.jpg";
import service2 from "@images/concierge_travel.png";
import service3 from "@images/spend_smarter.png";
import { BsBuildings } from "react-icons/bs";

export const LocaleWayServiceData: LocalWayServiceProps = {
  title: "The locale way",
  description:
    "Learn about our travel management services for Corporate, Sports, Entertainment, Groups, Events and Leisure.",
  services: [
    {
      index: 0,
      service: "Travel technology",
      description:
        "Travel asdasd as dasdasdasd sadsada sdasdas dasdas das das dasdasd asd asdasd as dsadasd a",
      img: service1,
      icon: BsBuildings,
    },
    {
      index: 1,
      service: "Concierge Travel Service",
      description:
        "Travel asdasd as dasdasdasd sadsada sdasdas dasdas das das dasdasd asd asdasd as dsadasd a",
      img: service2,
      icon: BsBuildings,
    },
    {
      index: 2,
      service: "Spend smarter",
      description:
        "Travel asdasd as dasdasdasd sadsada sdasdas dasdas das das dasdasd asd asdasd as dsadasd a",
      img: service3,
      icon: BsBuildings,
    },
  ],
};
