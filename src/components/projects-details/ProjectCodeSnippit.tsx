"use client";
import { TBuildStep } from "@/data/types";
import { CopyBlock, dracula } from "react-code-blocks";
type props = {
  item: TBuildStep;
};

function ProjectCodeSnippit({ item }: props) {
  return (
    <li>
      <span className="font-bold me-2 ">{item.step}</span>
      <div className="mt-2">
        <CopyBlock
          text={item.command}
          language="shell"
          showLineNumbers={false}
          copied={false}
          codeBlock
          theme={dracula}
        />
      </div>
    </li>
  );
}

export default ProjectCodeSnippit;
