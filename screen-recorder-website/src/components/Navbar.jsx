import React from "react";
import { GrMenu } from "react-icons/gr";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center lg:px-24 px-8 py-5 font-semibold shadow-md ">
      <div>
        <img
          className="w-[110px] h-[45px] md:w-[157px] md:h-[60px]"
          src="/images/logo.png"
          alt="logo"
        />
      </div>

      <div className="hidden lg:flex justify-center items-center gap-6 text-[14px] md:text-[18px]">
        <p>Features</p>
        <p>How it works</p>
      </div>

      <div className="hidden lg:flex text-[20px]">
        <p className="text-indigo-950 pb-1 font-semibold">Get Started</p>
      </div>

      <div className="lg:hidden text-indigo-950 cursor-pointer">
        <GrMenu size={28} />
      </div>
    </nav>
  );
};

export default Navbar;
