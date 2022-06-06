import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeProvider";

function App() {
  const { theme } = useContext(ThemeContext);
  let bg;
  if (theme) {
    bg = "#fff";
  }
  return (
    <div style={{ background: bg }} className="bg-[#0a192f]">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
