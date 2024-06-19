import React from "react";
import WorkData from "./ExperienceData";
import ToolBubbles from "./ToolBubbles";
import ZackFLoatingCard from "./ZackFloatingCard";

export default function Experience() {
  return (
    <section className="bg-black text-white w-full flex justify-center pb-16">
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
                  className="p-4 rounded-lg radial-gradient backdrop-blur"
                >
                  <p className="text-3xl font-semibold">{job.title}</p>
                  <div className="flex text-gray-300 text-sm">
                    <p className="text-gray-400 mr-1">{job.company}</p>
                    <p>{job.dateRange}</p>
                  </div>
                  <p className="text-gray-300 text-sm">{job.location}</p>
                  {job.description.map((paragraph) => {
                    return (
                      <p key={paragraph} className="">
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
