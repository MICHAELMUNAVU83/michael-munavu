import React from "react";
import BlogItem from "./BlogItem";
import apiendpoints from "../public/assets/blogs/apiendpoints.png";
import cloudinary from "../public/assets/blogs/cloudinary.png";
import migrations from "../public/assets/blogs/migrations.png";
import render from "../public/assets/blogs/render.png";
import testing from "../public/assets/blogs/testing.png";
import rubyclasses from "../public/assets/blogs/rubyclasses.png";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/pagination';
const Blogs = () => {
  return (
    <div id="blogs" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-10">
        <p className="text-xl tracking-wildest uppercase text-[#5651e5]">
          Blogs
        </p>
        <h2 className="py-4">Some of my recent blogs</h2>

        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          pagination={{ clickable: true}}
          loop="true"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            // when window width is >= 1024px
          }}
        >
          <SwiperSlide>
            <BlogItem
              title="Deploying a Rails API to Render"
              image={render}
              blogUrl="https://medium.com/@michaelmunavu83/deploying-rails-only-api-with-render-97b39ef4aaf8"
              description="With heroku free tier coming to an end I decided to move my Rails API to Render. Render is a platform that allows you to deploy your apps for free. It is a great alternative to Heroku. In this article, I will show you how to deploy your Rails API to Render."
              topics="Rails API, Render"
            />
          </SwiperSlide>
          <SwiperSlide>
            <BlogItem
              title="Uploading Images to Cloudinary in React"
              image={cloudinary}
              blogUrl="https://medium.com/@michaelmunavu83/upload-images-and-videos-in-react-js-using-cloudinary-807328bd9ecf"
              description="In this article, I will show you how to upload images and videos to Cloudinary in React JS. Cloudinary allows you to upload, store, manage, manipulate, and deliver images and videos."
              topics="React JS, Cloudinary"
            />
          </SwiperSlide>
          <SwiperSlide>
            <BlogItem
              title="Testing Rails API with RSpec"
              image={testing}
              blogUrl="https://medium.com/@michaelmunavu83/testing-rails-api-endpoints-with-rspec-900af5d29651"
              description="Testing yur Rails API endpoints is very important. In this article, I will show you how to test your Rails API endpoints with RSpec."
              topics="Rails API, RSpec"
            />
          </SwiperSlide>
          <SwiperSlide>
            <BlogItem
              title="Classes in Ruby"
              image={rubyclasses}
              blogUrl="https://medium.com/@michaelmunavu83/classes-in-ruby-542fa0a3ecc6"
              description="In this article, I will show you how to create classes in Ruby. Classes are the building blocks of Ruby and are a very important concept to understand."
              topics="Ruby, Classes"
            />
          </SwiperSlide>
          <SwiperSlide>
            <BlogItem
              title="Migrations in Rails"
              image={migrations}
              blogUrl="https://medium.com/@michaelmunavu83/ruby-on-rails-migration-commands-4f451047ee93"
              topics="Rails, Migrations"
              description="In this article, I will show you how to create migrations in Rails. Migrations are a very important concept in Rails and are used to create, modify, and delete tables in your database."
            />
          </SwiperSlide>
          <SwiperSlide>
            <BlogItem
              title="Creating CRUD API Endpoints in Rails"
              image={apiendpoints}
              blogUrl="https://medium.com/@michaelmunavu83/setup-rails-api-crud-endpoints-5f0dd0873ff1"
              description="In this article, I will show you how to create CRUD API endpoints in Rails. We create routes and controllers to handle the requests and responses."
              topics="Rails API, CRUD"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Blogs;
