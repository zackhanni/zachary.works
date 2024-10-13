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
            className="text-slate-200 text-xs bg-[#514E6D] rounded-full py-1 px-2.5 mr-1.5 mb-1.5"
            key={tool}
          >
            {tool}
          </div>
        );
      })}
    </div>
  );
}
