import type { OfferDataProps } from "src/types/OfferDataProps";
import offer1 from "../assets/img/offer_1.png";
import offer2 from "../assets/img/offer_2.png";
import offer3 from "../assets/img/offer_3.png";
import offer4 from "../assets/img/offer_4.png";
import offer5 from "../assets/img/offer_5.png";
import offer7 from "../assets/img/offer_6.png";
import type { SectionTextType } from "../types/SectionTextType";

export const offerTexts: SectionTextType = {
  title: "O que oferecemos?",
  subtitle: "Conectando você aos melhores destinos e serviços.",
};

export const offerData: Array<OfferDataProps> = [
  {
    index: 0,
    image: offer1,
    offerTitle: "Viagem de negócios",
    linkName: "Gestão de viagens corporativas",
  },
  {
    index: 1,
    image: offer2,
    offerTitle: "Lazer",
    linkName: "Vivências em viagens de lazer",
  },
  {
    index: 2,
    image: offer3,
    offerTitle: "Esportes",
    linkName: "Gestão de viagens esportivas",
  },
  {
    index: 3,
    image: offer4,
    offerTitle: "Entretenimento",
    linkName: "Viagens para entretenimento",
  },
  {
    index: 4,
    image: offer5,
    offerTitle: "Exclusivo",
    linkName: "Gestão de viagens para eventos",
  },
  {
    index: 5,
    image: offer7,
    offerTitle: "Online",
    linkName: "Plataformas de agendamento online",
  },
];
