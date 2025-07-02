import type { LocalWayServiceProps } from "src/types/LocaleWayServiceProps";
import service1 from "@images/travel_tech.jpg";
import service2 from "@images/concierge_travel.png";
import service3 from "@images/spend_smarter.png";
import { PiAirplaneTakeoffBold } from "react-icons/pi";
import { BsPersonFillGear } from "react-icons/bs";
import { RiMoneyDollarBoxLine } from "react-icons/ri";

export const LocaleWayServiceData: LocalWayServiceProps = {
  title: "Nossa maneira",
  description:
    "Transformamos cada viagem em uma experiência única, feita com propósito e paixão.",
  services: [
    {
      index: 0,
      service: "Tecnologia de viagem",
      description:
        "Com sistemas inteligentes, automação e experiências personalizadas, conectamos você ao mundo com mais rapidez, segurança e conforto.",
      img: service1,
      icon: PiAirplaneTakeoffBold,
    },
    {
      index: 1,
      service: "Serviço personalizado de viagens",
      description:
        "Cada viajante é único — e sua jornada também deve ser. Por isso, oferecemos um serviço totalmente personalizado, pensado nos seus interesses, preferências e estilo de vida.a",
      img: service2,
      icon: BsPersonFillGear,
    },
    {
      index: 2,
      service: "Gaste melhor",
      description:
        "Viajar bem não precisa significar gastar mais. Com nossas ferramentas inteligentes e parcerias estratégicas, ajudamos você a maximizar seu orçamento, encontrando as melhores ofertas sem abrir mão da qualidade e do conforto.",
      img: service3,
      icon: RiMoneyDollarBoxLine,
    },
  ],
};
