"use client";

import Link from "next/link";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import ToolBubbles from "./ToolBubbles";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SectionHeader from "./SectionHeader";

interface Project {
  image: string;
  link: string;
  title: string;
  description: string;
  content: string;
  tools: string[];
}

const projects: Project[] = [
  {
    image: "/project_images/gas-lit-legacy.jpg",
    link: "https://www.gaslitlegacy.com/",
    title: "Gas Lit Legacy",
    description: "A licensed cannabis e-commerce marketplace",
    content: "Working directly with licensed cultivators, Gas Lit Legacy sells legal cannabis products directly to consumers.",
    tools: [
      "Next.js",
      "Contentful",
      "Tailwind",
      "PostgreSQL",
      "Node",
      "Supabase",
      "Typescript",
    ],
  },
  {
    image: "/project_images/web-wizard-dev.jpeg",
    link: "https://www.webwizarddev.com/",
    title: "Web Wizard Dev",
    description: "Professional web development company",
    content: "A freelance software engineering company for building websites, mobile apps, MPVs, and updating existing websites for a diverse client base.",
    tools: ["Next.js", "Tailwind CSS", "Typescript", "Bootstrap"],
  },
  {
    image: "/project_images/book-sheldon-price.png",
    link: "https://www.booksheldonprice.com/",
    title: "Artist EPK React Template",
    description: "A reusable template for creating electronic press kits",
    content: "A reusable electronic press kit (EPK) template for musicians and artists to showcase their songs, artwork, photos, and videos.",
    tools: [
      "React",
      "Typescript",
      "Tailwind CSS",
      "Vite",
      "Vercel",
      "Responsive Design",
    ],
  },
  {
    image: "/project_images/soma-website.png",
    link: "https://www.soundslikesoma.com/",
    title: "Sounds Like Soma",
    description: "Philadelphia recording studio",
    content: "A responsive website for a local recording studio. I utilized Ruby and Jekyll for site generation, Bootstrap for responsive design, Netlify for deployment and SEO best practices to boost search rankings and drive substantial increases in sales.",
    tools: ["Ruby", "Jekyll", "Bootstrap", "Netlify", "SEO"],
  },
  {
    image: "/project_images/nihongo-ai.png",
    link: "https://nihongo-chatbot.vercel.app/",
    title: "Nihongo",
    description: "AI powered Japanese practice chatbot",
    content: "A Japanese language practice chatbot that helps enhance users' speaking and writing skills in Japanese. The chatbot leverages OpenAI APIs for natural language processing.",
    tools: ["OpenAI API", "Next.js", "Tailwind CSS", "Typescript"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="radial-gradient flex flex-col justify-center items-center pb-16"
    >
      <div className="container max-w-screen-xl flex flex-col items-center justify-center">
        <SectionHeader title="Side Projects" />

        <div className="place-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-hidden">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

const ProjectCard = ({
  image,
  link,
  title,
  description,
  content,
  tools,
}: Project) => {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  return (
    <Card
      className={`sm:max-w-[352px] h-full border-0 text-[#94A3B8] bg-[#10151E] hover:bg-black/40 group rounded-2xl ${inView ? "show" : "hide"
        }`}
      ref={ref}
    >
      <div className="overflow-hidden rounded-t-2xl">
        <Link href={link} target="_blank" rel="noopener noreferrer">
          <Image
            src={image}
            height={175}
            width={350}
            alt={title}
            className="card-img-top object-cover object-top w-full h-[200px] group-hover:scale-105 ease-out duration-300"
          />
        </Link>
      </div>
      <div className="h-full">
        <CardHeader>
          <CardTitle className="text-slate-200 text-xl">{title}</CardTitle>
          <CardDescription className=" text-slate-500">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>{content}</p>
        </CardContent>
        <CardFooter className="mt-auto">
          <ToolBubbles tools={tools} />
        </CardFooter>
      </div>
    </Card>
  );
};
