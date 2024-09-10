import React from "react";
import WorkData from "./ExperienceData";
import ToolBubbles from "./ToolBubbles";
import ZackFLoatingCard from "./ZackFloatingCard";

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-black text-slate-200 w-full flex justify-center pb-16"
    >
      <div className="container flex flex-col items-center justify-center bg-black z-10">
        <div className="w-full flex items-center justify-center z-10 sticky top-0 backdrop-blur h-[90px]">
          <h2 className="text-5xl font-bold  text-slate-200 ">Experience</h2>
        </div>

        <div className="row">
          <ZackFLoatingCard />
          {/* <div className="col-lg-9 col-12 space-y-8">
            <div className="p-4 rounded-lg radial-gradient backdrop-blur text-[#94A3B8]">
              <p>answer to - "So tell me about yourself" question</p>
            </div>
          </div> */}
          <div className="col-lg-9 col-12 space-y-8">
            {WorkData.map((job) => {
              return (
                <div
                  key={job.company}
                  className="p-8 rounded-lg radial-gradient backdrop-blur text-[#94A3B8]"
                >
                  <p className="text-lg text-white mb-0">{job.company}</p>

                  <div className="flex italic text-sm">
                    <p className="">{job.title}</p>
                    <p>{job.dateRange}</p>
                  </div>
                  {job.description.map((paragraph) => {
                    return (
                      <p key={paragraph} className="text-sm">
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
