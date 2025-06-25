import type { OurValueComponentProps } from "src/types/OurValueComponentProps";
import image1 from "../assets/img/locale_img_1.png";
import image2 from "../assets/img/image2.png";

export const ourValueData: Array<OurValueComponentProps> = [
  {
    index: 0,
    title: "Nossa história",
    subtitle: "Bem elaborada em cada ponto de contato",
    text1:
      "Locale Travel é uma empresa independente, de propriedade e operação australiana. Nossa equipe já gerenciou projetos envolvendo algumas das tarefas mais complexas de logística de viagens e transporte na Austrália. Como empresa, temos ampla experiência em todas as áreas de gestão de viagens.",
    text2:
      "Desde nossas soluções inovadoras para viagens corporativas até nossa expertise em planejamento estratégico para organizações esportivas, a Locale Travel cria experiências únicas para nossos parceiros. Para nós, sucesso significa fazer o que for preciso para conquistar o seu negócio todos os dias, por meio da paixão, inovação e um compromisso firme com as necessidades dos nossos clientes.",
    image: image1,
    linkName: "saiba mais",
    rightPosition: true,
  },
  {
    index: 1,
    title: "Por que nós?",
    subtitle: "Sua melhor escolha em viagens personalizadas",
    text1:
      "A experiência combinada de nosso conselho, gestão e colaboradores soma CENTENAS de anos. Temos uma ótima combinação de experiência consolidada e energia jovem.",
    text2:
      "Os serviços que você precisa, nós já fizemos, estamos fazendo e continuaremos fazendo. Estamos todos unidos com um único propósito: oferecer o MELHOR para VOCÊ. Sabemos que cada cliente e organização é diferente e especial à sua maneira. Adoramos criar soluções e programas personalizados que se adequem a você.",
    image: image2,
    linkName: "saiba mais",
    rightPosition: false,
  },
];
