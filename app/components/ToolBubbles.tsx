import React from "react";

interface ToolBubblesProps {
  tools?: string[];
}

export default function ToolBubbles(props: ToolBubblesProps) {
  return (
    <div className="flex flex-wrap">
      {props.tools?.map((tool: string) => {
        return (
          <p
            className="text-white text-sm bg-[#514E6D] font-medium rounded-full py-1 px-2 mr-1 mt-1"
            key={tool}
          >
            {tool}
          </p>
        );
      })}
    </div>
  );
}
