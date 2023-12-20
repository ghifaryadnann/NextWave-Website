import React from "react";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import Project from "./component/Project";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Maps from "./layout/Maps";

const App = () => {
  return (
    <>
      <Navbar />

      <main >
        <div id="home">
          <Home />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="project">
          <Project />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <div>
          <Maps />
        </div>
      </main>

      <Footer />
      <p className="text-center text-sm bg-slate-600">
        Created by Ghifary Adnan
      </p>
    </>
  );
};

export default App;
