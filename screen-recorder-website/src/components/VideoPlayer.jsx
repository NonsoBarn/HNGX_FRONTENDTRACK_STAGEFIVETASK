import React, { useEffect, useState } from "react";
import {
  AiFillPauseCircle,
  AiFillPlayCircle,
  AiOutlineSetting,
} from "react-icons/ai";
import { BsFillVolumeDownFill, BsFillVolumeMuteFill } from "react-icons/bs";

import ReactPlayer from "react-player/lazy";

const VideoPlayer = ({ videoDetails }) => {
  const [playing, setPlaying] = useState(false);
  const [mute, setMute] = useState(false);

  const togglePlay = () => {
    setPlaying(!playing);
  };

  const togglemute = () => {
    setMute(!mute);
  };

  const [videoUrls, setVideoUrls] = useState({
    webm: "",
    mp4: "",
    ogv: "",
  });

  useEffect(() => {
    // Create a new DOMParser
    const parser = new DOMParser();

    // Parse the video HTML string into a DOM document
    const doc = parser.parseFromString(videoDetails, "text/html");

    // Find the video element within the parsed document
    const videoElement = doc.querySelector("video");

    if (videoElement) {
      // Find the source elements within the video element
      const sourceElements = videoElement.querySelectorAll("source");

      // Extract and set the video URLs from the source elements
      const urls = {};
      sourceElements.forEach((source) => {
        const type = source.getAttribute("type");
        const src = source.getAttribute("src");
        if (type && src) {
          urls[type.split("/")[1]] = src;
        }
      });

      setVideoUrls(urls);
    }
  }, [videoDetails]);
  return (
    <div>
      {/* Render the video HTML */}
      <div dangerouslySetInnerHTML={{ __html: videoDetails }}></div>

      <div>
        <h2>Extracted Video URLs:</h2>
        <ul>
          <li>WebM: {videoUrls.webm}</li>
          <li>MP4: {videoUrls.mp4}</li>
          <li>Ogg: {videoUrls.ogv}</li>
        </ul>
      </div>

      {/* Screen */}
      <div className="border-2 rounded-md h-[410px] border-indigo-950">
        <div className="">
          <ReactPlayer
            url="https://res.cloudinary.com/amarachi-2812/video/upload/l_subtitles:screen-recording_kr8i1h.transcript/fl_layer_apply/screen-recording_kr8i1h.mp4"
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
  );
};

export default VideoPlayer;
