import React from "react";
import BlogItem from "./BlogItem";
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
const Blogs = () => {
  return (
    <div id="blogs" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-10">
        <p className="text-xl tracking-wildest uppercase text-[#5651e5]">
          Blogs
        </p>
        <h2 className="py-4">Some of my recent blogs</h2>
        <div className="grid md:grid-cols-3  gap-8">
          <BlogItem
            title="Cake Shop Ecommerce"
            image={cake}
            projectUrl="/cake"
            languages="React JS, Bootstrap, Ruby on Rails"
          />
          <BlogItem
            title="Medical Records App"
            image={lifeline}
            projectUrl="/lifeline"
            languages="Ruby on Rails, Bootstrap"
          />
          <BlogItem
            title="Mechanic Emergency Call App"
            image={mechanicall}
            projectUrl="/mechanicall"
            languages="React JS, Bootstrap CSS, Ruby on Rails"
          />
          <BlogItem
            title="House Hunting App"
            image={house}
            projectUrl="/house"
            languages="React JS, Tailwind CSS"
          />
          <BlogItem
            title="Carbon Credit Trading Platform"
            image={greenr}
            projectUrl="/greenr"
            languages="React JS, Tailwind CSS"
          />
          <BlogItem
            title="Developer Events Site"
            image={techmeout}
            projectUrl="/techmeout"
            languages="React JS, Tailwind CSS, Ruby on Rails"
          />
          <BlogItem
            title="Event Vendors Booking App"
            image={events}
            projectUrl="/socialmarket"
            languages="React JS , Ruby on Rails"
          />
          <BlogItem
            title="Movie App"
            image={movies}
            projectUrl="/movie"
            languages="HTML, CSS, JavaScript"
          />
          <BlogItem
            title="Company Voting App"
            image={votein}
            projectUrl="/votein"
            languages="Ruby on Rails, Bootstrap"
          />
          <BlogItem
            title="Live News App"
            image={news}
            projectUrl="/news"
            languages="HTML , CSS, JavaScript"
          />
          <BlogItem
            title="React Recipe App"
            image={reactrecipe}
            projectUrl="/reactrecipe"
            languages="React JS, Bootstrap"
          />
          <BlogItem
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

export default Blogs;
