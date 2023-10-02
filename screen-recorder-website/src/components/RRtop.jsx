import React from "react";

import VideoPlayer from "./VideoPlayer";

const RRtop = ({ videoDetails }) => {
  /////////////////////////////////////////////
  const LeftSection = () => {
    return (
      <div className="flex flex-col text-start">
        <h3 className=" text-3xl font-bold">Your video is Ready!</h3>

        {/* Editable video link */}
        <div className="pt-10">
          <p className="text-sm font-semibold">Name</p>
          <p className="text-xl font-semibold text-indigo-900">
            Untitles_video_20232509
          </p>
        </div>

        {/* Email input */}
        <div className="relative pt-10">
          <input
            type="text"
            id="first_name"
            className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="enter email of receiver"
          />
          <button className="text-sm text-white bg-indigo-950 px-2 py-1 rounded-md absolute top-12 right-3">
            Send
          </button>
        </div>

        {/* Video URL */}
        <div className="relative pt-10">
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Video Url
          </label>
          <input
            type="text"
            id="first_name"
            className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Video link will appear here"
          />
          <button className="text-sm border-2 border-indigo-950 bg-gray-100 text-indigo-950 px-2 py-1 rounded-md absolute top-[4.7rem] right-2">
            Copy
          </button>
        </div>

        {/* share */}
        <div className="flex flex-col text-start pt-10">
          <p className="font-semibold pb-3">Share your video</p>
          <div className="flex gap-3">
            <button className="flex gap-2 border-2 p-1.5 rounded-md ">
              {" "}
              <span>
                <img src="/images/fb.png" alt="" />
              </span>
              Facebook
            </button>
            <button className="flex gap-2 border-3 p-1.5 rounded-md  border-2">
              {" "}
              <span>
                <img src="/images/wa.png" alt="" />
              </span>
              WhatsApp
            </button>
            <button className="flex gap-2 border-2 p-1.5 rounded-md">
              {" "}
              <span>
                <img src="/images/tl.png" alt="" />
              </span>
              Telegram
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center gap-[8rem] lg:gap-[20rem] items-center px-28 py-24">
      <LeftSection />

      {/* Right section */}
      <div className="order-first lg:order-last">
        <VideoPlayer videoDetails={videoDetails} />
      </div>
    </div>
  );
};

export default RRtop;
