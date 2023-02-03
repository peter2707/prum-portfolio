import React from "react";
import { IoMailSharp } from "react-icons/io5";

const About = () => {
    return (
        <div className="about">
            <div className="author_pic">
                <div className="spin-container">
                    <div className="shape">
                        <div className="bd"></div>
                    </div>
                </div>
            </div>
            <div className="about-text">
                <p className="about-text">
                    I'm Monkolsophearith (Peter). I am a Software Engineer at
                    Cambodian Mine Action Authority. I live in Melbourne,
                    Australia and currently doing my Master's degree at
                    Swinburne University. My field of focus is Software and Web
                    Development, Cloud Computing, and Data Science.
                </p>
                <p className="about-text">
                    Throughout the 3 years of experience in my career, I have
                    focused on developing scalable and well-documented code in
                    agile team. I enjoy working both as a team and self-directed
                    environment. My goal is to make the world better by building
                    innovative solutions.
                </p>
                <p className="about-text">
                    Feel free to send me a message if you would like to know
                    more about me. I am always up to discuss about exciting
                    opportunities and expand my network.
                </p>
                <br />
                <a
                    href="mailto: prummmonkolsophearith@gmail.com"
                    className="send-message-btn"
                >
                    <IoMailSharp className="mb-1" /> Get in touch
                </a>
            </div>
        </div>
    );
};

export default About;
