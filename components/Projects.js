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

import ProjectItem from "./ProjectItem";
const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-wildest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">Some of my recent projects</h2>
        <div className="grid md:grid-cols-2  gap-8">
          <ProjectItem
            title="Medical Records App"
            image={lifeline}
            projectUrl="/lifeline"
            languages="Ruby on Rails, Bootstrap"
          />
          <ProjectItem
            title="Gibbz Tha Daqchild Official Site"
            image={daqchild}
            projectUrl="/daqchild"
            languages="Ruby on Rails, React JS"
          />
          <ProjectItem
            title="House Hunting App"
            image={house}
            projectUrl="/house"
            languages="React JS, Tailwind CSS"
          />
          <ProjectItem
            title="Developer Events Site"
            image={techmeout}
            projectUrl="/techmeout"
            languages="React JS, Tailwind CSS, Ruby on Rails"
          />
          <ProjectItem
            title="Cake Shop Ecommerce"
            image={cake}
            projectUrl="/cake"
            languages="React JS, Bootstrap, Ruby on Rails"
          />

          <ProjectItem
            title="Mechanic Emergency Call App"
            image={mechanicall}
            projectUrl="/mechanicall"
            languages="React JS, Bootstrap CSS, Ruby on Rails"
          />

          <ProjectItem
            title="Carbon Credit Trading Platform"
            image={greenr}
            projectUrl="/greenr"
            languages="React JS, Tailwind CSS"
          />

          <ProjectItem
            title="Event Vendors Booking App"
            image={events}
            projectUrl="/socialmarket"
            languages="React JS , Ruby on Rails"
          />

          <ProjectItem
            title="Oraimo Clone Website"
            image={oraimo}
            projectUrl="/oraimo"
            languages="React JS, Tailwind CSS, Ruby on Rails"
          />

          <ProjectItem
            title="Nike Clone Website"
            image={nike}
            projectUrl="/nike"
            languages="React JS, Tailwind CSS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
