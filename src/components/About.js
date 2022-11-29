import React from "react";
import { Link } from "react-router-dom";
import { IoMailSharp } from "react-icons/io5";

const About = () => {
    return (
        <div className="about">
            <div class="author_pic">
                <div class="spin-container">
                    <div class="shape">
                        <div class="bd"></div>
                    </div>
                </div>
            </div>
            <div className="about-text">
                <p className="about-text">
                    I'm Monkolsophearith (Peter). I live in Melbourne, Australia
                    and currently doing my Master's degree at Swinburne
                    University. My field of focus is Software Engineering, Front
                    & Back End Development, and Mobile App Development. I have
                    developed many projects over the years that allows me to
                    stay up to date with new tools & technologies, building up
                    my coding skills & experience, and preparing myself to
                    enter the workforce.
                </p>
                <p className="about-text">
                    In my spare time, I like to play tennis, build interesting
                    projects, and learn new programming tools and techniques.
                    I'm always up to collaborate on new projects together, so
                    please don't hesitate to reach out.
                </p>
                <br />
                <Link to="." className="send-message-btn">
                    <IoMailSharp className="mb-1" /> Get in touch
                </Link>
            </div>
        </div>
    );
};

export default About;
