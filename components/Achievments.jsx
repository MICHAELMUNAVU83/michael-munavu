import React from "react";
import hackathon1 from "../public/assets/achievements/hackathon1.jpeg";
import hackathon2 from "../public/assets/achievements/hackathon2.jpeg";
import hackathon3 from "../public/assets/achievements/hackathon3.jpeg";
import hackathon4 from "../public/assets/achievements/hackathon4.jpeg";
import hackathon5 from "../public/assets/achievements/hackathon5.jpeg";
import Image from "next/image";
const Achievments = () => {
  return (
    <div className="max-w-[1240px]  mx-auto mt-24">
      <p className="text-xl tracking-widest uppercase text-[#5651e5] ">
        Achievements
      </p>
      <h2 className="py-4">What I have achieved so far</h2>
      <p className="  text-sm text-gray-500    font-semibold">
        During the year 2022 , I was able to participate in various hackathons
        and won 2 of them. I was the lead backend engineer for a project called
        lifeline which provides quick access to medical records . This year , me
        and{" "}
        <a
          href="https://www.kiprotichkimutai.dev/"
          target="_blank"
          rel="noreferrer"
          className=" text-[#5651e5]"
        >
          Kiprotich Kimutai
        </a>{" "}
        , worked on Mche, which offers a comprehensive solution to smallholder
        farmers. We have so far won 3 awards with Mche .
      </p>

      <div className="flex justify-center gap-4 mt-12">
        <div className="w-3/5 flex flex-col gap-6 ">
          <Image
            src={hackathon5}
            alt="hackathon1"
            className="h-[400px] w-[850px]"
          />
          <div className="flex gap-2 justify-between my-2 items-center">
            <Image
              src={hackathon2}
              alt="hackathon1"
              className="w-[420px] h-[410px]"
            />
            <Image
              src={hackathon3}
              alt="hackathon1"
              className="w-[420px] h-[410px]"
            />
          </div>
        </div>

        <div className="w-2/5 flex justify-center gap-4 flex-col  ">
          <Image src={hackathon4} alt="hackathon1" className="h-[410px]" />
          <Image src={hackathon1} alt="hackathon1" className="h-[410px]" />
        </div>
      </div>

      {/* <div className="flex justify-center mt-12">
        <Image  src={sportpesalogo} alt="sportpesalogo" className="w-[200px]" />
      </div> */}
    </div>
  );
};

export default Achievments;
