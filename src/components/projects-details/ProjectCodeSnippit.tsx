"use client";
import { CopyBlock, dracula } from "react-code-blocks";
type props = {
  item: { title: string; code: string };
};

function ProjectCodeSnippit({ item }: props) {
  return (
    <li>
      <span className="font-bold me-2 ">{item.title}</span>
      <div className="mt-2">
        <CopyBlock
          text={item.code}
          language="shell"
          showLineNumbers={false}
          codeBlock
          theme={dracula}
        />
      </div>
    </li>
  );
}

export default ProjectCodeSnippit;
