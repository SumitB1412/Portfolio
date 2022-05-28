import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeProvider";

const About = () => {
  const { theme } = useContext(ThemeContext);
  let bg;
  let text;

  if (theme) {
    bg = "#fff";
    text = "#000";
  }
  return (
    <div style={{ background: bg, color: text }} name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Sumit, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              Enthusiastic and aspiring full-stack developer. Open minded and
              problem solver, with a keen interest in emerging tech and building
              creativity. Looking forward to a challenging work environment for
              thinking outside the box and to grow as a person and a developer
              as well.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
