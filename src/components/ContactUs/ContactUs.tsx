import type { ReactElement } from "react";
import TitleSectionColored from "../TitleSection";
import ButtonDefault from "../ButtonDefault";
import image from "@images/image_cel.png";
import Input from "./Input";

export default function ContactUs(): ReactElement {
  return (
    <section>
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <div>
          <TitleSectionColored
            title="Contact Us"
            center={true}
            padding={true}
          />
          <p>Fill out the form below.</p>
          <form action="">
            <Input placeholder="Full name" email={false} />
            <Input placeholder="Email address" email={true} />
            <Input placeholder="Subject" email={false} />
            <textarea placeholder="Message" />
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
