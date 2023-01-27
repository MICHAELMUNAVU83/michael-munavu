import React from "react";
import project1 from "../public/assets/projects/crypto.jpg";
import project2 from "../public/assets/projects/netflix.jpg";
import project3 from "../public/assets/projects/property.jpg";
import project4 from "../public/assets/projects/twitch.jpg";
import Image from "next/image";
import Link from "next/link";
import ProjectItem from "./ProjectItem";
const Projects = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-wildest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">Some of my recent projects</h2>
        <div className="grid md:grid-cols-2  gap-8">
          <ProjectItem
            title="Crypto Tracker"
            image={project1}
            projectUrl="/crypto-tracker"
            languages="React JS, Tailwind CSS, Next JS, CoinGecko API"
          />
          <ProjectItem
            title="Netflix Clone"
            image={project2}
            projectUrl="/netflix-clone"
            languages="React JS, Tailwind CSS, Next JS, TMDB API"
          />
          <ProjectItem
            title="Property Listing"
            image={project3}
            projectUrl="/property-listing"
            languages="React JS, Tailwind CSS, Next JS, Strapi CMS"
          />
          <ProjectItem
            title="Twitch Clone"
            image={project4}
            projectUrl="/twitch-clone"
            languages="React JS, Tailwind CSS, Next JS, Twitch API"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
