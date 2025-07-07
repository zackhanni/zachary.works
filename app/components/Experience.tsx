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
      className="w-full flex justify-center pb-16 h-full bg-[#213041] dot-background-dark"
    >
      <div className="container flex flex-col items-center justify-center max-w-screen-xl">
        <SectionHeader title="Experience" />

        <div className="flex justify-center lg:space-x-8">
          <ZackFLoatingCard />
          <div className="space-y-8 w-fit">
            <WorkCard
              title="React Developer w/ Node JS"
              employer="Fedstack, Leidos"
              dateRange="May 2025 - July 2025"
              bullets={
                <>
                  <p className="pb-6">
                    Developed a mission-critical Single Page Application (SPA) for the Federal Aviation Administration (FAA) to enable real-time flight path monitoring, editing, and airspace management.
                  </p>
                  <ul className="space-y-2 list-disc pl-4">
                    <li>
                      <span className="font-medium text-slate-200">
                        Built advanced geospatial mapping features
                      </span>
                      {` `} using React Leaflet, GeoJSON, and Polylines to display dynamic aircraft positions and trajectories.
                    </li>
                    <li>
                      <span className="font-medium text-slate-200">
                        Engineered a mission-critical Reroute Tool
                      </span>
                      {` `} that supports interactive route drawing, conflict detection, and path validation for safe airspace operations.
                    </li>
                    <li>
                      <span className="font-medium text-slate-200">
                        Led state management migration
                      </span>
                      {` `} from React Context to Zustand, improving app performance and stability.
                    </li>
                    <li>
                      <span className="font-medium text-slate-200">
                        Simulated aircraft movement
                      </span>
                      {` `} using interval-based coordinate updates for real-time animation and optimized rendering.
                    </li>
                    <li>
                      <span className="font-medium text-slate-200">
                        Resolved complex rendering bugs
                      </span>
                      {` `} including event propagation issues, race conditions, and improper state updates.
                    </li>
                  </ul>
                </>
              }
              description=""
              tools={[
                "React",
                "TypeScript",
                "JavaScript",
                "Tailwind",
                "Node",
                "React Leaflet",
                "GeoJSON",
                "React Context",
                "Zustand",
                "Custom Hooks",
                "WebSockets",
              ]}
            />

            <WorkCard
              title="Full-Stack Developer | React Native Developer"
              employer="SM Communications"
              dateRange="August 2023 - Current"
              bullets={
                <>
                  <p className="pb-6">
                    Led full-stack development for multiple web, mobile, and IoT projects using React Native, Next.js, Node.js, and AWS.
                  </p>
                  <ul className="space-y-2 list-disc pl-4">
                    <li>
                      <span className="font-medium text-slate-200">
                        Developed a React Native IoT Smart Home App
                      </span>
                      {` `} integrating SmartThings and Home Assistant APIs, enabling control of 100+ smart devices.
                    </li>
                    <li>
                      <span className="font-medium text-slate-200">
                        Built a Node.js server processing real-time data streams
                      </span>
                      {` `} via Apache Kafka, exposing endpoints through a REST API for downstream consumers.
                    </li>
                    <li>
                      <span className="font-medium text-slate-200">
                        Created a lightweight CRM platform
                      </span>
                      {` `} with Next.js and SQLite, supporting lead management, annotations, and OAuth 2.0 integration using Microsoft Identity Platform.
                    </li>
                    <li>
                      <span className="font-medium text-slate-200">
                        Built a location-based mobile quiz game
                      </span>
                      {` `} with 500+ users, using analytics for engagement tracking and automated prize distribution.
                    </li>
                    <li>
                      <span className="font-medium text-slate-200">
                        Maintained and deployed 16+ production websites
                      </span>
                      {` `} via AWS and GoDaddy, automating updates and improving server efficiency.
                    </li>
                  </ul>
                </>
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
              title="Front-End React Developer"
              employer="Sounds Like Soma"
              dateRange="January 2018 - August 2023"
              bullets={
                <>
                  {/* <p className="pb-6">
                    Designed and developed digital assets, websites, and
                    promotional tools for recording studios, music labels, and
                    artists. Built scalable web solutions using React, Ruby on
                    Rails, and Jekyll, optimizing performance and accessibility.
                    Managed large-scale digital archives across multiple
                    recording studios, ensuring data integrity and efficient
                    retrieval.
                  </p> */}
                  <ul className="space-y-2 list-disc pl-4">
                    <li>
                      <span className="font-medium text-slate-200">
                        Designed and delivered custom web tools
                      </span>
                      {` `} for music labels and studios using React, Ruby on Rails, and Jekyll.
                    </li>
                    <li>
                      <span className="font-medium text-slate-200">
                        Developed reusable press kit templates
                      </span>
                      {` `} in React, used by 20+ artists and labels, deployed via Vercel for fast, global delivery.
                    </li>
                    <li>
                      <span className="font-medium text-slate-200">
                        Managed 50+ TB of multimedia data
                      </span>
                      {` `} across multiple studios, building secure archive and retrieval systems.
                    </li>
                    <li>
                      <span className="font-medium text-slate-200">
                        Rebuilt the studio's main site
                      </span>
                      {` `} using Rails, Jekyll, and Bootstrap, achieving 5+ years of continuous SEO-driven traffic growth.
                    </li>
                  </ul>
                </>
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
                "Ruby",
                "Jekyll",
                "Ruby on Rails",
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
      className={`border-0 text-slate-400 bg-[#10151E] XXradial-gradient group rounded-2xl`}
    >
      <div className="h-full">
        <CardHeader className="space-y-0 flex sm:flex-row justify-between">
          <div className="flex flex-col">
            <CardTitle className="text-slate-300 text-lg">{title}</CardTitle>
            <CardTitle className="text-slate-300 text-lg">{employer}</CardTitle>
          </div>
          <CardDescription className="text-md font-semibold text-[#238493]">
            {dateRange}
            {/* <div className="text-slate-300">{description}</div> */}
          </CardDescription>
        </CardHeader>
        <hr className="mb-6 opacity-40" />
        <CardContent>
          {bullets}
        </CardContent>
        <CardFooter className="mt-auto">
          <ToolBubbles tools={tools} />
        </CardFooter>
      </div>
    </Card>
  );
};
