import React from "react";

const Hero = () => {
  return (
    <div className=" relative flex justify-center bg-gray-50 items-center flex-col lg:flex-row gap-12 lg:gap-20 lg:pt-24 pt-16  ">
      {/* Hero Text Section */}
      <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-start px-10 lg:px-0">
        <h2 className="text-black text-[50px] lg:text-[60px] leading-tight lg:leading-[55px] font-bold">
          Show Them <br /> Don't Just Tell
        </h2>
        <p className="text-[16px] lg:text-[20px] leading-snug pt-3 mb-8">
          Help your friends and loved ones by creating and sending <br /> videos
          on how to get things done on the website
        </p>
        <button className="bg-indigo-950 text-white px-3 py-3 rounded-md">
          Install HelpMeOut
        </button>
      </div>

      {/* Hero Image Section */}
      <div className="flex gap-5 px-10 lg-px-0 order-first lg:order-last">
        <div className="flex flex-col gap-5">
          <img src="/images/frame1a.png" alt="Woman with a laptop" />
          <img
            className="z-10"
            src="/images/frame1b.png"
            alt="man, child & laptop"
          />
          <img
            src="/images/grid2.png"
            alt="grid design"
            className="absolute bottom-[-90px] right-[500px] hidden lg:block "
          />
        </div>
        <div className="flex">
          <img
            className="z-10"
            src="/images/frame2.png"
            alt="woman with mobile phone"
          />
          <img
            src="/images/grid1.png"
            alt="grid design"
            className="absolute top-16 right-[85px]  hidden lg:block"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
