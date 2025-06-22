import type { ReactElement } from "react";
import ButtonDefault from "../ButtonDefault";

export default function Invite(): ReactElement {
  return (
    <section className="flex flex-col items-center justify-center h-150">
      <div className="flex flex-col items-center justify-between gap-y-5">
        <p className="font-extrabold text-neutral-500 font-hunnin">
          What are you doing for?
        </p>
        <p className="text-9xl font-bold">Let's talk travel</p>
        <ButtonDefault
          buttonName="Contact Us"
          onClick={() => console.log("Ola")}
          black={false}
        />
      </div>
    </section>
  );
}
