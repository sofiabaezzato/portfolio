import React from "react";
import { MdWork } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import toolboxImg from "@/public/toolbox.png";
import tailwindIcon from '@/public/icons/tailwind.svg'
import knightImg from '@/public/knight.png'
import nextIcon from '@/public/icons/next.svg'
import framerIcon from '@/public/icons/framer.svg'
import { BsFillKanbanFill } from "react-icons/bs";

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
    title: "BSc Aerospace Engineering",
    location: "Università degli Studi di Padova, Italy",
    description:
      `Survived the academic jungle, emerged with a degree in a subject I thought was my "life calling" — turns out, it was more like a distant cousin. Mastered abstract thinking, problem solving and resilience.`,
    /* did: "Studied, prayed, and cried", */
    learn: "Math, physics and survival skills.",
    icon: React.createElement(FaGraduationCap),
    date: "2019",
  },
  {
    title: "Videomaker & Motion Designer Freelance",
    location: "Padua, Italy",
    description: `
    After university, I ventured into the world of freelance videomaking and motion design, learning the basics and advanced topics from scratch through YouTube tutorials. Specializing in crafting product commercials, corporate event aftermovies, and explainer videos, my business not only weathered the pandemic storm but thrived, with annual revenue growth ranging from 40 to 70%.`,
    /* did: `Handling everything from initial quotes and project proposals to scripting, storytelling, filming, and editing.`, */
    learn: `Working with clients ranging from small businesses to multinational corporations, I honed the skill of understanding their needs and consistently delivering projects that met their requirements. I mastered the art of negotiation, swiftly resolving issues on the fly, ensuring timely and top-notch results.`,
    icon: React.createElement(MdWork),
    date: "Jan 2019 - present",
  },
  {
    title: "UniSMART - Project Manager Freelance",
    location: "Padua, Italy",
    description:
      `
      At UniSMART, the University of Padua's foundation, I played a role in ideating and creating impactful talent engagement initiatives. Organizing a hackathon that engaged around 40 students, I handled the logistical, operational, and communicative aspects of the event. In the past year, I took charge of organizing the Contamination Lab Veneto, a University of Padua initiative fostering collaboration between students and companies in innovative project development. Mentored two innovation projects, achieving third place award twice.
      `,
    /* did: `
      Managing a small team, fostering relationships with companies of various sizes (including multinational corporations) and other stakeholders, supervising communication across social platforms, newsletters, and events. Mentored two innovation projects, achieving third place award twice.
      `, */
    learn: `
      Project management, team management, cultivating connections with diverse-sized companies, developing and overseeing communication, managing innovative projects and eary stage startups.
    `,
    icon: React.createElement(BsFillKanbanFill),
    date: "Mar 2022 - present",
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
    title: "Knight Travails",
    description:
      `A solution to a "knight travails" problem - i.e. find the shortest path a knight can take to move between two positions on a chessboard. Implemented using a graph BFS search. I know, nothing fancy but I'm really proud of this one.`,
    tags: ["JavaScript"],
    imageUrl: knightImg,
    website: '',
    repoUrl:"https://github.com/sofiabaezzato/knight-travails",
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