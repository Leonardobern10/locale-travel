import type { ReactElement } from "react";
import TitleSectionColored from "../TitleSection";
import ButtonDefault from "../ButtonDefault";
import image from "@images/image_cel.png";
import Input from "./Input";
import Subtitle from "../Subtitle";
import { placeholders, titlesText } from "@data/ContactUsData";

export default function ContactUs(): ReactElement {
  return (
    <section className="w-screen h-5/6 flex flex-row font-hunnin">
      <div className="w-1/2">
        <img
          className="w-full h-full"
          src={image}
          alt="imagem de uma mão segurando um celular"
        />
      </div>
      <div className="w-1/2 padding-h-content bg-esmerald">
        <div className="flex flex-col gap-y-10">
          <div className="">
            <TitleSectionColored
              white={true}
              midColor={false}
              title={titlesText.title}
              center={true}
              padding={true}
            />
            <Subtitle white={true} title={titlesText.subtitle} />
          </div>
          <form className="flex flex-col gap-y-4 pb-4" action="">
            <div className="flex flex-col gap-y-2">
              <label htmlFor="name" className="text-neutral-200">
                Nome
              </label>
              <Input
                id="name"
                placeholder={placeholders.namePlaceholder}
                email={false}
              />
            </div>

            <div className="flex flex-col gap-y-2">
              <label htmlFor="email" className="text-neutral-200">
                Email
              </label>
              <Input
                id="email"
                placeholder={placeholders.emailPlaceholder}
                email={true}
              />
            </div>

            <div className="flex flex-col gap-y-2">
              <label htmlFor="subject" className="text-neutral-200">
                Assunto
              </label>
              <Input
                id="subject"
                placeholder={placeholders.subjectPlaceholder}
                email={false}
              />
            </div>

            <div className="flex flex-col gap-y-2">
              <label htmlFor="message" className="text-neutral-200">
                Mensagem{" "}
              </label>
              <textarea
                id="message"
                className="w-full h-50 border border-white/50 text-neutral-200 px-4 py-2 rounded-xl placeholder:text-neutral-600/50 focus:text-white focus:bg-white/50 focus:outline-none"
                placeholder={placeholders.messagePlaceholder}
              />
            </div>
            <ButtonDefault
              buttonName="Enviar"
              onClick={() => console.log("Ola")}
              black={false}
            />
          </form>
        </div>
      </div>
    </section>
  );
}
