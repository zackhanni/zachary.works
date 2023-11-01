import React from "react";
import WorkData from "./WorkData";

export default function Work() {
  return (
    <section>
      <div className="bg-black text-white py-24 flex flex-col items-center justify-center">
        <p className="text-5xl lg:text-7xl font-bold text-center">Work</p>
        {WorkData.map((job) => {
          return (
            <div key={job.company} className="bg-slate-800/20 max-w-[1200] p-8 
        mt-6 rounded-lg backdrop-blur">
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
    </section>
  );
}
