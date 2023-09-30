import React from "react";

const Footer = () => {
  return (
    <div className="bg-indigo-950 lg:grid lg:grid-cols-4 py-20 px-20 flex flex-col gap-y-8 justify-center items-center text-center lg:items-start lg:text-start">
      <div>
        <img src="/images/logo2.png" alt="" />
      </div>
      {/* home */}
      <div>
        <p className="font-bold text-white "> Menu</p>
        <ul className="text-white">
          <li className="pt-2 cursor-pointer">Home</li>
          <li className="pt-2 cursor-pointer">Converter</li>
          <li className="pt-2 cursor-pointer">How it works</li>
        </ul>
      </div>

      {/* About us */}
      <div>
        <p className="font-bold text-white ">About us</p>
        <ul className="text-white">
          <li className="pt-2 cursor-pointer">About</li>
          <li className="pt-2 cursor-pointer">Contact us</li>
          <li className="pt-2 cursor-pointer">Privacy policy</li>
        </ul>
      </div>

      {/* Screen Record */}
      <div>
        <p className="font-bold text-white ">Screen Record</p>
        <ul className="text-white">
          <li className="pt-2 cursor-pointer">Browser window</li>
          <li className="pt-2 cursor-pointer">Desktop</li>
          <li className="pt-2 cursor-pointer">Application</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
