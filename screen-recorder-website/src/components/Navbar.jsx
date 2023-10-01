import React from "react";
import { Link } from "react-router-dom";
import { GrMenu } from "react-icons/gr";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center lg:px-24 px-8 py-5 font-semibold shadow-md ">
      <Link to="/">
        <img
          className="w-[110px] h-[45px] md:w-[157px] md:h-[60px]"
          src="/images/logo.png"
          alt="logo"
        />
      </Link>

      <div className="hidden lg:flex justify-center items-center gap-6 text-[14px] md:text-[18px]">
        <a href="#features">Features</a>
        <a href="#hiw">How it works</a>
      </div>

      <Link to="/login" className="hidden lg:flex text-[20px]">
        <p className="text-indigo-950 pb-1 font-semibold">Get Started</p>
      </Link>

      <div className="lg:hidden text-indigo-950 cursor-pointer">
        <GrMenu size={28} />
      </div>
    </nav>
  );
};

export default Navbar;
