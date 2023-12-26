import React from "react";
import WorkData from "./ExperienceData";
import ToolBubbles from "./ToolBubbles";
import ZackFLoatingCard from "./ZackFloatingCard";

export default function Experience() {
  return (
    <section>
      <div className="bg-black text-white py-8 flex flex-col items-center justify-center">
        <h2
          id="work"
          className="text-5xl font-bold text-center sticky top-0 z-10 w-full backdrop-blur py-4"
        >
          Experience
        </h2>
        <div className="flex md:max-w-[90%] xl:max-w-[80%] 2xl:max-w-[60%] ">
          <ZackFLoatingCard />
          <div className="pb-24">
            {WorkData.map((job) => {
              return (
                <div
                  key={job.company}
                  className="bg-slate-800/20 p-4 sm:p-8 
        mt-6 rounded-lg radial-gradient backdrop-blur text-sm"
                >
                  <p className="text-xl font-semibold">{job.title}</p>
                  <div className="flex text-white/80">
                    <p className="text-[#514E6D] mr-1">{job.company}</p>
                    <p>{job.dateRange}</p>
                  </div>
                  <p className="text-white/80">{job.location}</p>
                  {job.description.map((paragraph) => {
                    return (
                      <p key={paragraph} className="py-3">
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
