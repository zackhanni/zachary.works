import React from "react";

export default function SectionHeader({ title }: { title: string }) {
  return (
    <div className="w-full flex items-center justify-center z-10 sticky top-0 backdrop-blur h-[90px]">
      <h2 className="text-3xl font-semibold text-slate-200 ">{title}</h2>
    </div>
  );
}
