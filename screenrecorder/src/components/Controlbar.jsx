import React from "react";
import "../components/controlbar.css";

const Controlbar = () => {
  return (
    <div className="flex flex-col">
      <div className="controlbar ">
        <div>
          <img className="logo" src="/images/logo.png" alt="logo" />
        </div>
        <div className="buttons">
          <img className="icon" src="/images/setting-2.png" alt="" />
          <img className="icon" src="/images/close-circle.png" alt="" />
        </div>
      </div>
      <div className="span">
        This extension helps you record and share help videos with ease
      </div>
    </div>
  );
};

export default Controlbar;
