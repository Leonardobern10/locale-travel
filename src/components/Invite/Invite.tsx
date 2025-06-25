import type { ReactElement } from "react";
import ButtonDefault from "../ButtonDefault";
import { inviteData } from "@data/InviteData";

export default function Invite(): ReactElement {
  return (
    <section className="flex flex-col items-center justify-center h-150">
      <div className="flex flex-col items-center justify-between gap-y-5">
        <p className="font-extrabold text-neutral-500 font-hunnin">
          {inviteData.question}
        </p>
        <p className="text-9xl font-bold">{inviteData.mainText}</p>
        <ButtonDefault
          buttonName={inviteData.buttonText}
          onClick={() => console.log("Ola")}
          black={false}
        />
      </div>
    </section>
  );
}
