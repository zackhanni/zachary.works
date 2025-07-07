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
                    Developed a sophisticated Single Page Application (SPA) for the Federal Aviation Administration (FAA) in collaboration with Leidos, focused on real-time flight path monitoring, trajectory editing, and airspace management using modern JavaScript and mapping libraries.
                  </p>
                  <ul className="space-y-2 list-disc pl-4">
                    <li>
                      <span className="font-medium text-slate-200">
                        Built advanced geospatial mapping features
                      </span>
                      {` `} using React Leaflet, GeoJSON, and Polylines to display real-time aircraft positions, waypoints, and flight trajectories.
                    </li>
                    <li>
                      <span className="font-medium text-slate-200">
                        Engineered a mission-critical Reroute Tool
                      </span>
                      {` `} enabling air traffic controllers to dynamically reassign flight paths, including drawing alternative routes, conflict detection, and path validation for safety and feasibility.
                    </li>
                    <li>
                      <span className="font-medium text-slate-200">
                        Developed and maintained custom React Contexts and Hooks for global state management
                      </span>
                      {` `} ensuring scalable and maintainable architecture across a large codebase.
                    </li>
                    <li>
                      <span className="font-medium text-slate-200">
                        Led the migration of key application state logic from React Context to Zustand
                      </span>
                      {` `} improving performance and reducing rendering issues.
                    </li>
                    <li>
                      <span className="font-medium text-slate-200">
                        Designed logic to simulate multiple aircraft movement in real-time
                      </span>
                      {` `} using interval-based coordinate updates, optimizing rendering performance and responsiveness.
                    </li>
                    <li>
                      <span className="font-medium text-slate-200">
                        Debugged and resolved complex rendering issues
                      </span>
                      {` `} including click event propagation, race conditions, and improper state updates, contributing to a more robust user interface.
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
                    Lead full-stack development across multiple mobile, web, and
                    IoT projects, integrating React Native, Next.js, Node.js,
                    and cloud technologies to build scalable, high-performance
                    applications. Developed secure authentication systems,
                    real-time data processing solutions, and user-friendly
                    interfaces that drive engagement and operational efficiency.
                  </p>
                  <ul className="space-y-2 list-disc pl-4">
                    <li>
                      <span className="font-medium text-slate-200">
                        Developed & Launched IoT Smart Home App
                      </span>
                      : Developed an IoT React Native app integrating multiple
                      Smart Home platform APIs, allowing users to control 100+
                      smart home devices.
                    </li>
                    <li>
                      <span className="font-medium text-slate-200">
                        Real-Time Data Streaming via Kafka
                      </span>
                      : Engineered a Node.js server that processes a continuous
                      data stream from a Kafka system, exposing real-time data
                      via a REST API, handling thousands of requests per day.
                    </li>
                    <li>
                      <span className="font-medium text-slate-200">
                        Optimized CRM for Sales Teams
                      </span>
                      : Developed a custom CRM using Next.js and SQLite,
                      enabling 10+ users to manage leads, track calls, and
                      annotate contacts. Integrated Microsoft OAuth for secure
                      authentication, reducing unauthorized access risks.
                    </li>
                    <li>
                      <span className="font-medium text-slate-200">
                        Interactive React Native Game
                      </span>
                      : Created a location-based quiz mobile game using
                      analytics to track user progress and automate prize
                      distribution for over 500 users.
                    </li>
                    <li>
                      <span className="font-medium text-slate-200">
                        Infrastructure & Server Management
                      </span>
                      : Maintained 10+ AWS and GoDaddy servers, ensuring uptime
                      and security for 16+ websites, optimizing server
                      configurations and deployment workflows.
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
              title="Front-End Developer"
              employer="Sounds Like Soma"
              dateRange="January 2018 - August 2023"
              bullets={
                <>
                  <p className="pb-6">
                    Designed and developed digital assets, websites, and
                    promotional tools for recording studios, music labels, and
                    artists. Built scalable web solutions using React, Ruby on
                    Rails, and Jekyll, optimizing performance and accessibility.
                    Managed large-scale digital archives across multiple
                    recording studios, ensuring data integrity and efficient
                    retrieval.
                  </p>
                  <ul className="space-y-2 list-disc pl-4">
                    <li>
                      <span className="font-medium text-slate-200">
                        Built an Electronic Press Kit (EPK) React Template
                      </span>
                      : Developed a scalable and reusable React-based template
                      for press kits, enabling over 20+ artists and record
                      labels to create high-quality promotional materials in
                      minutes. Deployed via Vercel for fast, global performance.
                    </li>
                    <li>
                      <span className="font-medium text-slate-200">
                        Managed Digital Assets
                      </span>
                      : Maintained and organized over 50 terabytes of
                      high-quality audio and video data across four recording
                      studios, implementing backup and retrieval systems to
                      prevent data loss and optimize workflow efficiency
                    </li>
                    <li>
                      <span className="font-medium text-slate-200">
                        Improved Search Rankings & Business Growth
                      </span>
                      : Engineered the primary studio website using Ruby on
                      Rails, Jekyll, and Bootstrap, while implementing SEO
                      optimizations that boosted search rankings and contributed
                      to five consecutive years of business growth.
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
