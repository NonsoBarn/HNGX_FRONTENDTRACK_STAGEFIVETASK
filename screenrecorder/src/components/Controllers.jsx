import React, { useState } from "react";
import RecordRTC from "recordrtc";

import "../components/controlers.css";
const Controllers = () => {
  const [videoEnabled, setVideoEnabled] = useState(true);
  const [audioEnabled, setAudioEnabled] = useState(true);

  ////////////
  const [mediaStream, setMediaStream] = useState(null);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const [recording, setRecording] = useState(false);

  const startRecording = async () => {
    try {
      const constraints = {
        video: videoEnabled,
        audio: audioEnabled,
      };

      const stream = await navigator.mediaDevices.getDisplayMedia(constraints);

      // Create a MediaRecorder
      const recorder = new MediaRecorder(stream);
      setMediaRecorder(recorder);

      ////////////////////
      //   // Initialize an array to store recorded data
      //   let recordedChunks = [];

      //   // Handle data available
      //   mediaRecorder.ondataavailable = (event) => {
      //     // Handle the recorded data, e.g., save it to a file

      //     ///////////////////////////
      //     if (event.data.size > 0) {
      //       recordedChunks.push(event.data);
      //     }
      //   };

      //   //////////////////
      //   // When the user stops recording (e.g., by clicking a "Stop Recording" button):
      //   mediaRecorder.onstop = () => {
      //     // Combine the recorded data into a single Blob
      //     const recordedBlob = new Blob(recordedChunks, { type: "video/webm" });

      //     // Reset the recordedChunks array
      //     recordedChunks = [];

      //     // Create a URL for the Blob
      //     const videoUrl = URL.createObjectURL(recordedBlob);

      //     // Create a download link for the user
      //     const a = document.createElement("a");
      //     a.href = videoUrl;
      //     a.download = "recorded-video.webm"; // Set the desired filename
      //     a.textContent = "Download the recorded video";

      //     // Append the link to the DOM or trigger a click event to initiate the download
      //     document.body.appendChild(a);
      //     // Optionally, you can trigger a click event to start the download immediately
      //     // a.click();

      //     // Clean up the URL object when no longer needed
      //     URL.revokeObjectURL(videoUrl);
      //   };

      const chunks = [];

      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunks.push(event.data);
        }
      };

      recorder.onstop = () => {
        const recordedBlob = new Blob(chunks, { type: "video/mp4" });
        const videoUrl = URL.createObjectURL(recordedBlob);

        const a = document.createElement("a");
        a.href = videoUrl;
        a.download = "recorded-video.webm";
        a.textContent = "Download the recorded video";
        document.body.appendChild(a);

        URL.revokeObjectURL(videoUrl);
        //   var blob = new Blob(recordedChunks, {
        //     type: "video/webm",
        //   });
        //   var url = URL.createObjectURL(blob);
        //   var a = document.createElement("a");
        //   document.body.appendChild(a);
        //   a.style = "display: none";
        //   a.href = url;
        //   a.download = "test.webm";
        //   a.click();
        //   window.URL.revokeObjectURL(url);
      };

      // Start recording
      recorder.start();
      setRecording(true);
    } catch (error) {
      console.error("Error capturing the screen: ", error);
    }
  };

  ////////////////////////////////////
  ///////////////////////////////////////
  ////////////////////////////////////////
  // const [recording, setRecording] = useState(null);

  // const startRecording = async () => {
  //   const stream = await navigator.mediaDevices.getDisplayMedia({
  //     video: true,
  //   });
  //   const recorder = new RecordRTC(stream, {
  //     type: "video",
  //     mimeType: "video/webm",
  //   });
  //   recorder.startRecording();
  //   setRecording(recorder);
  // };

  // const stopRecording = () => {
  //   if (recording) {
  //     recording.stopRecording(() => {
  //       const blob = recording.getBlob();
  //       const url = URL.createObjectURL(blob);
  //       // Handle the recorded video URL as needed (e.g., save or display it).
  //     });
  //   }
  // };

  return (
    <div className="controller">
      {/* screen option */}
      <div className="screenoption">
        <div className="icons">
          {/* <img src="/images/monitor.svg" alt="" /> */}
          <span className="icon">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.5865 2.66675H23.3998C28.1465 2.66675 29.3332 3.85341 29.3332 8.58675V17.0267C29.3332 21.7734 28.1465 22.9467 23.4132 22.9467H8.5865C3.85317 22.9601 2.6665 21.7734 2.6665 17.0401V8.58675C2.6665 3.85341 3.85317 2.66675 8.5865 2.66675Z"
                stroke="#928FAB"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16 22.96V29.3333"
                stroke="#928FAB"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2.6665 17.3333H29.3332"
                stroke="#928FAB"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10 29.3333H22"
                stroke="#928FAB"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <span>Full screen</span>
        </div>

        <div className="icons">
          {/* <img src="/images/copy.svg" alt="" /> */}
          <span className="icon">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.3332 17.2001V22.8001C21.3332 27.4667 19.4665 29.3334 14.7998 29.3334H9.19984C4.53317 29.3334 2.6665 27.4667 2.6665 22.8001V17.2001C2.6665 12.5334 4.53317 10.6667 9.19984 10.6667H14.7998C19.4665 10.6667 21.3332 12.5334 21.3332 17.2001Z"
                stroke="#120B48"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M29.3332 9.20008V14.8001C29.3332 19.4667 27.4665 21.3334 22.7998 21.3334H21.3332V17.2001C21.3332 12.5334 19.4665 10.6667 14.7998 10.6667H10.6665V9.20008C10.6665 4.53341 12.5332 2.66675 17.1998 2.66675H22.7998C27.4665 2.66675 29.3332 4.53341 29.3332 9.20008Z"
                stroke="#120B48"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <span>Current Tab</span>
        </div>
      </div>

      {/* Camera & Audio Toggle
       */}
      <div>
        {/* Camera */}
        <div className=" camera">
          <div className="sub">
            <img src="/images/video-camera.svg" alt="" />
            <p>Camera</p>
          </div>
          <div>
            <label class="switch">
              <input
                type="checkbox"
                checked={videoEnabled}
                onChange={() => setVideoEnabled(!videoEnabled)}
              />{" "}
              <div></div>
            </label>
          </div>
        </div>

        {/* Audio */}
        <div className=" camera audio">
          <div className="sub">
            <img src="/images/microphone.svg" alt="" />
            <p>Audio</p>
          </div>
          <div>
            <label class="switch">
              <input
                type="checkbox"
                checked={audioEnabled}
                onChange={() => setAudioEnabled(!audioEnabled)}
              />{" "}
              <div></div>
            </label>
          </div>
        </div>
      </div>
      {/* Button */}
      <div className="button">
        <button onClick={startRecording}>Start Recording</button>
      </div>
    </div>
  );
};

export default Controllers;
