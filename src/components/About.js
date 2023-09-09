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
                    I'm Monkolsophearith (Peter), hailing from the vibrant landscapes of Cambodia, 
                    is a dedicated IT professional with an enriching academic and practical background. 
                    At just 23 years old, I embarked on a profound academic journey starting with a 
                    diploma in Information and Communications Technology (ICT) from Central Queensland 
                    University. This foundation paved the way for my Bachelor's in IT at RMIT, where I 
                    refined my expertise in areas ranging from Java to JavaScript and more. Currently, 
                    I'm deepening my specialisation in Mobile and Cloud Computing with a Master's degree 
                    at Swinburne.
                </p>
                <p className="about-text">
                    Throughout my academic endeavors, I have not only amassed technical prowess, but also 
                    developed essential soft skills that employers value. Leading project teams during my 
                    coursework has fostered in me a robust sense of leadership and the ability to manage 
                    projects efficiently. My tenure as a team player in various academic projects highlights 
                    my spirit of collaboration and underscores the importance of working cohesively in a 
                    diverse environment. I am adept in languages such as Java, JavaScript, C++, Python, R, 
                    and Swift, and equally competent in managing databases like MySQL, PostgreSQL, and Mongo. 
                    My expertise also spans across cloud platforms such as AWS, Azure, and Oracle, and diverse 
                    frameworks including React, Node, Django, Ruby On Rails, Laravel, and ASP.NET.
                </p>
                <p className="about-text">
                    Beyond the confines of academia and professional work, I am an enthusiastic innovator, 
                    always on the lookout for side projects to bring fresh and novel ideas to achievement. And 
                    when the codes settle down, I rejuvenate my spirits by immersing myself in the thrilling 
                    world of motorsports. With a blend of technical dexterity and sought-after soft skills like 
                    leadership and collaboration, I am eager to contribute meaningfully to organisations that 
                    value innovation, commitment, and adaptability.
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
