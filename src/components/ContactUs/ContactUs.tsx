import { useState, type ReactElement } from "react";
import TitleSectionColored from "../TitleSection";
import ButtonDefault from "../ButtonDefault";
import image from "@images/image_cel.png";
import Input from "./Input";
import Subtitle from "../Subtitle";
import { placeholders, titlesText } from "@data/ContactUsData";

export default function ContactUs(): ReactElement {
  const [fields, setFields] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  function isFormValid() {
    return (
      fields.name &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email) &&
      fields.subject &&
      fields.message
    );
  }

  function validateFields() {
    const newErrors = {
      name: fields.name ? "" : "Nome é obrigatório.",
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)
        ? ""
        : "E-mail inválido.",
      subject: fields.subject ? "" : "Assunto é obrigatório.",
      message: fields.message ? "" : "Mensagem é obrigatória.",
    };
    setErrors(newErrors);
    return Object.values(newErrors).every((err) => !err);
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFields((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    if (validateFields()) {
      // Simule envio assíncrono
      setTimeout(() => {
        console.log("Formulário enviado com sucesso:", fields);
        setFields({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setIsSubmitting(false);
      }, 1000);
    } else {
      setIsSubmitting(false);
      console.log("Erro ao enviar o formulário:", errors);
    }
  }

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
          <form className="flex flex-col gap-y-4 pb-4" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="name" className="text-neutral-200">
                Nome
              </label>
              <Input
                id="name"
                placeholder={placeholders.namePlaceholder}
                email={false}
                onChange={handleChange}
                value={fields.name}
              />
              {errors.name && (
                <span className="text-red-400 text-xs">{errors.name}</span>
              )}
            </div>

            <div className="flex flex-col gap-y-2">
              <label htmlFor="email" className="text-neutral-200">
                Email
              </label>
              <Input
                id="email"
                placeholder={placeholders.emailPlaceholder}
                email={true}
                onChange={handleChange}
                value={fields.email}
              />
              {errors.email && (
                <span className="text-red-400 text-xs">{errors.email}</span>
              )}
            </div>

            <div className="flex flex-col gap-y-2">
              <label htmlFor="subject" className="text-neutral-200">
                Assunto
              </label>
              <Input
                id="subject"
                placeholder={placeholders.subjectPlaceholder}
                email={false}
                onChange={handleChange}
                value={fields.subject}
              />
              {errors.subject && (
                <span className="text-red-400 text-xs">{errors.subject}</span>
              )}
            </div>

            <div className="flex flex-col gap-y-2">
              <label htmlFor="message" className="text-neutral-200">
                Mensagem{" "}
              </label>
              <textarea
                id="message"
                className="w-full h-50 border border-white/50 text-neutral-200 px-4 py-2 rounded-xl placeholder:text-neutral-600/50 focus:text-white focus:bg-white/50 focus:outline-none"
                placeholder={placeholders.messagePlaceholder}
                onChange={handleChange}
                value={fields.message}
              />
              {errors.message && (
                <span className="text-red-400 text-xs">{errors.message}</span>
              )}
            </div>
            <ButtonDefault
              disabled={!isFormValid() || isSubmitting}
              buttonName="Enviar"
              black={false}
              type="submit"
            />
          </form>
        </div>
      </div>
    </section>
  );
}
