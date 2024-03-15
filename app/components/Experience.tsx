import React from "react";
import WorkData from "./ExperienceData";
import ToolBubbles from "./ToolBubbles";
import ZackFLoatingCard from "./ZackFloatingCard";

export default function Experience() {
  return (
    <section className="bg-black text-white w-full flex justify-center pb-16 sm:px-4">
      <div className="flex flex-col items-center justify-center max-w-screen-lg">
        <h2
          id="experience"
          className="text-4xl font-bold text-center sticky top-0 z-10 w-full backdrop-blur py-4"
        >
          Experience
        </h2>
        <div className="flex">
          <ZackFLoatingCard />
          <div className="max-w-screen-sm space-y-4">
            {WorkData.map((job) => {
              return (
                <div
                  key={job.company}
                  className="bg-slate-800/20 p-4 rounded-lg radial-gradient backdrop-blur"
                >
                  <p className="text-xl font-semibold">{job.title}</p>
                  <div className=" flex text-white/80 text-sm">
                    <p className="text-[#514E6D] mr-1">{job.company}</p>
                    <p>{job.dateRange}</p>
                  </div>
                  <p className="text-white/80 text-sm">{job.location}</p>
                  {job.description.map((paragraph) => {
                    return (
                      <p key={paragraph} className="py-1">
                        {paragraph}
                      </p>
                    );
                  })}
                  <ToolBubbles tools={job.tools} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
