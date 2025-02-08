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
      <div className="container flex flex-col items-center justify-center z-10 max-w-screen-xl">
        <SectionHeader title="Experience" />

        <div className="flex justify-center lg:space-x-8">
          <ZackFLoatingCard />
          <div className="space-y-8 w-fit">
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
                    : Lead full-stack development on over five concurrent mobile
                    projects, pixel-perfect UIs and interactive experiences.
                  </li>
                  <li>
                    <span className="font-medium text-slate-200">
                      Mobile App Development
                    </span>
                    : Developed and launched two React Native apps with Expo,
                    reaching thousands of active users, ensuring seamless
                    performance from concept, to continuous improvement.
                  </li>
                  <li>
                    <span className="font-medium text-slate-200">
                      Back-end APIs
                    </span>
                    : Designed REST API systems that integrate with 100+ IoT
                    devices, supporting national energy demand response programs
                  </li>
                  <li>
                    <span className="font-medium text-slate-200">
                      Server Maintenance
                    </span>
                    : Maintained 10+ servers and 16+ websites across AWS and
                    GoDaddy, optimizing for performance, security, and
                    development workflows.
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
                    : Designed, developed, and launched 20+ responsive websites
                    and interactive promotional materials for recording studios,
                    music labels, and independent artists, enhancing their
                    digital presence.
                  </li>
                  <li>
                    <span className="font-medium text-slate-200">
                      SEO Implementation
                    </span>
                    : Spearheaded implementation of SEO best practices, driving
                    significant search ranking improvements and consecutive to
                    five consecutive years of sales growth.
                  </li>
                  <li>
                    <span className="font-medium text-slate-200">
                      IT Support and Maintenance
                    </span>
                    : Provided end-to-end IT support and infrastructure
                    maintenance for six computers, one server, and a 50TB+
                    digital asset repository across 4 recording studios,
                    ensuring seamless operations.
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
      className={`border-0 text-slate-400 radial-gradient hover:bg-black/40 group rounded-2xl`}
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
