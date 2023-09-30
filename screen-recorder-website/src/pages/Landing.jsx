import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Howitworks from "../components/Howitworks";
import Footer from "../components/Footer";
import { RecordingReady } from "./RecordingReady";

const Landing = () => {
  return (
    <>
      <Navbar />
      {/* <Hero />
      <Features />
      <Howitworks /> */}
      <RecordingReady />
      <Footer />
    </>
  );
};

export default Landing;
