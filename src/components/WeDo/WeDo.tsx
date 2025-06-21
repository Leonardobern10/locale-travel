import type { ReactElement } from "react";
import DoThis from "./DoThis";
import TitleSectionColored from "../TitleSection";

export default function WeDo(): ReactElement {
  return (
    <section className="w-screen bg-red-200 flex flex-col gap-y-20 items-center justify-between">
      <div className="text-center">
        <TitleSectionColored
          white={false}
          title="We Do"
          center={true}
          padding={true}
        />
        <p>
          Learn about our travel management services for Corporate, Sports,
          Entertainment, Groups, Events and Leisure.
        </p>
      </div>
      <div className="grid grid-cols-3 grid-rows-2 w-5/6 h-fit place-content-center items-center gap-8">
        <DoThis />
        <DoThis />
        <DoThis />
        <DoThis />
        <DoThis />
        <DoThis />
      </div>
    </section>
  );
}
