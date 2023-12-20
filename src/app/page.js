import React, { Fragment } from "react";
import About from "@/components/About";
import Product from "@/components/Product";

const page = () => {
  return (
    <Fragment>
      <div className="flex text-center w-full justify-evenly items-center h-full flex-col ">
        <div>
          <h1 className="font-bold  text-4xl tracking-widest mb-8 md:text-3xl">
            PUT YOUR TITLE HERE #1
          </h1>
          <p className="font-bold text-8xl tracking-widest md:text-5xl ">
            EMAIL NEWSLETTER
          </p>
        </div>
        <p className="bg-[#fff] p-1 px-10 text-black text-xl font-bold tracking-widest">
          MORE INFO
        </p>
      </div>
      <About />
      <Product />
    </Fragment>
  );
};

export default page;
