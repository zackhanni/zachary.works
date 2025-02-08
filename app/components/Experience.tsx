import React, { ReactNode } from "react";
import ToolBubbles from "./ToolBubbles";
import ZackFLoatingCard from "./ZackFloatingCard";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SectionHeader from "./SectionHeader";

export default function Experience() {
  return (
    <section
      id="experience"
      className="w-full flex justify-center pb-16 h-full bg-[#060604]"
    >
      <div className="container flex flex-col items-center justify-center z-10">
        <SectionHeader title="Experience" />

        <div className="flex justify-center lg:space-x-8">
          <ZackFLoatingCard />
          <div className="lg:max-w-[70%] space-y-8">
            <WorkCard
              title="Full-Stack Developer | React Native Developer"
              employer="SM Communications"
              dateRange="August 2023 - Current"
              bullets={
                <ul className="space-y-2 list-disc pl-4">
                  <li>
                    <span className="font-medium text-slate-200">
                      Web Development
                    </span>
                    : Developed pixel-perfect websites and interactive web
                    experiences, meticulously catering to the distinctive needs
                    of nationally recognized brands.
                  </li>
                  <li>
                    <span className="font-medium text-slate-200">
                      Mobile App Development
                    </span>
                    : Created interactive Android and iOS apps and games using
                    React Native, collaborating with large corporations and
                    nonprofits to deliver engaging mobile experiences.
                  </li>
                  <li>
                    <span className="font-medium text-slate-200">
                      Back-End and Server Maintenance
                    </span>
                    : Maintained 10 servers across AWS and GoDaddy. Proficient
                    in managing Node.js and WordPress websites, including setup,
                    deployment, and optimization. Familiar with systemd, Caddy,
                    Docker, and other tools to handle production and development
                    environments.
                  </li>
                </ul>
              }
              description="At SM Communications, I contributed to the digital success of nationally recognized brands by delivering high-quality web solutions. My key responsibilities include:"
              tools={[
                "React (Next.js)",
                "TypeScript",
                "Tailwind",
                "Node",
                "REST APIs",
                "PostgreSQL",
                "AWS",
                "React Native",
                "Expo",
                "WordPress",
              ]}
            />

            <WorkCard
              title="Front-End Developer"
              employer="Sounds Like Soma"
              dateRange="January 2018 - August 2023"
              bullets={
                <ul className="space-y-2 list-disc pl-4">
                  <li>
                    <span className="font-medium text-slate-200">
                      Web Development
                    </span>
                    : Conceptualized, designed, developed, and deployed
                    cutting-edge responsive websites and interactive promotional
                    materials tailored specifically for the music industry.
                  </li>
                  <li>
                    <span className="font-medium text-slate-200">
                      SEO Implementation
                    </span>
                    : Spearheaded successful implementation of SEO best
                    practices, significantly enhancing search rankings and
                    driving consecutive yearly sales growth over five years.
                  </li>
                  <li>
                    <span className="font-medium text-slate-200">
                      Performance Optimization
                    </span>
                    : Optimized upload and download speeds to the local server,
                    resulting in notable performance improvements across four
                    recording studio spaces.
                  </li>
                  <li>
                    <span className="font-medium text-slate-200">
                      IT Support and Maintenance
                    </span>
                    : Delivered comprehensive IT technical support and
                    maintenance services, managing all computers, servers, and a
                    vast repository of over 50TB of digital assets.
                  </li>
                </ul>
              }
              description="At Sounds Like Soma, I played a pivotal role in enhancing the digital presence and operational efficiency of recording studios, music labels, and independent artists. My key contributions included:"
              tools={[
                "React (Next.js)",
                "Typescript",
                "Tailwind",
                "REST APIs",
                "Bootstrap",
                "Javascript",
                "HTML",
                "CSS",
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const WorkCard = ({
  title,
  employer,
  dateRange,
  bullets,
  description,
  tools,
}: {
  title: string;
  employer: string;
  dateRange: string;
  bullets: ReactNode;
  description: string;
  tools: string[];
}) => {
  return (
    <Card
      className={`border-0 text-slate-400 radial-gradient hover:bg-black/40 group `}
    >
      <div className="h-full">
        <CardHeader className="space-y-1">
          <CardTitle className="text-slate-300 text-lg">{title}</CardTitle>
          <CardTitle className="text-slate-300 text-lg">{employer}</CardTitle>
          <CardDescription>
            <div className="text-md font-semibold text-[#238493]">
              {dateRange}
            </div>
            {/* <div className="text-slate-300">{description}</div> */}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <hr className="mb-6 opacity-40" />
          {bullets}
        </CardContent>
        <CardFooter className="mt-auto">
          {/* <ToolBubbles tools={tools} /> */}
        </CardFooter>
      </div>
    </Card>
  );
};
