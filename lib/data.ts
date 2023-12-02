import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import toolboxImg from "@/public/toolbox.png";
import tailwindIcon from '@/public/icons/tailwind.svg'
import nextIcon from '@/public/icons/next.svg'
import framerIcon from '@/public/icons/framer.svg'

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
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "BSc Aerospace Engineering",
    location: "Università degli Studi di Padova, Italy",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Videomaker & Motion Designer Freelance",
    location: "Padua, Italy",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - present",
  },
  {
    title: "Project Manager Freelance",
    location: "Padua, Italy",
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
    icon: "html5"
  },
  {
    name: "CSS",
    icon: "css3"
  },
  {
    name: "JavaScript",
    icon: "javascript"
  },
  {
    name: "Typescript",
    icon: "typescript_badge"
  },
  {
    name: "React",
    icon: "react"
  },
  {
    name: "Next.js",
    icon: nextIcon
  },
  {
    name: "Git",
    icon: "git"
  },
  {
    name: "Tailwind",
    icon: tailwindIcon
  },
  {
    name: "Framer Motion",
    icon: framerIcon
  },
  {
    name: "MongoDB",
    icon: "mongodb"
  }
] as const;