import React from "react";
import WorkData from "./ExperienceData";
import ToolBubbles from "./ToolBubbles";
import ZackFLoatingCard from "./ZackFloatingCard";

export default function Experience() {
  return (
    <section className="bg-black text-slate-200 w-full flex justify-center pb-16">
      <div className="container flex flex-col items-center justify-center bg-black z-10">
        <h2
          id="experience"
          className="text-5xl font-bold text-center sticky top-0 z-10 w-full backdrop-blur py-4"
        >
          Experience
        </h2>
        <div className="row">
          <ZackFLoatingCard />

          <div className="col-md-9 col-12 space-y-4">
            {WorkData.map((job) => {
              return (
                <div
                  key={job.company}
                  className="p-4 rounded-lg radial-gradient backdrop-blur text-[#94A3B8]"
                >
                  <p className="text-slate-200 text-3xl font-semibold mb-0">
                    {job.title}
                  </p>
                  <div className="flex">
                    <p className="mr-1">{job.company}</p>
                    <p>{job.dateRange}</p>
                  </div>
                  {/* <p className="text-sm">{job.location}</p> */}
                  {job.description.map((paragraph) => {
                    return (
                      <p key={paragraph} className="">
                        {paragraph}
                      </p>
                    );
                  })}
                  {job.bullets}
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
