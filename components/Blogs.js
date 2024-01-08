import React from "react";
import BlogItem from "./BlogItem";
import apiendpoints from "../public/assets/blogs/apiendpoints.png";
import cloudinary from "../public/assets/blogs/cloudinary.png";
import migrations from "../public/assets/blogs/migrations.png";
import render from "../public/assets/blogs/render.png";
import testing from "../public/assets/blogs/testing.png";
import rubyclasses from "../public/assets/blogs/rubyclasses.png";
import uploadrails from "../public/assets/blogs/upload-rails.png";
import validations from "../public/assets/blogs/validations.png";
import library from "../public/assets/blogs/library.png";
import addtocartblog from "../public/assets/blogs/addtocartblog.png";
import livesearch from "../public/assets/blogs/livesearch.png";
import pagination from "../public/assets/blogs/phoenixpagination.png";
import elixirjwt from "../public/assets/blogs/elixirjwt.png";
import sendsms from "../public/assets/blogs/sendsms.png";
import chpter from "../public/assets/blogs/chpter.png";
import testinglive from "../public/assets/blogs/testinglive.png";
import phoenixliveviewuploads from "../public/assets/blogs/upload-phoenix-liveview.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import { send } from "@emailjs/browser";

const Blogs = () => {
  return (
    <div id="blogs" className="w-full my-12">
      <div className="max-w-[1240px] mx-auto px-2 my-10">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Blogs
        </p>
        <h2 className="py-2">Some of my recent blogs</h2>
        <p className="  text-sm text-gray-500 mb-4   ">
          I love documenting my work and teaching other developers as this is
          the way to learn, below are some of my articles on {""}
          <a
            href="https://medium.com/@michaelmunavu83"
            target="_blank"
            rel="noreferrer"
            className="text-[#5651e5] font-semibold"
          >
            Medium
          </a>
        </p>

        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={50}
          loop="true"
          className="md:h-[650px] h-[600px] "
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            // when window width is >= 1024px
          }}
        >
          <SwiperSlide>
            <BlogItem
              title="Elixir Api Authentication"
              image={elixirjwt}
              blogUrl="https://medium.com/@michaelmunavu83/testing-phoenix-live-view-7851ccca6e37"
              description="In this article, I will show you how to implement JWT authentication in your Elixir API. We will use Guardian to implement JWT authentication."
              topics="Elixir"
              className="flex justify-center"
            />
          </SwiperSlide>
          <SwiperSlide>
            <BlogItem
              title="Testing Phoenix Live View"
              image={testinglive}
              blogUrl="https://medium.com/@michaelmunavu83/testing-phoenix-live-view-7851ccca6e37"
              description="With testing, you write a test case against a certain event and you test once, if the test passes you are good.       "
              topics="Phoenix Live View, Elixir"
              className="flex justify-center"
            />
          </SwiperSlide>
          <SwiperSlide>
            <BlogItem
              title="Using Chpter for Payments in Elixir"
              image={chpter}
              blogUrl="https://medium.com/@michaelmunavu83/using-chpter-api-for-mpesa-payments-in-elixir-and-phoenix-live-view-9406ac4d1039"
              description="Payments are something we all need in our systems, In Kenya, the most popular payment API but their documentation is hell in my opinion and that is why I have opted for chpter in my systems, I have implemented it with Elixir and Phoenix Live View to create ticketing systems that never fail."
              topics="Phoenix Live View, Elixir"
              className="flex justify-center"
            />
          </SwiperSlide>
          <SwiperSlide>
            <BlogItem
              title="Sending SMS in Phoenix Live View"
              image={sendsms}
              blogUrl="https://medium.com/@michaelmunavu83/sending-sms-using-your-phoenix-applications-69f29a1892f3"
              description="We  dive into the world of Tiara Connect  the process of using it to send SMS messages via third-party APIs in Phoenix"
              topics="Phoenix Live View, Elixir"
              className="flex justify-center"
            />
          </SwiperSlide>
          <SwiperSlide>
            <BlogItem
              title="Live Search in Phoenix Live View"
              image={livesearch}
              blogUrl="https://medium.com/@michaelmunavu83/enhancing-user-experience-with-live-search-feature-using-phoenix-live-view-and-elixir-41b215874f62"
              description="Enhancing User Experience with Live Search Feature using Phoenix Live View"
              topics="Phoenix Live View, Elixir"
              className="flex justify-center"
            />
          </SwiperSlide>

          <SwiperSlide>
            <BlogItem
              title="Pagination in Phoenix Live View"
              image={pagination}
              blogUrl="https://medium.com/@michaelmunavu83/streamlining-pagination-in-phoenix-live-view-with-scrivener-5ceb6e6fe642"
              description="Streamlining Pagination in Phoenix Live View with Scrivener"
              topics="Phoenix Live View, Elixir"
              className="flex justify-center"
            />
          </SwiperSlide>

          <SwiperSlide>
            <BlogItem
              title="Add to Cart in Phoenix Live View"
              image={addtocartblog}
              blogUrl="https://medium.com/@michaelmunavu83/seamless-shopping-made-easy-building-an-intuitive-add-to-cart-feature-with-phoenix-liveview-278ca68bdb55"
              description="Seamless Shopping Made Easy: Building an Intuitive Add to Cart Feature with Phoenix LiveView"
              topics="Phoenix Live View, Elixir"
              className="flex justify-center"
            />
          </SwiperSlide>
          <SwiperSlide>
            <BlogItem
              title="Uploading Images in Phoenix Live View"
              image={phoenixliveviewuploads}
              blogUrl="https://medium.com/@michaelmunavu83/uploading-images-in-phoenix-live-view-459b481a8385"
              description="Uploading Images in Phoenix Live view "
              topics="Phoenix Live View, Elixir"
              className="flex justify-center"
            />
          </SwiperSlide>
          <SwiperSlide>
            <BlogItem
              title="Library Management Stystem in Phoenix"
              image={library}
              blogUrl="https://medium.com/@michaelmunavu83/unleashing-efficiency-building-an-advanced-library-management-system-with-phoenix-e061dedbad00"
              description="Unleashing Efficiency: Building an Advanced Library Management System with Phoenix."
              topics="Phoenix Live View, Elixir"
              className="flex justify-center"
            />
          </SwiperSlide>
          <SwiperSlide>
            <BlogItem
              title="Validations in Phoenix Live View"
              image={validations}
              blogUrl="https://medium.com/@michaelmunavu83/unlock-the-power-of-validations-in-phoenix-live-view-ensuring-robust-user-input-69f77aed422c"
              description="This article explores the importance of validations in Phoenix Live View, demonstrates effective implementation techniques, and highlights the benefits of real-time error feedback."
              topics="Phoenix Live View, Elixir"
              className="flex justify-center"
            />
          </SwiperSlide>
          <SwiperSlide>
            <BlogItem
              title="Deploying a Rails API to Render"
              image={render}
              blogUrl="https://medium.com/@michaelmunavu83/deploying-rails-only-api-with-render-97b39ef4aaf8"
              description="With heroku free tier coming to an end I decided to move my Rails API to Render. Render is  a great alternative to Heroku. In this article, I will show you how to deploy your Rails API to Render."
              topics="Rails API, Render"
              className="flex justify-center"
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

          <SwiperSlide>
            <BlogItem
              title="Uploading Images to Cloudinary in Rails"
              image={uploadrails}
              blogUrl="https://medium.com/@michaelmunavu83/upload-images-in-a-rails-app-7645b3bf2f76"
              description="In this article, I will show you how to upload images to Cloudinary in Rails. Cloudinary allows you to upload, store, manage, manipulate, and deliver images and videos."
              topics="Ruby on Rails, Cloudinary"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Blogs;
