import type { ServiceType } from "src/types/ServiceTypes";
import { useState, type ReactElement } from "react";

export default function ManagementTravelService({
  service,
  description,
  img,
  icon,
}: ServiceType): ReactElement {
  const Icon = icon;
  const [show, setShow] = useState(false);
  return (
    <div
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      className="relative h-full w-full bg-cover bg-no-repeat bg-center transition-all duration-300 ease-in-out"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="absolute bottom-0 h-fit w-full bg-esmerald/80 font-hunnin text-white-default">
        <div className="flex h-20 flex-row items-center justify-start gap-x-5 py-2 px-5">
          <div>
            <Icon className="w-10 h-10" />
          </div>
          <h4 className="text-lg">{service}</h4>
        </div>
        {show && (
          <div
            className={`overflow-hidden px-2 transition-all duration-800 ease-in-out ${
              show ? "opacity-100 max-h-40 py-2" : "opacity-0 max-h-0 py-0"
            }`}
          >
            {description}
          </div>
        )}
      </div>
    </div>
  );
}
