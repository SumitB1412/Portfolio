import React, { useContext } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Dp from "../assets/dp.jpg";
import { Link } from "react-scroll";
import { ThemeContext } from "../contexts/ThemeProvider";

const Home = () => {
  const { theme } = useContext(ThemeContext);
  let bg;
  let text;

  if (theme) {
    bg = "#fff";
    text = "#000";
  }
  return (
    <div
      style={{ background: bg, color: text }}
      name="home"
      className="w-full h-screen bg-[#0a192f]"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Sumit Beniwal
        </h1>
        <h2 className="text-3xl sm:text-6xl font-bold text-[#8892b0]">
          I'm a Full Stack Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          Self-driven, quick starter, passionate programmer with a curious mind
          who enjoys solving problems and working on new projects.
        </p>
        <div>
          <button style={{ background: bg, color: text }}  className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            <Link to="work" smooth={true} duration={500}>
              View Work
            </Link>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
      <img
        className="float-none w-60 -mt-40 m-auto  sm:float-right sm:-mt-96 sm:mr-10"
        src={Dp}
        alt=""
        width={"250px"}
        style={{ borderRadius: "50%" }}
      />
    </div>
  );
};

export default Home;
