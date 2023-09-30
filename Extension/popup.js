document.addEventListener("DOMContentLoaded", () => {
  // GET THE SELECTORS OF THE BUTTONS
  const startVideoButton = document.querySelector("button#start_video");
  const stopVideoButton = document.querySelector("button#stop_video");

  const audioCheckbox = document.getElementById("audioCheckbox");
  const videoCheckbox = document.getElementById("videoCheckbox");

  // adding event listeners

  startVideoButton.addEventListener("click", () => {
    const audioPreference = audioCheckbox.checked;
    const videoPreference = videoCheckbox.checked;

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        {
          action: "request_recording",
          audioPreference: audioPreference,
          videoPreference: videoPreference,
        },
        function (response) {
          if (!chrome.runtime.lastError) {
            console.log(response);
          } else {
            console.log(chrome.runtime.lastError, "error line 14");
          }
        }
      );
    });
  });

  //   stopVideoButton.addEventListener("click", () => {
  //     chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  //       chrome.tabs.sendMessage(
  //         tabs[0].id,
  //         { action: "stopvideo" },
  //         function (response) {
  //           if (!chrome.runtime.lastError) {
  //             console.log(response);
  //           } else {
  //             console.log(chrome.runtime.lastError, "error line 27");
  //           }
  //         }
  //       );
  //     });
  //   });
});
