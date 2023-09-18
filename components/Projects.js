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
import kinywa from "../public/assets/projects/kinywa.png";
import mche from "../public/assets/projects/mche.png";
import kilush from "../public/assets/projects/kilush.png";
import smarie from "../public/assets/projects/smarie.png";
import thinkopal from "../public/assets/projects/thinkopal.png";
import onemind from "../public/assets/projects/onemind.png";
import engagepro from "../public/assets/projects/engagepro.png";
import truckexpensesystem from "../public/assets/projects/truckexpensesystem.png";
import peopleschoice from "../public/assets/projects/peopleschoice.png";
import allthingsocial from "../public/assets/projects/allthingsocial.png";
import thekultureke from "../public/assets/projects/thekultureke.png";
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
          frontend , Ruby and Rails , Elixir and Phoenix Live View for my
          backend and Tailwind CSS for Styling .
        </p>
        <div className="grid md:grid-cols-2  gap-8">
          <ProjectItem
            title="TheKultureKe Ticketing System"
            image={thekultureke}
            projectUrl="/thekultureke"
            languages="Elixir , Phoenix LiveView"
          />
          <ProjectItem
            title="EngagePro Employee Management System"
            image={engagepro}
            projectUrl="/engagepro"
            languages="Elixir , Phoenix , Tailwind CSS"
          />
          <ProjectItem
            title="Photpgrapher Portfolio"
            image={kinywa}
            projectUrl="/kinywa"
            languages="React JS, Tailwind CSS"
          />
          <ProjectItem
            title="Influencer Management System"
            image={allthingsocial}
            projectUrl="/allthingsocial"
            languages="ELixir , Phoenix , Tailwind CSS"
          />
          <ProjectItem
            title="People's Choice Africa Awards"
            image={peopleschoice}
            projectUrl="/peopleschoice"
            languages="React JS, Tailwind CSS"
          />
          <ProjectItem
            title="Onemind"
            image={onemind}
            projectUrl="/onemind"
            languages="ELixir , Phoenix , Tailwind CSS"
          />
          <ProjectItem
            title="Thinkopal Website"
            image={thinkopal}
            projectUrl="/thinkopal"
            languages="React JS, Tailwind CSS"
          />
          <ProjectItem
            title="Gibbz Tha Daqchild Official Site"
            image={daqchild}
            projectUrl="/daqchild"
            languages="Ruby on Rails, React JS"
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
            title="Cleaning Services Website"
            image={smarie}
            projectUrl="/smarie"
            languages="React JS, Tailwind CSS"
          />

          <ProjectItem
            title="Real Estate Website"
            image={house}
            projectUrl="/house"
            languages="React JS, Tailwind CSS, Ruby on Rails"
          />

          <ProjectItem
            title="Nike Clone Website"
            image={nike}
            projectUrl="/nike"
            languages="React JS, Tailwind CSS"
          />

          <ProjectItem
            title="Oraimo Clone Website"
            image={oraimo}
            projectUrl="/oraimo"
            languages="React JS, Tailwind CSS, Ruby on Rails"
          />
          <ProjectItem
            title="Live News Website"
            image={news}
            projectUrl="/news"
            languages="HTML , CSS , JavaScript"
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
