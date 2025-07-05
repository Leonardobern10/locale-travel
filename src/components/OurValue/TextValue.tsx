import type { ValueContentProps } from "src/types/ValueContentProps";
import type { ReactElement } from "react";
import TitleSectionColored from "../TitleSection";
import ParagraphValue from "./ParagraphValue";
import LinkDefault from "../LinkDefault";

export default function TextValue({
  title,
  subtitle,
  paragraphs,
  linkName,
}: ValueContentProps): ReactElement {
  return (
    <div className="h-full flex flex-col items-start justify-between gap-y-2 text-start font-hunnin">
      <TitleSectionColored padding={false} title={title} />
      <h4 className="text-neutral-800/50 font-bold md:text-xl">{subtitle}</h4>
      <ParagraphValue paragraphs={paragraphs} />
      <LinkDefault linkName={linkName} />
    </div>
  );
}
