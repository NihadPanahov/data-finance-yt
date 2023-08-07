import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Want tips & to optimize your flow?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="mr-[13px] p-3 w-full rounded-md text-black"
              type="email"
              placeholder="Enter Email"
            />
            <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:scale-[120%] hover:bg-[#19ffb6]  duration-300">
              Notify Me
            </button>
          </div>
          <p>
            We care bout the protection of your data. Read our{" "}
            <a className="text-[#00df9a] underline cursor-pointer hover:text-[#1a7558]">
              Privacy Policy.
            </a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
