import React from "react";
import { Chrono } from "react-chrono";
import { timeline } from "./Constants/data";

const Timeline = () => {
    return (
        <div className="timeline">
            <Chrono
                items={timeline}
                mode="VERTICAL_ALTERNATING"
                fontSizes={20}
                theme={{
                    primary: "grey",
                    secondary: "red",
                    cardBgColor: "white",
                    cardForeColor: "black",
                    titleColor: "grey",
                    titleColorActive: "white",
                }}>
                <div>
                    <p>Relevant Coursework:</p>
                    <ul>
                        <li>Cloud Computing Architecture</li>
                        <li>Big Data</li>
                        <li>Data Management</li>
                        <li>Machine Learning</li>
                    </ul>
                </div>
                <div>
                    <p>Relevant Coursework:</p>
                    <ul>
                        <li>Object Oriented Programming</li>
                        <li>Human/Computer Interaction</li>
                        <li>ICT Project Management</li>
                        <li>Introduction to Data Science</li>
                        <li>Foundations of AI</li>
                        <li>Advanced Programming Techniques</li>
                        <li>Practical Data Science</li>
                        <li>System Deployment and Operations</li>
                        <li>iPhone Software Engineering</li>
                    </ul>
                </div>
                <div>
                    <p>Relevant Coursework:</p>
                    <ul>
                        <li>Programming Fundamentals</li>
                        <li>System Analysis</li>
                        <li>Network Infrastructure Foundations</li>
                        <li>Professional Communication Skills ICT</li>
                        <li>Database Design & Implementation</li>
                    </ul>
                </div>
            </Chrono>
        </div>
    );
};

export default Timeline;
