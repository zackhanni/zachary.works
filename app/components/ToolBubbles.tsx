import React from "react";

interface ToolBubblesProps {
  tools?: string[];
}

export default function ToolBubbles(props: ToolBubblesProps) {
  return (
    <div className="flex flex-wrap">
      {props.tools?.map((tool: string) => {
        return (
          <div
            className="text-slate-200 text-sm bg-[#514E6D] font-medium rounded-full py-1 px-2.5 mr-1.5 mt-1"
            key={tool}
          >
            {tool}
          </div>
        );
      })}
    </div>
  );
}
