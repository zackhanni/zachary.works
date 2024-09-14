"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SocialMedia from "./SocialMedia";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Required",
  }),
  email: z.string().email(),
  message: z
    .string()
    .min(10, {
      message: "Bio must be at least 10 characters.",
    })
    .max(160, {
      message: "Bio must not be longer than 30 characters.",
    }),
});

export default function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 radial-gradient p-4 rounded-lg space-y-8 sm:space-y-0">
      <div className="">
        <h2 id="contact" className="">
          Contact
        </h2>
        <p className="mb-0 pb-4">
          The best way to contact me is through email or LinkedIn (I&apos;m not
          much of a twitter guy). Give me a shout here:
        </p>

        <div className="flex space-x-4">
          <SocialMedia
            name="Linkedin"
            link="https://github.com/zackhanni"
            icon={<FaLinkedin />}
          />
          <SocialMedia
            name="Github"
            link="https://github.com/zackhanni"
            icon={<FaGithub />}
          />
          <SocialMedia
            name="Email"
            link="mailto:zack.hanni@gmail.com"
            icon={<IoMdMail />}
            className=""
          />
        </div>

        <p className="max-w-sm mb-0 py-4">
          This website was designed in{" "}
          <a
            href="https://www.figma.com/"
            target="_blank"
            className="hover:text-[#2CA5B8] text-[#AB5C95]"
          >
            Figma
          </a>
          , coded in{" "}
          <a
            href="https://code.visualstudio.com/"
            target="_blank"
            className="hover:text-[#2CA5B8] text-[#AB5C95]"
          >
            Visual Studio Code
          </a>
          , built with{" "}
          <a
            href="https://nextjs.org/"
            target="_blank"
            className="hover:text-[#2CA5B8] text-[#AB5C95]"
          >
            Next.js
          </a>
          , and deployed with{" "}
          <a
            href="https://vercel.com/"
            target="_blank"
            className="hover:text-[#2CA5B8] text-[#AB5C95]"
          >
            Vercel
          </a>{" "}
          by yours truly.
        </p>

        <p>
          <a
            href="https://docs.google.com/document/d/1SzLNz6jHUPfvxQVEV21YptKuoyBZ6UFzQjmPckXFGQY/edit?usp=drive_link"
            target="blank"
            className="hover:underline hover:text-[#2CA5B8] text-[#AB5C95]"
          >
            Zack&apos;s Resume
          </a>
        </p>
      </div>
      <div className="">
        <h2>Drop a line ☎️</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder=""
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full bg-[#AB5C95]">
              Send Message
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
}