import React from "react";

const Howitworks = () => {
  const stepsData = [
    {
      id: 1,
      title: "Record Screen",
      detail:
        "Click the 'Start Recording' button in our extention. choose which part of your screen to capture and who you want to send to it.",
      img: "/images/HIW.png",
    },
    {
      id: 2,
      title: "Share Your Recording",
      detail:
        "We generate a shareable link for your video. Simply send it to your audience via email or copy the link to send via any platform",
      img: "/images/HIW.png",
    },
    {
      id: 3,
      title: "Learn Effortlessly",
      detail:
        "Recipients can access your video effortlessly through the provided link, with our user-friendly interface suitable for  everyone",
      img: "/images/HIW.png",
    },
  ];
  return (
    <div id="hiw" className="pt-28 pb-20 bg-gray-50">
      <div className="lg:mb-20 mb-4 flex flex-col text-center">
        <h2 className="text-[30px] font-bold text-indigo-950">How It works</h2>
      </div>

      <div className="flex flex-col  gap-y-14 lg:grid lg:grid-cols-3 lg:px-14">
        {stepsData.map((step) => (
          <div key={step.id} className="px-20">
            <span className="bg-indigo-950 text-white px-[18px] py-[12px]  rounded-full">
              {step.id}
            </span>
            <h3 className="mt-5 text-indigo-950 font-bold text-xl">
              {step.title}
            </h3>
            <p className="mt-3 px-1 lg:text-[18px]">{step.detail}</p>
            <img className="w-[358px] mt-5" src={step.img} alt={step.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Howitworks;
