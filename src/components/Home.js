import React from "react";
import JobTitle from "./JobTitle";

const Home = () => {
    return (
        <div className="home" id="home">
            <div>
                <h1>
                    Hi There!{" "}
                    <span className="wave" role="img" aria-labelledby="wave">
                        👋🏻
                    </span>
                </h1>

                <h1 className="heading-name">
                    I'm{" "}
                    <strong className="author-name">
                        Monkolsophearith Prum
                    </strong>
                </h1>
                <h4>
                    <JobTitle />
                </h4>
            </div>
        </div>
    );
};

export default Home;
