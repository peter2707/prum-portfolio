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
                    I'm Monkolsophearith (Peter), originally from Cambodia, and
                    I'm a dedicated Software Engineer with a strong academic
                    background and practical experience. I kickstarted my
                    academic journey with a diploma in Information and
                    Communications Technology (ICT) from Central Queensland
                    University, followed by a Bachelor's in IT at RMIT
                    University. Currently in my part time, I'm pursuing a Master's degree in IT
                    with a focus on Cloud Computing at Swinburne University.
                </p>
                <p className="about-text">
                    Alongside my technical expertise, I've honed essential soft
                    skills such as critical thinking, time-management, and 
                    collaboration through academic projects. Proficient in languages 
                    such as Java, JavaScript, C#, C++, Python, R, and PHP, I also have
                    experience managing databases like MySQL, PostgreSQL, and
                    MongoDB, and working with cloud platforms including AWS,
                    Azure, and Oracle, as well as various frameworks such as
                    React, Node, Django, Angular, and ASP.NET.
                </p>
                <p className="about-text">
                    Outside of academia and work, I'm an enthusiastic innovator
                    always seeking side projects to explore fresh ideas. When
                    I'm not coding, I indulge my passion for motorsports. With a
                    blend of technical expertise and sought-after soft skills
                    like critical thinking, time management, and collaboration, I'm eager to make
                    meaningful contributions to organisations that prioritise
                    innovation, commitment, and adaptability.
                </p>

                <br />
                <a
                    href="mailto: prummmonkolsophearith@gmail.com"
                    className="send-message-btn">
                    <IoMailSharp className="mb-1" /> Get in touch
                </a>
            </div>
        </div>
    );
};

export default About;
