import React from "react";
//import { Route, Redirect, Switch } from "react-router-dom";
import Navbar from "./components/navbar";
import HeroHome from "./components/heroHome";
import "./App.css";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
import MyFooter from "./components/myFooter";
import Experience from "./components/experience";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeroHome></HeroHome>
      <About></About>
      <Skills></Skills>
      <Experience></Experience>
      <Projects></Projects>
      <MyFooter></MyFooter>
    </div>
  );
};

export default App;
