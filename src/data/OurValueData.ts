import type { OurValueComponentProps } from "src/types/OurValueComponentProps";
import image1 from "../assets/img/locale_img_1.png";
import image2 from "../assets/img/image2.png";

export const ourValueData: Array<OurValueComponentProps> = [
  {
    index: 0,
    title: "Our Locale Story",
    subtitle: "Well-crafted at every touchpoint",
    text1:
      "Locale Travel is an independent, Australian owned and operated company. Our staff have project managed some of the most difficult travel and freight logistic tasks in Australia. As a company we are fully experienced in all areas of travel management.",
    text2:
      "From our innovative corporate travel solutions, to our expertise in strategic planning for Sporting organisations, LOCALE Travel creates one-of-a-kind experiences for our partners. Success to us means doing what it takes to earn your business every day through passion, innovation and a steadfast commitment to our customers’ needs.",
    image: image1,
    linkName: "see more",
    rightPosition: true,
  },
  {
    index: 1,
    title: "Why Local Travel",
    subtitle: "Well-crafted at every touchpoint",
    text1:
      "The combined experience across our board, management and employees runs into the HUNDREDS of years.  We have a great blend of aged, experience to youthful, energy.",
    text2:
      "The services you require we have done, are doing, and will continue to do.  We have all come together for the sole purpose of providing the BEST for YOU.  We know every client and organisation is different and special in their way. We love constructing solutions and programs that are suited to you.",
    image: image2,
    linkName: "see more",
    rightPosition: false,
  },
];
