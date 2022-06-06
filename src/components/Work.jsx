import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeProvider";

const Work = () => {
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
      name="work"
      className="w-full md:h-screen text-gray-300 bg-[#0a192f] pt-80"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full ">
        <div className="pb-8 ">
          <p
            style={{ background: bg, color: text }}
            className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600"
          >
            Work
          </p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4">
          {/* Grid Item */}
          <div className="shadow-lg shadow-[#040c16] group container rounded-md items-center mx-auto">
            <img
              style={{ width: "500px", height: "250px" }}
              src="https://camo.githubusercontent.com/18cf606bf5ec851938e844ecadab28521bdabfb7d7a90f1b899a6379fb36b681/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f313430302f312a71704c7070346e694a4231657357795f6c3876506f512e6a706567"
              alt=""
            />
            <div className="bg-white text-black rounded-b-md">
              <h2 className="font-semibold text-3xl pt-2">Zappos.com</h2>
              <p className="mt-4">
                Zappos.com is an American online shoe and clothing retailer
                based in Las Vegas
              </p>
              <p className="mt-4">
                A collaborative project, built in 5 days by a team of 6 members.
              </p>
              <div className="pt-4 text-center">
                <a
                  target={"_blank"}
                  href="https://dynamic-strudel-3a04dd.netlify.app/"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-blue-600 text-white font-bold text-lg hover:bg-white hover:text-gray-700">
                    Demo
                  </button>
                </a>
                <a
                  target={"_blank"}
                  rel="noreferrer"
                  href="https://github.com/SumitB1412/Zappos"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-blue-600 text-white font-bold text-lg hover:bg-white hover:text-gray-700">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="shadow-lg shadow-[#040c16] group container rounded-md items-center mx-auto">
            <img
              style={{ width: "500px", height: "250px" }}
              src="https://camo.githubusercontent.com/39be717129a5d01f9952183dbf354c77ba597dd22dbc2b463a456c78c34222c1/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f3730302f312a68557843333341626e526e6d4d5159576b7674504d672e706e67"
              alt=""
            />
            <div className="bg-white text-black rounded-b-md">
              <h2 className="font-semibold text-3xl pt-2">Overstock.com</h2>
              <p className="mt-4">
                Overstock.com Inc. is an online retailer and technology company
                offering customers a range of brands for the home including
                furniture, home decor, area rugs, bedding and bath
              </p>
              <p className="mt-4">
                A collaborative project, built in 5 days by a team of 6 members.
              </p>
              <div className="pt-4 text-center">
                <a
                  target={"_blank"}
                  rel="noreferrer"
                  href="http://overstock-clone-two.vercel.app/"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-blue-600 text-white font-bold text-lg hover:bg-white hover:text-gray-700">
                    Demo
                  </button>
                </a>
                <a
                  target={"_blank"}
                  rel="noreferrer"
                  href="https://github.com/SumitB1412/overstock-clone"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-blue-600 text-white font-bold text-lg hover:bg-white hover:text-gray-700">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div className="shadow-lg shadow-[#040c16] group container rounded-md items-center mx-auto">
            <img
              style={{ width: "500px", height: "250px" }}
              src="https://github.com/SumitB1412/group-project-masai/raw/main/calendar.jpg"
              alt=""
            />
            <div className="bg-white text-black rounded-b-md">
              <h2 className="font-semibold text-3xl pt-2">Coschedule.com</h2>
              <p className="mt-4">
                CoSchedule is an all-in-one platform for planning, organizing,
                and executing all things content marketing.
              </p>
              <p className="mt-4">
                A collaborative project, built in 5 days by a team of 6 members.
              </p>
              <div className="pt-4 text-center">
                <a
                  target={"_blank"}
                  rel="noreferrer"
                  href="https://bhupesh1114.github.io/group-project-masai/"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-blue-600 text-white font-bold text-lg hover:bg-white hover:text-gray-700">
                    Demo
                  </button>
                </a>
                <a
                  target={"_blank"}
                  rel="noreferrer"
                  href="https://github.com/SumitB1412/group-project-masai"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-blue-600 text-white font-bold text-lg hover:bg-white hover:text-gray-700">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
