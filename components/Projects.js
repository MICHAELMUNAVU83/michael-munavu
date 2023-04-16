import React from "react";
import cake from "../public/assets/projects/cake.png";
import events from "../public/assets/projects/events.png";
import greenr from "../public/assets/projects/greenr.png";
import house from "../public/assets/projects/house.png";
import lifeline from "../public/assets/projects/lifeline.png";
import techmeout from "../public/assets/projects/tech-me-out.png";
import news from "../public/assets/projects/news.png";
import mechanicall from "../public/assets/projects/mechanicall.png";
import reactrecipe from "../public/assets/projects/reactrecipe.png";
import store from "../public/assets/projects/store.png";
import nike from "../public/assets/projects/nike-clone.png";
import daqchild from "../public/assets/projects/daqchild.png";
import oraimo from "../public/assets/projects/oraimo-clone.png";
import zero22 from "../public/assets/projects/zero22.png";
import sisteskitchen from "../public/assets/projects/sisteskitchen.png";

import ProjectItem from "./ProjectItem";
const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-wildest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-2">Some of my recent projects</h2>
        <p className="  text-sm text-gray-500 mb-4   ">
          These are some of my best projects , here I used React JS for my
          frontend , Ruby and Rails for my backend and Tailwind CSS for Styling
          .
        </p>
        <div className="grid md:grid-cols-2  gap-8">
          <ProjectItem
            title="Gibbz Tha Daqchild Official Site"
            image={daqchild}
            projectUrl="/daqchild"
            languages="Ruby on Rails, React JS"
          />
          <ProjectItem
            title="Meal Planning Website"
            image={sisteskitchen}
            projectUrl="/sisteskitchen"
            languages="Ruby on Rails, React JS , Tailwind CSS"
          />

          <ProjectItem
            title="Zero22 Gym Website"
            image={zero22}
            projectUrl="/zero22"
            languages="Next JS, Tailwind CSS"
          />
          <ProjectItem
            title="House Hunting Site"
            image={house}
            projectUrl="/house"
            languages="React JS, Tailwind CSS"
          />
          <ProjectItem
            title="Nike Clone Website"
            image={nike}
            projectUrl="/nike"
            languages="React JS, Tailwind CSS"
          />

          <ProjectItem
            title="Developer Events Site"
            image={techmeout}
            projectUrl="/techmeout"
            languages="React JS, Tailwind CSS, Ruby on Rails"
          />

          <ProjectItem
            title="Oraimo Clone Website"
            image={oraimo}
            projectUrl="/oraimo"
            languages="React JS, Tailwind CSS, Ruby on Rails"
          />
          <ProjectItem
            title="Live News App"
            image={news}
            projectUrl="/news"
            languages="HTML, CSS, JavaScript"
          />
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
