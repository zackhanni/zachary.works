import React from "react";
import WorkData from "./WorkData";

export default function Work() {
  return (
    <section>
      <div className="bg-black text-white py-24 flex flex-col items-center justify-center">
        <h2
          id="work"
          className="text-5xl lg:text-7xl font-bold text-center sticky top-0 z-10 w-full backdrop-blur py-4"
        >
          Work
        </h2>
        <div className="min-w-[50%] max-w-[90%] lg:max-w-[50%] py-20">
        {WorkData.map((job) => {
          return (
            <div
              key={job.company}
              className="bg-slate-800/20 p-8 
        mt-6 rounded-lg backdrop-blur"
            >
              <p className="text-2xl font-semibold">{job.title}</p>
              <div className="flex text-white/80">
                <p className="text-blue-600 mr-1">{job.company}</p>
                <p>{job.dateRange}</p>
              </div>
              <p className="text-white/80">{job.location}</p>
              <p className="py-6">{job.description}</p>
            </div>
          );
        })}
        </div>
      </div>
    </section>
  );
}
