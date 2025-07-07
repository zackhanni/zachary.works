import React from "react";

export default function ToolBubbles({ tools }: { tools: string[] }) {
  return (
    <div className="flex flex-wrap">
      {tools?.map((tool: string) => {
        return (
          <div
            className="text-slate-200 text-sm bg-[#514E6D] rounded-full py-[3px] px-2.5 mr-1.5 mb-1.5"
            key={tool}
          >
            {tool}
          </div>
        );
      })}
    </div>
  );
}
