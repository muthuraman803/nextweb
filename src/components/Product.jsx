import React, { Fragment } from "react";
import Image from "next/image";
import product_image from "../../public/asset/Image/banner.jpg";

const Product = () => {
  return (
    <Fragment>
      <div className="bg-[#505050]">
        <div className=" text-center flex flex-col gap-5  p-8">
          <p className="text-2xl text-gray-400 font-medium">CATEGORY NAME 1</p>
          <h1 className="font-bold text-6xl tracking-widest">YOUR TITLE #1</h1>
          <p className=" text-white text-3xl tracking-[13px] font-semibold">
            PUT A SUBTITLE HERE
          </p>
          <div className="text-center flex justify-center">
            <p className=" text-gray-300 w-[50%] text-xl xl:w-[100%] ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry.
            </p>
          </div>
        </div>
        <div className="flex flex-row  justify-evenly w-full h-full pb-[100px] xl:flex-col gap-4 items-center ">
          <div className="w-[350px] object-cover xl:w-[500px] md:w-[100%] pt-[40px]">
            <Image src={product_image} alt="product_image" className="w-full" />
            <div className=" flex justify-center pt-[40px]">
              <p className=" font-medium text-[15px] text-center w-[75%]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.printing and typesetting industry.
              </p>
            </div>
          </div>
          <div className="w-[350px] object-cover xl:w-[500px] md:w-[100%] pt-[40px]">
            <Image src={product_image} alt="product_image" />
            <div className=" flex justify-center pt-[40px]">
              <p className=" font-medium text-[15px] text-center w-[75%]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.printing and typesetting industry.
              </p>
            </div>
          </div>
          <div className="w-[350px] object-cover xl:w-[500px] md:w-[100%] pt-[40px]">
            <Image src={product_image} alt="product_image" />
            <div className=" flex justify-center pt-[40px]">
              <p className=" font-medium text-[15px] text-center w-[75%]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.printing and typesetting industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Product;
