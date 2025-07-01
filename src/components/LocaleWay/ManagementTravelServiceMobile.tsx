import type { ReactElement } from "react";
import type { ServiceType } from "src/types/ServiceTypes";

export default function ManagementTravelServiceMobile({
  service,
  icon,
}: ServiceType): ReactElement {
  const Icon = icon;
  return (
    <div className="h-50 w-7/8">
      <div className="h-full w-full flex flex-col gap-y-2">
        <div className="flex flex-col items-center justify-evenly gap-y-4">
          <div className="p-4 rounded-2xl bg-esmerald">
            <Icon className="w-10 h-10" />
          </div>
          <h4 className="text-md text-esmerald">{service}</h4>
        </div>
      </div>
    </div>
  );
}
