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

interface WorkExperience {
  title: string;
  employer: string;
  dateRange: string;
  bullets: ReactNode;
  description?: string;
  tools: string[];
}

const workExperiences: WorkExperience[] = [
  {
    title: "Senior Software Engineer",
    employer: "Leadr",
    dateRange: "August 2025 - Current",
    bullets: (
      <>
        <p className="pb-6">
          Senior engineer contributing to Leadr’s core employee development platform—software used by managers and organizations to improve communication, track performance, and identify strengths and gaps across teams.
        </p>
        <ul className="space-y-2 list-disc pl-4">
          <li>
            <span className="font-medium text-slate-200">Collaborate across product, design, and engineering</span>
            {` `}to deliver high-impact features that improve organizational engagement, performance tracking, and leadership development workflows.
          </li>
          <li>
            <span className="font-medium text-slate-200">Built and maintained complex front-end interfaces</span>
            {` `}using React, TypeScript, and Emotion CSS, ensuring accessibility, performance, and design fidelity from Figma specifications.
          </li>
          <li>
            <span className="font-medium text-slate-200">Designed reliable client–server integrations</span>
            {` `}leveraging Node.js, REST APIs, and TanStack Query to optimize caching, reduce network load, and improve perceived performance across the application.
          </li>
          <li>
            <span className="font-medium text-slate-200">Partnered with backend teams</span>
            {` `}to refine API contracts, resolve data shape inconsistencies, and improve resilience across distributed services.
          </li>
          <li>
            <span className="font-medium text-slate-200">Improved developer workflows</span>
            {` `}by contributing reusable components, shared utilities, and documentation that raised team velocity and consistency.
          </li>
        </ul>
      </>
    ),
    description:
      "At Leadr, I work on the flagship employee engagement and leadership development platform, delivering features that enhance company-wide communication, performance tracking, and organizational growth.",
    tools: [
      "React",
      "TypeScript",
      "Emotion CSS",
      "JavaScript",
      "Node.js",
      "TanStack Query",
      "REST APIs",
      "Figma",
    ],
  },

  {
    title: "React Developer w/ Node.js",
    employer: "Fedstack, Leidos",
    dateRange: "May 2025 - July 2025",
    bullets: (
      <>
        <p className="pb-6">
          Engineered a mission-critical Single Page Application (SPA) for the Federal Aviation Administration (FAA), enabling real-time flight path monitoring, route editing, and safer airspace management.
        </p>
        <ul className="space-y-2 list-disc pl-4">
          <li>
            <span className="font-medium text-slate-200">Built advanced geospatial mapping capabilities</span>
            {` `}using React Leaflet, GeoJSON, and Polylines to render dynamic aircraft positions and projected trajectories.
          </li>
          <li>
            <span className="font-medium text-slate-200">Engineered a real-time Reroute Tool</span>
            {` `}supporting interactive route creation, conflict detection, and airspace validation.
          </li>
          <li>
            <span className="font-medium text-slate-200">Led a state management migration</span>
            {` `}from React Context to Zustand, significantly improving performance and reliability.
          </li>
          <li>
            <span className="font-medium text-slate-200">Simulated real-time aircraft movement</span>
            {` `}using interval-based coordinate updates with optimized rendering.
          </li>
          <li>
            <span className="font-medium text-slate-200">Resolved complex rendering defects</span>
            {` `}including event propagation issues, race conditions, and stale state synchronization.
          </li>
        </ul>
      </>
    ),
    description: "",
    tools: [
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
    ],
  },

  {
    title: "Full-Stack Developer | React Native Developer",
    employer: "Smart Mark",
    dateRange: "August 2023 - April 2025",
    bullets: (
      <>
        <p className="pb-6">
          Led full-stack development across mobile, web, and IoT platforms using React Native, Next.js, Node.js, Supabase, and AWS.
        </p>
        <ul className="space-y-2 list-disc pl-4">
          <li>
            <span className="font-medium text-slate-200">Developed a React Native IoT Smart Home App</span>
            {` `}integrating SmartThings and Home Assistant APIs to manage and automate 100+ smart devices.
          </li>
          <li>
            <span className="font-medium text-slate-200">Implemented a real-time data processing server</span>
            {` `}using Node.js and Apache Kafka, powering high-throughput event consumption and REST API exposure.
          </li>
          <li>
            <span className="font-medium text-slate-200">Built a lightweight CRM solution</span>
            {` `}with Next.js and SQLite, including OAuth 2.0 authentication via Microsoft Identity Platform.
          </li>
          <li>
            <span className="font-medium text-slate-200">Created a location-based mobile quiz experience</span>
            {` `}for 500+ users, integrating analytics for engagement tracking and automated prize workflows.
          </li>
          <li>
            <span className="font-medium text-slate-200">Maintained and deployed 16+ production websites</span>
            {` `}using AWS and GoDaddy, improving stability through automation and performance optimizations.
          </li>
        </ul>
      </>
    ),
    description:
      "At SM Communications, I delivered end-to-end solutions powering nationally recognized brands, with responsibilities spanning mobile apps, web apps, cloud services, and IoT integrations.",
    tools: [
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
    ],
  },

  {
    title: "Front-End React Developer",
    employer: "Sounds Like Soma",
    dateRange: "January 2018 - August 2023",
    bullets: (
      <>
        <ul className="space-y-2 list-disc pl-4">
          <li>
            <span className="font-medium text-slate-200">Designed and developed custom web applications</span>
            {` `}for music labels and studios using React, Ruby on Rails, and Jekyll.
          </li>
          <li>
            <span className="font-medium text-slate-200">Created reusable press kit templates</span>
            {` `}in React, adopted by 20+ artists and labels, with global deployments through Vercel.
          </li>
          <li>
            <span className="font-medium text-slate-200">Managed over 50 TB of multimedia content</span>
            {` `}across multiple studios, implementing secure archiving and retrieval systems.
          </li>
          <li>
            <span className="font-medium text-slate-200">Rebuilt the studio’s primary website</span>
            {` `}using Rails, Jekyll, and Bootstrap, driving 5+ years of consistent SEO growth.
          </li>
        </ul>
      </>
    ),
    description:
      "At Sounds Like Soma, I elevated the digital operations and online presence of recording studios and artists through custom tools, robust data workflows, and high-performance websites.",
    tools: [
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
    ],
  },
];

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
            {workExperiences.map((experience, index) => (
              <WorkCard key={index} {...experience} />
            ))}
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
