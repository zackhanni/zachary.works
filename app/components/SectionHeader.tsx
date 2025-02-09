import React from "react";

export default function SectionHeader({ title }: { title: string }) {
  return (
    <div className="w-fit flex items-center justify-center z-20 sticky top-0 h-[90px]">
      <h2 className="text-2xl font-semibold text-black ">{title}</h2>
    </div>
  );
}
