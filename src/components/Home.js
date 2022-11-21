import React from "react";
import JobTitle from "./JobTitle";

const Home = () => {
    return (
        <div className="home">
            <h1 className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                </span>
            </h1>

            <h1 className="heading-name">
                I'm <strong className="main-name">Monkolsophearith Prum</strong>
            </h1>
            <h4><JobTitle /></h4>
        </div>
    );
};

export default Home;
