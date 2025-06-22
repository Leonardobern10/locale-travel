import type { ReactElement } from "react";
import TitleSectionColored from "../TitleSection";
import ButtonDefault from "../ButtonDefault";
import image from "@images/image_cel.png";
import Input from "./Input";
import Subtitle from "../Subtitle";

export default function ContactUs(): ReactElement {
  return (
    <section className="w-screen h-5/6 flex flex-row font-hunnin">
      <div className="w-1/2">
        <img className="w-full h-full" src={image} alt="" />
      </div>
      <div className="w-1/2 padding-h-content bg-esmerald">
        <div className="flex flex-col gap-y-10">
          <div className="">
            <TitleSectionColored
              white={false}
              title="Contact  Us"
              center={true}
              padding={true}
            />
            <Subtitle white={true} title="Fill out the form below." />
          </div>
          <form className="flex flex-col gap-y-8" action="">
            <Input placeholder="Full name" email={false} />
            <Input placeholder="Email address" email={true} />
            <Input placeholder="Subject" email={false} />
            <textarea
              className="w-full h-50 border border-white/50 text-neutral-200 px-4 py-2 rounded-xl placeholder:text-neutral-600/50 focus:text-white focus:bg-white/50 focus:outline-none"
              placeholder="Message"
            />
            <ButtonDefault
              buttonName="Submit"
              onClick={() => console.log("Ola")}
              black={false}
            />
          </form>
        </div>
      </div>
    </section>
  );
}
