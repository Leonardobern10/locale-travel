import type { ValueContentProps } from "src/types/ValueContentProps";
import type { ReactElement } from "react";
import TitleSectionColored from "../TitleSection";
import ParagraphValue from "./ParagraphValue";
import Link from "../Link";

export default function TextValue({
  title,
  subtitle,
  text1,
  text2,
  buttonName,
}: ValueContentProps): ReactElement {
  return (
    <div className="h-full flex flex-col items-start justify-between gap-y-2 text-start font-hunnin">
      <TitleSectionColored padding={false} title={title} />
      <h4 className="text-neutral-800/50 font-bold text-xl">{subtitle}</h4>
      <ParagraphValue text1={text1} text2={text2} />
      <Link linkName={buttonName} />
    </div>
  );
}
