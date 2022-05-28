import React, { useContext } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { ThemeContext } from "../contexts/ThemeProvider";

const Contact = () => {
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
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      {/* <form method='POST' action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c" className='flex flex-col max-w-[600px] w-full'> */}
      <div className="pb-8">
        <p
          style={{ background: bg, color: text }}
          className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300"
        >
          Contact
        </p>
      </div>
      <div style={{ marginTop: "300px", marginLeft: "-130px" }}>
        <div style={{ margin: "20px 0px" }}>
          <a
            style={{ background: bg, color: text }}
            className="flex  items-center w-full text-gray-300"
            href="https://www.linkedin.com/in/sumit-beniwal-987595232/"
          >
            <FaLinkedin style={{ marginRight: "10px" }} size={30} />{" "}
            https://www.linkedin.com/in/sumit-beniwal-987595232/
          </a>
        </div>
        <div style={{ margin: "20px 0px" }}>
          <a
            style={{ background: bg, color: text }}
            className="flex  items-center w-full text-gray-300"
            href="https://github.com/SumitB1412"
          >
            <FaGithub style={{ marginRight: "10px" }} size={30} />{" "}
            https://github.com/SumitB1412
          </a>
        </div>
        <div style={{ margin: "20px 0px" }}>
          <a
            style={{ background: bg, color: text }}
            className="flex  items-center w-full text-gray-300"
            href="mailto:beniwalsumit1412@gmail.com"
          >
            <HiOutlineMail style={{ marginRight: "10px" }} size={32} />{" "}
            beniwalsumit1412@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
