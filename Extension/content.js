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

  recorder.ondataavailable = function (event) {
    let recordedBlob = event.data;
    let url = URL.createObjectURL(recordedBlob);

    let a = document.createElement("a");

    a.style.display = "none";
    a.href = url;
    a.download = "screen-recording.webm";

    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);

    URL.revokeObjectURL(url);
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
