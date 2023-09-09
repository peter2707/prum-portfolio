import React from "react";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Timeline from "./components/Timeline";
import "./App.scss";

function App() {
    return (
        <div className="app">
            <Home/>
            <h1 className="heading">Projects</h1>
            <Projects/>
            <h1 className="heading">Timeline</h1>
            <Timeline/>
            <h1 className="heading">About</h1>
            <About/>
        </div>
    );
}

export default App;
