import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaHtml5, FaCss3, FaJs, FaTypo3, FaGit, FaMonero, FaGitAlt } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import toolboxImg from "@/public/toolbox.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "ToolBox",
    description:
      "ToolBox is an open-source Next.js full-stack application designed to serve as a comprehensive database of the most useful tools available on the internet.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind"],
    imageUrl: toolboxImg,
    website:"https://toolbox-app-delta.vercel.app",
    repoUrl:"https://github.com/sofiabaezzato/toolbox-app",
  },
  {
    title: "ToolBox",
    description:
      "ToolBox is an open-source Next.js full-stack application designed to serve as a comprehensive database of the most useful tools available on the internet.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind"],
    imageUrl: toolboxImg,
    website:"https://toolbox-app-delta.vercel.app",
    repoUrl:"https://github.com/sofiabaezzato/toolbox-app",
  },
] as const;

export const skillsData = [
  {
    name: "HTML",
    icon: React.createElement(FaHtml5)
  },
  {
    name: "CSS",
    icon: React.createElement(FaCss3)
  },
  {
    name: "JavaScript",
    icon: React.createElement(FaJs)
  },
  {
    name: "Typescript",
    icon: React.createElement(FaReact)
  },
  {
    name: "React",
    icon: React.createElement(FaReact)
  },
  {
    name: "Next.js",
    icon: React.createElement(FaReact)
  },
  {
    name: "Git",
    icon: React.createElement(FaGitAlt)
  },
  {
    name: "Tailwind",
    icon: React.createElement(FaReact)
  },
  {
    name: "Framer Motion",
    icon: React.createElement(FaReact)
  },
  {
    name: "MongoDB",
    icon: React.createElement(FaReact)
  }
] as const;