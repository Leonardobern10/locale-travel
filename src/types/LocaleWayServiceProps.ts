import type { ServiceType } from "./ServiceTypes";

export type LocalWayServiceProps = {
  title: string;
  description: string;
  services: Array<ServiceType>;
};
