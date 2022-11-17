import React from "react";
import Typewriter from "typewriter-effect";

function JobTitle() {
    return (
        <Typewriter
            options={{
                strings: [
                    "Full Stack Developer",
                    "MERN Stack Developer",
                    "iOS App Engineer",
                    "DevOps Engineer",
					"Data Scientist",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
}

export default JobTitle;
