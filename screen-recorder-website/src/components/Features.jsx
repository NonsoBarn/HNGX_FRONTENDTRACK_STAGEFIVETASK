import React from "react";

const Features = () => {
  return (
    <section
      id="features"
      className=" pt-28 pb-10 bg-gray-50 flex flex-col justify-center items-center mt-40 px-10 lg:px-0"
    >
      <div className=" flex flex-col text-center lg:mb-10 mb-4">
        <h2 className="text-[30px] font-bold text-indigo-950">Features</h2>
        <p className="tracking-wider">Key Highlights of Our Extension</p>
      </div>

      <div className="flex flex-col lg:flex-row mt-10">
        {/* Text list */}
        <div className="lg:mr-[240px] mt-16 lg:mt-0">
          {/* 1 */}
          <div className="">
            <h3 className="flex text-[20px] font-bold text-indigo-950">
              <span>
                <img
                  className="bg-indigo-950 p-1 rounded-full w-[30px] mr-3 mt-1"
                  src="images/circle.png"
                  alt=""
                />
              </span>
              Simple Screen Recording
            </h3>
            <p className="ml-10 text-start text-[16px] lg:text-[18px] tracking-wider">
              Effortless screen recording for everyone. Record <br /> with ease,
              no tech experience required.
            </p>
          </div>
          {/* 2 */}
          <div className="mt-10">
            <h3 className="flex text-[20px] font-bold text-indigo-950">
              <span>
                <img
                  className="bg-indigo-950 p-1 rounded-full w-[30px] mr-3 mt-1"
                  src="images/send.png"
                  alt=""
                />
              </span>
              Easy-to-Share URL
            </h3>
            <p className="ml-10 text-start text-[16px] lg:text-[18px] tracking-wider">
              Share your recording instantly wit a single link <br /> No
              attachments, no download.
            </p>
          </div>
          {/* 3 */}
          <div className="mt-10">
            <h3 className="flex text-[20px] font-bold text-indigo-950">
              <span>
                <img
                  className="bg-indigo-950 p-1 rounded-full w-[30px] mr-3 mt-1"
                  src="images/square.png"
                  alt=""
                />
              </span>
              Simple Screen Recording
            </h3>
            <p className="ml-10 text-start text-[16px] lg:text-[18px] tracking-wider">
              Access and review your past content effortlessly <br /> Your
              recording always at your finger tips.
            </p>
          </div>
        </div>

        {/* feature Image */}
        <div className="lg:mr-5 order-first lg:order-last">
          <img className="w-[550px]" src="/images/features.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Features;
