import type { ReactElement } from "react";
import OurValueComponent from "./OurValueComponent";

export default function OurValues(): ReactElement {
  return (
    <div className="border-2 border-blue-600 w-screen h-fit">
      <OurValueComponent rightPosition={true} />
      <OurValueComponent rightPosition={false} />
    </div>
  );
}
