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

export default function Projects() {
  return (
    <section
      id="projects"
      className="radial-gradient flex flex-col justify-center items-center pb-16"
    >
      <div className="container">
        <div className="w-full flex items-center justify-center z-10 sticky top-0 backdrop-blur h-[90px]">
          <h2 className="text-5xl font-bold  text-slate-200 ">Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-hidden">
          <ProjectCard
            image="/web-wizard-dev.jpeg"
            link="https://www.webwizarddev.com/"
            title="Web Wizard Dev"
            description="Professional web development company"
            content="I'm part of an expert team of freelancers who cater to various software engineering needs. We build websites, mobile apps, MPVs, and update existing websites for a diverse client base."
            footer="Footer text"
            tools={["Next.js", "Tailwind CSS", "Typescript", "Bootstrap"]}
          />

          <ProjectCard
            image="/omni-mart.png"
            link="https://omni-mart.vercel.app/"
            title="Omni-Mart"
            description="Your Intergalactic E-commerce Marketplace"
            content="An intergalactic market for everything you need on a planetary journey. Complete with a working checkout page, Stripe integration, confirmation emails, and a robust admin page to track and modify products."
            footer="Footer text"
            tools={[
              "Next.js",
              "Prisma",
              "Shadcn",
              "PostgreSQL",
              "Resend",
              "Node.js",
              "Stripe API",
              "React Email",
              "Supabase",
              "Bootstrap",
            ]}
          />

          <ProjectCard
            image="/book-sheldon-price.png"
            link="https://www.booksheldonprice.com/"
            title="Sheldon Price EPK"
            description="A reusable template for artist electronic press kits"
            content="This reusable electronic press kit (EPK) template for musicians and artists to showcase their songs, artwork, photos, and videos. The template is designed for easy customization and efficient deployment."
            footer=""
            tools={[
              "ReactJS",
              "Typescript",
              "Tailwind CSS",
              "Vite",
              "Vercel",
              "Responsive Design",
            ]}
          />

          <ProjectCard
            image="/nihongo-ai.png"
            link="https://nihongo-chatbot.vercel.app/"
            title="Nihongo"
            description="AI powered Japanese practice chatbot"
            content="I developed a Japanese language practice chatbot to enhance users' speaking and writing skills in Japanese. The chatbot leverages OpenAI APIs for natural language processing, built with a modern tech stack including Next.js for server-side rendering and Tailwind CSS for responsive design."
            footer=""
            tools={["OpenAI API", "Next.js", "Tailwind CSS", "Typescript"]}
          />

          <ProjectCard
            image="/kasatoboushi.png"
            link="https://kasatoboushi.vercel.app/"
            title="Kasa と boushi"
            description="Japanese-American fusion cafe"
            content="I developed a responsive website for a minimalist American-Japanese fusion cafe based in Japan, enhancing it's online presence and user engagement. Integrated a dynamic language switching feature between Japanese and English to cater to a broader audience."
            footer=""
            tools={[
              "Next.js",
              "Typescript",
              "Tailwind CSS",
              "Bootstrap",
              "Vercel",
              "Responsive Design",
            ]}
          />

          <ProjectCard
            image="/soma-website.png"
            link="https://www.soundslikesoma.com/"
            title="Sounds Like Soma"
            description="Philadelphia recording studio"
            content="I designed and developed a responsive website for a local Philadelphia recording studio, significantly enhancing online presence and sales. I utilized Ruby and Jekyll for site generation, Bootstrap for responsive design, Netlify for deployment and SEO best practices to boost search rankings and drive substantial increases in sales."
            footer=""
            tools={["Ruby", "Jekyll", "Bootstrap", "Netlify", "SEO"]}
          />

          {/* <ProjectCard
            image="/mood-board.png"
            link="https://mood-board-next.vercel.app/"
            title="Mood Board"
            description=""
            content="A fully functional mental health-focused application designed to educate users on their emotional well-being, and track changes in mood. Oauth integration for secure user log-ins, and MongoDB for backend database"
            footer=""
            tools={[
              "React",
              "Next.js",
              "MongoDB",
              "Tailwind CSS",
              "Typescript",
              "Vercel",
              "RESTful APIs",
              "Git",
            ]}
          /> */}
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
  footer,
  tools,
}: {
  image: string;
  link: string;
  title: string;
  description: string;
  content: string;
  footer: string;
  tools: string[];
}) => {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  return (
    <Card
      className={`border-0 text-[#94A3B8] bg-black/50 hover:bg-black/40 group ${
        inView ? "show" : "hide"
      }`}
      ref={ref}
    >
      <div className="overflow-hidden rounded-t-lg">
        <Link href={link} target="_blank">
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
          <CardTitle className="mb-1">{title}</CardTitle>
          <CardDescription className="mt-0">{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-0">{content}</p>
        </CardContent>
        <CardFooter className="mt-auto">
          {/* <p>{footer}</p> */}
          <ToolBubbles tools={tools} />
        </CardFooter>
      </div>
    </Card>
  );
};
