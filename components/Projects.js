import React from "react";

import house from "../public/assets/projects/house.png";

import zero22 from "../public/assets/projects/zero22.png";
import sisteskitchen from "../public/assets/projects/sisteskitchen.png";
import kinywa from "../public/assets/projects/kinywa.png";
import mche from "../public/assets/projects/mche.png";
import kilush from "../public/assets/projects/kilush.png";
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
          frontend , Elixir and Phoenix Live View for my backend and Tailwind
          CSS for Styling .
        </p>
        <div className="grid md:grid-cols-2  gap-8">
          <ProjectItem
            title="Mche"
            image={mche}
            projectUrl="/mche"
            languages="Elixir , Phoenix , Tailwind CSS"
          />

          <ProjectItem
            title="Lipia Ngoma"
            image={lipiangoma}
            projectUrl="/lipiangoma"
            languages="Elixir , Phoenix , Tailwind CSS"
          />

          <ProjectItem
            title="TheKultureKe Ticketing System"
            image={thekultureke}
            projectUrl="/thekultureke"
            languages="Elixir , Phoenix LiveView"
          />
          <ProjectItem
            title="Custom Valetine's Day Website"
            image={bemyvalentine}
            projectUrl="/bemyvalentine"
            languages="Elixir , Phoenix LiveView"
          />
          <ProjectItem
            title="Pataride"
            image={pataride}
            projectUrl="/pataride"
            languages="Elixir , Phoenix , Tailwind CSS"
          />
          <ProjectItem
            title="Influencer Management System"
            image={allthingsocial}
            projectUrl="/allthingsocial"
            languages="ELixir , Phoenix , Tailwind CSS"
          />

          <ProjectItem
            title="Summertides"
            image={summertides}
            projectUrl="/summertides"
            languages="React JS , Tailwind CSS"
          />

          <ProjectItem
            title="Photographer Portfolio"
            image={kinywa}
            projectUrl="/kinywa"
            languages="React JS, Tailwind CSS"
          />
          <ProjectItem
            title="People's Choice Africa Awards"
            image={peopleschoice}
            projectUrl="/peopleschoice"
            languages="React JS, Tailwind CSS"
          />

          <ProjectItem
            title="EngagePro Employee Management System"
            image={engagepro}
            projectUrl="/engagepro"
            languages="Elixir , Phoenix , Tailwind CSS"
          />
          <ProjectItem
            title="Thinkopal Website"
            image={thinkopal}
            projectUrl="/thinkopal"
            languages="React JS, Tailwind CSS"
          />

          <ProjectItem
            title="Cleaning Services Website"
            image={smarie}
            projectUrl="/smarie"
            languages="React JS, Tailwind CSS"
          />

          <ProjectItem
            title="Data Science Website"
            image={kilush}
            projectUrl="/kilush"
            languages="React JS, Tailwind CSS"
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
            title="Real Estate Website"
            image={house}
            projectUrl="/house"
            languages="React JS, Tailwind CSS, Ruby on Rails"
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
