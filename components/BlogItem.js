import React from "react";
import Image from "next/image";

const BlogItem = ({ title, image, projectUrl, languages }) => {
  return (
    <div class="flex justify-center shadow-2xl shadow-gray-500 hover:scale-105 transform transition duration-500 ease-in-out">
      <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
        <Image
          class=" w-full h-50 md:h-50 object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
          src={image}
          alt=""
        />

        <div class="p-6 flex flex-col justify-start">
          <h5 class="text-gray-900 text-xl font-medium mb-2">{title}</h5>
          <p class="text-gray-700 text-base mb-4">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p class="text-gray-600 text-xs">{projectUrl}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
