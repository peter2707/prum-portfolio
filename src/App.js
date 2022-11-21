import React from "react";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import "./App.scss";

function App() {
    return (
        <div className="app">
            <Home/>
            <h1>Projects</h1>
            <Projects/>
            <About/>
        </div>
    );
}

export default App;
