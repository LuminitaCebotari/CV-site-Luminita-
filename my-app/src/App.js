import React from 'react';
import "./App.css";
import NavBar from "./pages/Header/header";
import Home from "./pages/home/Home";
import AboutMe from "./pages/AboutMe/AboutMe";
import Education from "./pages/Education/Education"; 
import WorkExperience from"./pages/WorkExperience/WorkExperience";
import ContactMe from "./pages/ContactMe/ContactMe";





function App() {
  return (
    <div className="App">
      
        <NavBar />
        <Home />
        <AboutMe />
        <Education />
        {/* <WorkExperience /> */}
        <ContactMe />
        
      
    </div>
  );
}

export default App;
