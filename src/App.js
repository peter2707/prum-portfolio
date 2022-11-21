import React from "react";
import "./App.scss";
import JobTitle from "./components/JobTitle";

function App() {
    return (
        <section id="container">
            <div id="home">
                <h1 className="heading">
                    Hi There!{" "}
                    <span className="wave" role="img" aria-labelledby="wave">
                        👋🏻
                    </span>
                </h1>

                <h1 className="heading-name">
                    I'm{" "}
                    <strong className="main-name">Monkolsophearith Prum</strong>
                </h1>
                <JobTitle />
            </div>

            <div></div>
        </section>
    );
}

export default App;
