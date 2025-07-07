import type { ReactElement } from "react";
import type { IconType } from "react-icons";

export default function FooterIcon(props: { icon: IconType }): ReactElement {
  const Icon = props.icon;
  return (
    <div
      data-testid="footer-icon"
      className="w-10 h-10 hover:scale-110 hover:cursor-pointer"
    >
      <Icon
        data-testid="icon-imports"
        className="w-full h-full text-esmerald"
      />
    </div>
  );
}
