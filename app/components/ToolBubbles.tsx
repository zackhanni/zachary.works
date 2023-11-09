import React from 'react'

interface ToolBubblesProps {
    tools?: string[];
  }

export default function ToolBubbles(props: ToolBubblesProps) {
  return (
    <div className="flex flex-wrap">
    {props.tools?.map((tool: string) => {
      return (
        <p
          className="text-white text-sm bg-blue-800 font-medium rounded-full py-1 px-3 mr-1.5 mt-2"
          key={tool}
        >
          {tool}
        </p>
      );
    })}
  </div>
  )
}
