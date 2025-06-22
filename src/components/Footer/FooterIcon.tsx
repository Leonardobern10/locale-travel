import type { ReactElement } from "react";
import type { IconType } from "react-icons";

export default function FooterIcon(props: { icon: IconType }): ReactElement {
  const Icon = props.icon;
  return (
    <div className="w-10 h-10">
      <Icon className="w-full h-full text-esmerald" />
    </div>
  );
}
