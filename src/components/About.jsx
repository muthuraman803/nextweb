import React from "react";

const About = () => {
  return (
    <div className="bg-[#fff] text-black text-center flex flex-col justify-evenly h-[60%] p-8">
      <p className="text-2xl text-gray-400 font-medium">CATEGORY NAME 1</p>
      <h1 className="font-bold text-6xl tracking-widest">YOUR TITLE #1</h1>
      <p className=" text-3xl tracking-[13px] font-semibold">PUT A SUBTITLE HERE</p>
      <div className="text-center flex justify-center">
        <p className=" w-[50%] text-xl xl:w-[100%] ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      <p className="font-bold text-xl">MORE INFO</p>
    </div>
  );
};

export default About;
