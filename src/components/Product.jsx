import React, { Fragment } from "react";
import Image from "next/image";
import product_image from '../../public/asset/Image/banner.jpg'

const Product = () => {
  return (
    <Fragment>
      <div className="bg-[#85766f]">
        <div className=" text-black text-center flex flex-col gap-5  p-8">
          <p className="text-2xl text-gray-400 font-medium">CATEGORY NAME 1</p>
          <h1 className="font-bold text-6xl tracking-widest">YOUR TITLE #1</h1>
          <p className=" text-3xl tracking-[13px] font-semibold">
            PUT A SUBTITLE HERE
          </p>
          <div className="text-center flex justify-center">
            <p className=" w-[50%] text-xl xl:w-[100%] ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
        <div className="flex flex-row  justify-evenly w-full h-full pb-[100px] xl:flex-col gap-4 items-center ">
            <div className="w-[350px] object-cover xl:w-[500px] md:w-[100%]">
                <Image src={product_image} alt="product_image" className="w-full" />
            </div>
            <div className="w-[350px] object-cover xl:w-[500px] md:w-[100%]">
                <Image src={product_image} alt="product_image"  />
            </div>
            <div className="w-[350px] object-cover xl:w-[500px] md:w-[100%]">
                <Image src={product_image} alt="product_image"  />
            </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Product;
