import React from "react";
import cake from "../public/assets/projects/cake.png";
import events from "../public/assets/projects/events.png";
import greenr from "../public/assets/projects/greenr.png";
import house from "../public/assets/projects/house.png";
import lifeline from "../public/assets/projects/lifeline.png";
import movies from "../public/assets/projects/movies.png";
import techmeout from "../public/assets/projects/tech-me-out.png";
import votein from "../public/assets/projects/votein.png";
import news from "../public/assets/projects/news.png";
import mechanicall from "../public/assets/projects/mechanicall.png";
import reactrecipe from "../public/assets/projects/reactrecipe.png";
import store from "../public/assets/projects/store.png";

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
            title="Cake Shop Ecommerce"
            image={cake}
            projectUrl="/cake"
            languages="React JS, Bootstrap, Ruby on Rails"
          />
          <ProjectItem
            title="Medical Records App"
            image={lifeline}
            projectUrl="/lifeline"
            languages="Ruby on Rails, Bootstrap"
          />
          <ProjectItem
            title="Mechanic Emergency Call App"
            image={mechanicall}
            projectUrl="/mechanicall"
            languages="React JS, Bootstrap CSS, Ruby on Rails"
          />
          <ProjectItem
            title="House Hunting App"
            image={house}
            projectUrl="/house"
            languages="React JS, Tailwind CSS"
          />
          <ProjectItem
            title="Carbon Credit Trading Platform"
            image={greenr}
            projectUrl="/greenr"
            languages="React JS, Tailwind CSS"
          />
          <ProjectItem
            title="Developer Events Site"
            image={techmeout}
            projectUrl="/techmeout"
            languages="React JS, Tailwind CSS, Ruby on Rails"
          />
          <ProjectItem
            title="Event Vendors Booking App"
            image={events}
            projectUrl="/socialmarket"
            languages="React JS , Ruby on Rails"
          />
          <ProjectItem
            title="Movie App"
            image={movies}
            projectUrl="/movie"
            languages="HTML, CSS, JavaScript"
          />
          <ProjectItem
            title="Company Voting App"
            image={votein}
            projectUrl="/votein"
            languages="Ruby on Rails, Bootstrap"
          />
          <ProjectItem
            title="Live News App"
            image={news}
            projectUrl="/news"
            languages="HTML , CSS, JavaScript"
          />
          <ProjectItem
            title="React Recipe App"
            image={reactrecipe}
            projectUrl="/reactrecipe"
            languages="React JS, Bootstrap"
          />
          <ProjectItem
            title="Ecommerce Store App"
            image={store}
            projectUrl="/store"
            languages="React JS, Bootstrap"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
