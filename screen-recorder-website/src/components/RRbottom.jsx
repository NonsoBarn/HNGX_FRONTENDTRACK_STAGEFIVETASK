import React from "react";

const RRbottom = () => {
  return (
    <div className="py-20 bg-gray-100">
      <p className="text-xl pb-5">
        To ensure the availability and privacy of your video, <br /> we
        recommend saving it to your account
      </p>
      <button className="bg-indigo-950 text-white px-4 py-2 rounded-md">
        Share Video
      </button>
      <p className=" pt-5 text-gray-300">
        Don't have an account?{" "}
        <span className="text-indigo-950 underline">Create account</span>
      </p>
    </div>
  );
};

export default RRbottom;
