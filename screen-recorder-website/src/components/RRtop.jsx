import React, { useState } from "react";
import {
  AiFillPauseCircle,
  AiFillPlayCircle,
  AiOutlineSetting,
  AiOutlineSound,
} from "react-icons/ai";
import { BsFillVolumeDownFill, BsFillVolumeMuteFill } from "react-icons/bs";

import ReactPlayer from "react-player/lazy";

const RRtop = () => {
  const [playing, setPlaying] = useState(false);
  const [mute, setMute] = useState(false);

  const togglePlay = () => {
    setPlaying(!playing);
  };

  const togglemute = () => {
    setMute(!mute);
  };
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
            for="first_name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
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
    <div className="flex justify-center gap-[20rem] items-center px-28 py-24">
      <LeftSection />
      {/* <RightSection /> */}
      {/* Right section */}
      <div>
        {/* Screen */}
        <div className="border-2 rounded-md h-[410px] border-indigo-950">
          <div className="">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=-SKSihRjKQA"
              width={400}
              height={350}
              volume={1}
              muted={mute}
              playing={playing}
              className=""
            />
          </div>
          {/* screen controls */}
          <div className="flex items-center justify-between pt-4 px-5 text-gray-400">
            {/* Duration */}
            <div>Duration</div>
            {/* Controls */}
            <div className="flex items-center  gap-8">
              {playing ? (
                <button className="items-center text-center flex flex-col">
                  <AiFillPauseCircle size={24} onClick={togglePlay} />
                </button>
              ) : (
                <button className="items-center text-center flex flex-col">
                  <AiFillPlayCircle size={24} onClick={togglePlay} />
                </button>
              )}
              <button className="items-center text-center flex flex-col">
                <AiOutlineSetting size={24} />
              </button>
              {!mute ? (
                <button className="items-center text-center flex flex-col">
                  <BsFillVolumeDownFill size={32} onClick={togglemute} />
                </button>
              ) : (
                <button className="items-center text-center flex flex-col ">
                  <BsFillVolumeMuteFill size={32} onClick={togglemute} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RRtop;
