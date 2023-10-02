console.log("Hi, I have been injected whoopie!!!");

var recorder = null;
function onAccessApproved(stream) {
  recorder = new MediaRecorder(stream);

  recorder.start();

  recorder.onstop = function () {
    stream.getTracks().forEach(function (track) {
      if (track.readyState === "live") {
        track.stop();
      }
    });
  };

  //////////////////////////////////
  // Recording video
  //   recorder.ondataavailable = function (event) {
  //     let recordedBlob = event.data;
  //     let url = URL.createObjectURL(recordedBlob);

  //     let a = document.createElement("a");

  //     a.style.display = "none";
  //     a.href = url;
  //     a.download = "screen-recording.webm";

  //     document.body.appendChild(a);
  //     a.click();

  //     document.body.removeChild(a);

  //     URL.revokeObjectURL(url);
  //   };
  // }

  //////////////////////////////

  // Sending Video to end point
  recorder.ondataavailable = function (event) {
    let recordedBlob = event.data;

    // Creating a FormData object to send the recordedBlob as a file
    let formData = new FormData();
    formData.append("video", recordedBlob, "screen-recording.webm");

    // var formData = new FormData();
    // formData.append("blob", new Blob([recordedBlob], { type: "video/webm" }));
    // formData.append("videoId", "23JIGstt");

    // Defining the URL of your endpoint
    let endpointUrl =
      "https://amara-hngtask-chrome-extension.onrender.com/api/upload";

    // Make the POST request to the endpoint
    fetch(endpointUrl, {
      method: "POST",
      // mode: "no-cors",
      // headers: {
      //   "Content-Type": "multipart/form-data",
      // },
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text();

        // You can handle the response here if needed
      })
      .then((data) => {
        console.log("Video uploaded successfully:", data);
        console.log(data.public_id);

        // Redirect the user to a website to view the video
        let videoViewUrl =
          "https://hngx-frontendtrack-stagefivetask.vercel.app/video/sample"; //
        window.open(videoViewUrl, "_blank");
      })
      .catch((error) => {
        console.error("Error uploading video:", error);
      });
  };
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "request_recording") {
    console.log("requesting recording");

    sendResponse(`processed: ${message.action}`);

    const audioPreference = message.audioPreference;
    const videoPreference = message.videoPreference;

    const mediaConstraints = {
      audio: audioPreference,
      video: videoPreference
        ? {
            width: 9999999999,
            height: 9999999999,
          }
        : false,
    };

    navigator.mediaDevices
      .getDisplayMedia(mediaConstraints)
      .then((stream) => {
        onAccessApproved(stream);
      })
      .catch((error) => {
        alert("Media Access Error: Enable Video capture.");
        console.error("Error accessing media devices:", error);
      });
  }

  if (message.action === "stopvideo") {
    console.log("stopping video");
    sendResponse(`processed: ${message.action}`);
    if (!recorder) return console.log("no recorder");

    recorder.stop();
  }
});
