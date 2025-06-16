import type { ReactElement } from "react";
import TitleSectionColored from "../TitleSection";
import offer1 from "@images/offer_1.png";
import Link from "../Link";

export default function WeOffer(): ReactElement {
  return (
    <section className="h-fit w-full bg-neutral-800 flex flex-col justify-between gap-y-20 font-hunnin">
      <TitleSectionColored title="What we offer" padding={true} />
      <div className="flex flex-col justify-evenly gap-y-40 ">
        <div className="relative self-end shadow-offer h-fit w-3/4">
          <img className="w-full h-full object-cover" src={offer1} alt="" />
          <div className="absolute inset-0 bg-esmerald/40 w-1/3 bg-opacity-50" />
          <div className="absolute bottom-20 left-15">
            <h4 className="text-4xl text-white">BUSINESS TRAVEL</h4>
            <div className="bg-white-default rounded-2xl">
              <Link linkName="Corporate Travel Management" />
            </div>
          </div>
        </div>
        <div className="relative self-start shadow-offer h-fit w-3/4">
          <img className="w-full h-full object-cover" src={offer1} alt="" />
          <div className="absolute inset-0 bg-esmerald/40 w-1/3 bg-opacity-50" />
          <div className="absolute bottom-20 left-15">
            <h4 className="text-4xl text-white">BUSINESS TRAVEL</h4>
            <div className="bg-white-default rounded-2xl">
              <Link linkName="Corporate Travel Management" />
            </div>
          </div>
        </div>
        <div className="relative self-end shadow-offer h-fit w-3/4">
          <img className="w-full h-full object-cover" src={offer1} alt="" />
          <div className="absolute inset-0 bg-esmerald/40 w-1/3 bg-opacity-50" />
          <div className="absolute bottom-20 left-15">
            <h4 className="text-4xl text-white">BUSINESS TRAVEL</h4>
            <div className="bg-white-default rounded-2xl">
              <Link linkName="Corporate Travel Management" />
            </div>
          </div>
        </div>
        <div className="relative self-end shadow-offer h-fit w-3/4">
          <img className="w-full h-full object-cover" src={offer1} alt="" />
          <div className="absolute inset-0 bg-esmerald/40 w-1/3 bg-opacity-50" />
          <div className="absolute bottom-20 left-15">
            <h4 className="text-4xl text-white">BUSINESS TRAVEL</h4>
            <div className="bg-white-default rounded-2xl">
              <Link linkName="Corporate Travel Management" />
            </div>
          </div>
        </div>
        <div className="relative self-end shadow-offer h-fit w-3/4">
          <img className="w-full h-full object-cover" src={offer1} alt="" />
          <div className="absolute inset-0 bg-esmerald/40 w-1/3 bg-opacity-50" />
          <div className="absolute bottom-20 left-15">
            <h4 className="text-4xl text-white">BUSINESS TRAVEL</h4>
            <div className="bg-white-default rounded-2xl">
              <Link linkName="Corporate Travel Management" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
