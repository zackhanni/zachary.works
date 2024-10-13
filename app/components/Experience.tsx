import React, { ReactNode } from "react";
import WorkData from "./ExperienceData";
import ToolBubbles from "./ToolBubbles";
import ZackFLoatingCard from "./ZackFloatingCard";
import { useInView } from "react-intersection-observer";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-black text-slate-200 w-full flex justify-center pb-16"
    >
      <div className="container flex flex-col items-center justify-center bg-black z-10">
        <div className="w-full flex items-center justify-center z-10 sticky top-0 backdrop-blur h-[110px]">
          <h2 className="text-5xl font-bold  text-slate-200 ">Experience</h2>
        </div>

        <div className="row">
          <ZackFLoatingCard />
          {/* <div className="col-lg-9 col-12 space-y-8">
            <div className="p-4 rounded-lg radial-gradient backdrop-blur text-[#94A3B8]">
              <p>answer to - "So tell me about yourself" question</p>
            </div>
          </div> */}
          {/* <div className="col-lg-9 col-12 space-y-8">
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
          </div> */}

          {/* another one */}
          <div className="col-lg-9 col-12 space-y-8">
            {WorkData.map((job) => {
              return (
                <WorkCard
                  title={job.title}
                  company={job.company}
                  bullets={job.bullets}
                  dateRange={job.dateRange}
                  description={job.description}
                  location={job.location}
                  tools={job.tools}
                  key={job.title}
                  content=""
                />
              );
            })}
          </div>

          {/* <div className="col-lg-9 col-12 space-y-8">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Is it styled?</AccordionTrigger>
                <AccordionContent>
                  Yes. It comes with default styles that matches the other
                  components&apos; aesthetic.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is it animated?</AccordionTrigger>
                <AccordionContent>
                  Yes. It&apos;s animated by default, but you can disable it if
                  you prefer.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div> */}

          {/* breakup */}
        </div>
      </div>
    </section>
  );
}

const WorkCard = ({
  title,
  company,
  dateRange,
  location,
  bullets,
  description,
  content,
  tools,
}: {
  title: string;
  company: string;
  dateRange: string;
  location: string;
  bullets: ReactNode;
  description: string[];
  content: string;
  tools: string[];
}) => {
  // const { ref, inView } = useInView({
  //   threshold: 0.15,
  //   triggerOnce: true,
  // });

  return (
    <Card
      className={`border-0 text-slate-400 radial-gradient hover:bg-black/40 group `}
    >
      <div className="h-full">
        <CardHeader>
          <CardTitle className="mb-1 text-slate-200">{title}</CardTitle>
          <CardDescription className="mt-0 text-slate-500">
            {company}
            {dateRange}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {description}
          <hr className="my-6" />
          {bullets}
        </CardContent>
        <CardFooter className="mt-auto">
          <ToolBubbles tools={tools} />
        </CardFooter>
      </div>
    </Card>
  );
};
