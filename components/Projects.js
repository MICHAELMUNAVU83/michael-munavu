import React, { useState } from "react";
import { IoMdStar } from "react-icons/io";
import house from "../public/assets/projects/house.png";
import zero22 from "../public/assets/projects/zero22.png";
import sisteskitchen from "../public/assets/projects/sisteskitchen.png";
import kinywa from "../public/assets/projects/kinywa.png";
import mche from "../public/assets/projects/mche.png";
import mwamba from "../public/assets/projects/mwamba.png";
import smarie from "../public/assets/projects/smarie.png";
import thinkopal from "../public/assets/projects/thinkopal.png";
import engagepro from "../public/assets/projects/engagepro.png";
import peopleschoice from "../public/assets/projects/peopleschoice.png";
import allthingsocial from "../public/assets/projects/allthingsocial.png";
import thekultureke from "../public/assets/projects/thekultureke.png";
import pataride from "../public/assets/projects/pataride.png";
import bemyvalentine from "../public/assets/projects/bemyvalentine.png";
import lipiangoma from "../public/assets/projects/lipiangoma.png";
import summertides from "../public/assets/projects/summertides.png";
import headwearsolutions from "../public/assets/projects/headwearsolutions.png";
import oraimo from "../public/assets/projects/oraimo-clone.png";
import turningpoint from "../public/assets/projects/turningpoint.png";
import news from "../public/assets/projects/news.png";
import kilush from "../public/assets/projects/kilush.png";
import sema from "../public/assets/projects/sema.png";
import qliq from "../public/assets/projects/qliq.png";
import thrills from "../public/assets/projects/thrills.png";
import kerry from "../public/assets/projects/kerry.png";
import raila from "../public/assets/projects/raila.png";
import tenx from "../public/assets/projects/tenx.png";

import purefruit from "../public/assets/projects/purefruit.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  const [projectstoshow, setProjectsToShow] = useState("all");
  const projects = [
    {
      title: "Raila For AUC Official Website",
      image: raila,
      projectUrl: "/raila",
      languages: "React JS , Tailwind CSS",
    },
    {
      title: "10x Beast",
      image: tenx,
      projectUrl: "/tenx",
      languages: "Elixir , Phoenix LiveView , Python",
    },
    {
      title: "Mche",
      image: mche,
      projectUrl: "/mche",
      languages: "Elixir , Phoenix , Tailwind CSS",
    },
    {
      title: "Lipia Ngoma",
      image: lipiangoma,
      projectUrl: "/lipiangoma",
      languages: "Elixir , Phoenix , Tailwind CSS",
    },
    {
      title: "Sema Web App",
      image: sema,
      projectUrl: "/sema",
      languages: "Elixir , Phoenix , Tailwind CSS",
    },
    {
      title: "Headwear Solutions Ecommerce System",
      image: headwearsolutions,
      projectUrl: "/headwearsolutions",
      languages: "Elixir , Phoenix LiveView",
    },
    {
      title: "Mwamba RFC",
      image: mwamba,
      projectUrl: "/mwamba",
      languages: "Elixir , Phoenix , Tailwind CSS",
    },
    {
      title: "TheKultureKe Ticketing System",
      image: thekultureke,
      projectUrl: "/thekultureke",
      languages: "Elixir , Phoenix LiveView",
    },
    {
      title: "Custom Valetine's Day Website",
      image: bemyvalentine,
      projectUrl: "/bemyvalentine",
      languages: "Elixir , Phoenix LiveView",
    },
    {
      title: "Pataride",
      image: pataride,
      projectUrl: "/pataride",
      languages: "Elixir , Phoenix , Tailwind CSS",
    },
    {
      title: "Influencer Management System",
      image: allthingsocial,
      projectUrl: "/allthingsocial",
      languages: "ELixir , Phoenix , Tailwind CSS",
    },
    {
      title: "Summertides",
      image: summertides,
      projectUrl: "/summertides",
      languages: "React JS , Tailwind CSS",
    },
    {
      title: "Purefruit",
      image: purefruit,
      projectUrl: "/purefruit",
      languages: "React JS, Tailwind CSS",
    },
    {
      title: "Thrills & Spills",
      image: thrills,
      projectUrl: "/thrills",
      languages: "React JS, Tailwind CSS",
    },
    {
      title: "Qliq Africa",
      image: qliq,
      projectUrl: "/qliq",
      languages: "React JS, Tailwind CSS",
    },
    {
      title: "Photographer Portfolio",
      image: kinywa,
      projectUrl: "/kinywa",
      languages: "React JS, Tailwind CSS",
    },
    {
      title: "People's Choice Africa Awards",
      image: peopleschoice,
      projectUrl: "/peopleschoice",
      languages: "React JS, Tailwind CSS",
    },
    {
      title: "EngagePro Employee Management System",
      image: engagepro,
      projectUrl: "/engagepro",
      languages: "Elixir , Phoenix , Tailwind CSS",
    },
    {
      title: "Thinkopal Website",
      image: thinkopal,
      projectUrl: "/thinkopal",
      languages: "React JS, Tailwind CSS",
    },
    {
      title: "Cleaning Services Website",
      image: smarie,
      projectUrl: "/smarie",
      languages: "React JS, Tailwind CSS",
    },
    {
      title: "Meal Planning Website",
      image: sisteskitchen,
      projectUrl: "/sisteskitchen",
      languages: "Ruby on Rails, React JS , Tailwind CSS",
    },
    {
      title: "Zero22 Gym Website",
      image: zero22,
      projectUrl: "/zero22",
      languages: "Next JS, Tailwind CSS",
    },
    {
      title: "Martin Kerry Portflio",
      image: kerry,
      projectUrl: "/kerry",
      languages: "React JS, Tailwind CSS",
    },
    {
      title: "Real Estate Website",
      image: house,
      projectUrl: "/house",
      languages: "React JS, Tailwind CSS, Ruby on Rails",
    },
  ];
  const elixir_projects = [
    {
      title: "10x Beast",
      image: tenx,
      projectUrl: "/tenx",
      languages: "Elixir , Phoenix LiveView , Python",
    },
    {
      title: "Sema Web App",
      image: sema,
      projectUrl: "/sema",
      languages: "Elixir , Phoenix , Tailwind CSS",
    },
    {
      title: "Mche",
      image: mche,
      projectUrl: "/mche",
      languages: "Elixir , Phoenix , Tailwind CSS",
    },
    {
      title: "Lipia Ngoma",
      image: lipiangoma,
      projectUrl: "/lipiangoma",
      languages: "Elixir , Phoenix , Tailwind CSS",
    },

    {
      title: "Headwear Solutions Ecommerce System",
      image: headwearsolutions,
      projectUrl: "/headwearsolutions",
      languages: "Elixir , Phoenix LiveView",
    },
    {
      title: "Mwamba RFC",
      image: mwamba,
      projectUrl: "/mwamba",
      languages: "Elixir , Phoenix , Tailwind CSS",
    },
    {
      title: "TheKultureKe Ticketing System",
      image: thekultureke,
      projectUrl: "/thekultureke",
      languages: "Elixir , Phoenix LiveView",
    },
    {
      title: "Custom Valetine's Day Website",
      image: bemyvalentine,
      projectUrl: "/bemyvalentine",
      languages: "Elixir , Phoenix LiveView",
    },
    {
      title: "Pataride",
      image: pataride,
      projectUrl: "/pataride",
      languages: "Elixir , Phoenix , Tailwind CSS",
    },
    {
      title: "Influencer Management System",
      image: allthingsocial,
      projectUrl: "/allthingsocial",
      languages: "ELixir , Phoenix , Tailwind CSS",
    },

    {
      title: "EngagePro Employee Management System",
      image: engagepro,
      projectUrl: "/engagepro",
      languages: "Elixir , Phoenix , Tailwind CSS",
    },
  ];

  const react_projects = [
    {
      title: "Raila For AUC Official Website",
      image: mche,
      projectUrl: "/raila",
      languages: "React JS , Tailwind CSS",
    },
    {
      title: "Summertides",
      image: summertides,
      projectUrl: "/summertides",
      languages: "React JS , Tailwind CSS",
    },
    {
      title: "Photographer Portfolio",
      image: kinywa,
      projectUrl: "/kinywa",
      languages: "React JS, Tailwind CSS",
    },
    {
      title: "Purefruit",
      image: purefruit,
      projectUrl: "/purefruit",
      languages: "React JS, Tailwind CSS",
    },
    {
      title: "Thrills & Spills",
      image: thrills,
      projectUrl: "/thrills",
      languages: "React JS, Tailwind CSS",
    },
    {
      title: "Qliq Africa",
      image: qliq,
      projectUrl: "/qliq",
      languages: "React JS, Tailwind CSS",
    },
    {
      title: "People's Choice Africa Awards",
      image: peopleschoice,
      projectUrl: "/peopleschoice",
      languages: "React JS, Tailwind CSS",
    },
    {
      title: "Thinkopal Website",
      image: thinkopal,
      projectUrl: "/thinkopal",
      languages: "React JS, Tailwind CSS",
    },
    {
      title: "Cleaning Services Website",
      image: smarie,
      projectUrl: "/smarie",
      languages: "React JS, Tailwind CSS",
    },
    {
      title: "Meal Planning Website",
      image: sisteskitchen,
      projectUrl: "/sisteskitchen",
      languages: "Ruby on Rails, React JS , Tailwind CSS",
    },
    {
      title: "Martin Kerry Portfolio",
      image: kerry,
      projectUrl: "/kerry",
      languages: "React JS, Tailwind CSS",
    },
    {
      title: "Zero22 Gym Website",
      image: zero22,
      projectUrl: "/zero22",
      languages: "Next JS, Tailwind CSS",
    },
    {
      title: "Real Estate Website",
      image: house,
      projectUrl: "/house",
      languages: "React JS, Tailwind CSS, Ruby on Rails",
    },
    {
      title: "Turning Point",
      image: turningpoint,
      projectUrl: "/turningpoint",
      languages: "Ruby on Rails, React JS , Tailwind CSS",
    },
    {
      title: "Oraimo Clone",
      image: oraimo,
      projectUrl: "/oraimo",
      languages: "Next JS, Tailwind CSS",
    },
    {
      title: "News",
      image: news,
      projectUrl: "/news",
      languages: "React JS, Tailwind CSS, Ruby on Rails",
    },
    {
      title: "Data Sceince Portfolio",
      image: kilush,
      projectUrl: "/kilush",
      languages: "React JS, Tailwind CSS, Ruby on Rails",
    },
  ];

  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-wildest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-2">Some of my recent projects</h2>
        <p className="  text-sm text-gray-500 mb-4">
          These are some of my best projects , here I used React JS for my
          frontend , Elixir and Phoenix Live View for my backend and Tailwind
          CSS for Styling .
        </p>
        <div class="flex gap-4 md:flex-row flex-col items-center">
          <div
            class={`bg-white p-2 shadow-black/50 cursor-pointer  transition-all ease-in-out duration-500   flex gap-4 items-center shadow-sm rounded-3xl ${
              projectstoshow == "all"
                ? "bg-[#5651e5] text-white"
                : "hover:bg-[#5651e5] hover:text-white"
            }`}
            onClick={() => setProjectsToShow("all")}
          >
            <IoMdStar /> All Projects <IoMdStar />
          </div>
          <div
            class={`bg-white p-2 shadow-black/50 cursor-pointer  transition-all ease-in-out duration-500  flex gap-4 items-center shadow-sm rounded-3xl ${
              projectstoshow == "elixir"
                ? "bg-[#5651e5] text-white"
                : "hover:bg-[#5651e5] hover:text-white"
            }`}
            onClick={() => setProjectsToShow("elixir")}
          >
            <IoMdStar /> Phoenix / Elixir Projects <IoMdStar />
          </div>
          <div
            class={`bg-white p-2 shadow-black/50 cursor-pointer transition-all ease-in-out duration-500  flex gap-4 items-center shadow-sm rounded-3xl ${
              projectstoshow == "react"
                ? "bg-[#5651e5] text-white"
                : "hover:bg-[#5651e5] hover:text-white"
            }`}
            onClick={() => setProjectsToShow("react")}
          >
            <IoMdStar /> React / Javascript Projects <IoMdStar />
          </div>
        </div>

        <div className="grid md:grid-cols-2  mt-16 gap-8">
          {projectstoshow == "all" &&
            projects.map((project, index) => (
              <ProjectItem
                title={project.title}
                image={project.image}
                projectUrl={project.projectUrl}
                languages={project.languages}
              />
            ))}
          {projectstoshow == "elixir" &&
            elixir_projects.map((project, index) => (
              <ProjectItem
                title={project.title}
                image={project.image}
                projectUrl={project.projectUrl}
                languages={project.languages}
              />
            ))}
          {projectstoshow == "react" &&
            react_projects.map((project, index) => (
              <ProjectItem
                title={project.title}
                image={project.image}
                projectUrl={project.projectUrl}
                languages={project.languages}
              />
            ))}
        </div>
      </div>

      <div className="flex justify-center items-center">
        <a
          className="bg-[#5651e5] text-white px-8 py-4  cursor-pointer shadow-gray-200 shadow-2xl hover:scale-105 transition-all duration-500 rounded-md text-sm font-semibold"
          href="https://github.com/MICHAELMUNAVU83"
          target="_blank"
          rel="noreferrer"
        >
          See All My Projects
        </a>
      </div>
    </div>
  );
};

export default Projects;
