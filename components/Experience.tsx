"use client";

import React, { ReactNode, useState } from "react";
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
  description: string;
  bullets: ReactNode;
  tools: string[];
}

const workExperiences: WorkExperience[] = [
  {
    title: "Senior Software Engineer",
    employer: "Leadr",
    dateRange: "August 2025 - Present",
    description:
      "Senior member of a cross-functional feature team building enterprise SaaS products using React, TypeScript, and Nest.js—delivering full-stack features, scalable UI architecture, AI-assisted insights, and real-time analytics dashboards supporting executive decision making across large organizations.",
    bullets: (
      <ul className="space-y-2 list-disc pl-4">
        <li>
          <span className="font-medium text-slate-200">Architected modular enterprise dashboards</span>
          {` `}using React 18, TypeScript, and TanStack Query, enabling real-time visibility into engagement, performance, and organizational health across 10+ data domains.
        </li>
        <li>
          <span className="font-medium text-slate-200">Designed centralized query key and caching architecture</span>
          {` `}improving API data consistency and reducing redundant network calls across parallel queries.
        </li>
        <li>
          <span className="font-medium text-slate-200">Built scalable component systems</span>
          {` `}and shared design system foundations used across 20+ product feature modules.
        </li>
        <li>
          <span className="font-medium text-slate-200">Designed centralized state architectures</span>
          {` `}using Context + useReducer patterns to manage multi-dimensional filtering, workflow state, and assessment lifecycle orchestration.
        </li>
        <li>
          <span className="font-medium text-slate-200">Built 25+ reusable custom React hooks</span>
          {` `}for data fetching, mutation handling, and cache invalidation, establishing reusable data patterns across the codebase.
        </li>
      </ul>
    ),
    tools: [
      "React 18",
      "TypeScript",
      "NestJS",
      "TanStack Query",
      "Emotion CSS",
      "Material UI",
      "REST APIs",
      "CI/CD Pipelines",
      "GitHub Actions",
    ],
  },

  {
    title: "React Developer (w/ Node.js)",
    employer: "Fedstack / Leidos",
    dateRange: "May 2025 - July 2025",
    description:
      "Developed a mission-critical Single Page Application (SPA) for the Federal Aviation Administration (FAA) to enable real-time flight path monitoring, editing, and airspace management.",
    bullets: (
      <ul className="space-y-2 list-disc pl-4">
        <li>
          <span className="font-medium text-slate-200">Built advanced geospatial features</span>
          {` `}using React Leaflet, GeoJSON, and Polylines to visualize dynamic aircraft positions and projected trajectories.
        </li>
        <li>
          <span className="font-medium text-slate-200">Engineered a Reroute Tool</span>
          {` `}supporting interactive route drawing, conflict detection, and path validation for safe airspace operations.
        </li>
        <li>
          <span className="font-medium text-slate-200">Led state management migration</span>
          {` `}from React Context to Zustand, improving performance and stability across the application.
        </li>
        <li>
          <span className="font-medium text-slate-200">Simulated real-time aircraft movement</span>
          {` `}using interval-based coordinate updates for real-time animation and optimized rendering.
        </li>
        <li>
          <span className="font-medium text-slate-200">Resolved complex rendering bugs</span>
          {` `}including event propagation issues, race conditions, and improper state updates.
        </li>
        <li>
          <span className="font-medium text-slate-200">Collaborated with UX/UI designers in Figma</span>
          {` `}to translate interactive prototypes into pixel-perfect React components, ensuring visual accuracy and accessibility compliance.
        </li>
      </ul>
    ),
    tools: [
      "React",
      "TypeScript",
      "Zustand",
      "React Leaflet",
      "GeoJSON",
      "Node.js",
      "WebSockets",
      "GitLab",
    ],
  },

  {
    title: "Full-Stack Developer",
    employer: "SmartMark Communications",
    dateRange: "August 2023 - April 2025",
    description:
      "Led full-stack development of web, mobile, and IoT platforms using React Native (with Expo), Next.js, Node.js, and AWS, delivering performant cross-platform applications.",
    bullets: (
      <ul className="space-y-2 list-disc pl-4">
        <li>
          <span className="font-medium text-slate-200">Developed a React Native IoT Smart Home App</span>
          {` `}integrating SmartThings and Home Assistant APIs, enabling control of 100+ smart devices.
        </li>
        <li>
          <span className="font-medium text-slate-200">Built a real-time Node.js server</span>
          {` `}using Express and Apache Kafka, exposing RESTful API endpoints for downstream consumers.
        </li>
        <li>
          <span className="font-medium text-slate-200">Created a lightweight CRM platform</span>
          {` `}with Next.js and SQLite, supporting lead management, annotations, and OAuth 2.0 via Microsoft Identity Platform.
        </li>
        <li>
          <span className="font-medium text-slate-200">Built a location-based mobile quiz game</span>
          {` `}with 500+ users, using analytics for engagement tracking and automated prize distribution.
        </li>
        <li>
          <span className="font-medium text-slate-200">Maintained and deployed 16+ production websites</span>
          {` `}via AWS and GoDaddy, automating updates and improving efficiency across 10 servers.
        </li>
      </ul>
    ),
    tools: [
      "React Native",
      "Expo",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Apache Kafka",
      "SQLite",
      "AWS",
      "OAuth 2.0",
    ],
  },

  {
    title: "Front-End React Developer",
    employer: "Sounds Like Soma",
    dateRange: "January 2019 - August 2023",
    description:
      "Developed and maintained web applications for recording studios and independent artists, focusing on reusable tooling, SEO growth, and scalable multimedia data systems.",
    bullets: (
      <ul className="space-y-2 list-disc pl-4">
        <li>
          <span className="font-medium text-slate-200">Developed reusable press kit templates in React</span>
          {` `}adopted by 20+ artists and labels, deployed globally through Vercel.
        </li>
        <li>
          <span className="font-medium text-slate-200">Rebuilt the studio's main site</span>
          {` `}using Rails, Jekyll, and Bootstrap, achieving 5+ years of continuous SEO-driven traffic growth.
        </li>
        <li>
          <span className="font-medium text-slate-200">Managed 50+ TB of multimedia data</span>
          {` `}across 4 studios, building secure archive and retrieval systems.
        </li>
      </ul>
    ),
    tools: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Ruby on Rails",
      "Jekyll",
      "Bootstrap",
      "Vercel",
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
            {workExperiences.map((job) => (
              <WorkCard key={job.title} {...job} />
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
  description,
  bullets,
  tools,
}: WorkExperience) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className="border-0 text-slate-400 bg-[#10151E] rounded-2xl">
      <div className="h-full">
        <CardHeader className="space-y-0 flex sm:flex-row justify-between">
          <div className="flex flex-col">
            <CardTitle className="text-slate-300 text-lg">{title}</CardTitle>
            <CardTitle className="text-slate-300 text-lg">{employer}</CardTitle>
          </div>
          <CardDescription className="text-md font-semibold text-[#238493]">
            {dateRange}
          </CardDescription>
        </CardHeader>
        <hr className="mb-4 opacity-40" />
        <CardContent className="pb-6">
          <p className="mb-3">{description}</p>
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            className="text-sm text-[#238493] hover:text-[#2CA5B8] transition-colors cursor-pointer"
          >
            {isOpen ? "Show less ↑" : "Read more ↓"}
          </button>
          <div
            className="overflow-hidden transition-all duration-500 ease-in-out"
            style={{ maxHeight: isOpen ? "1000px" : "0px", opacity: isOpen ? 1 : 0 }}
          >
            <div className="pt-4">{bullets}</div>
          </div>
        </CardContent>
        <CardFooter className="mt-auto">
          <ToolBubbles tools={tools} />
        </CardFooter>
      </div>
    </Card>
  );
};
