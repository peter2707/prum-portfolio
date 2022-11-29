import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { IoMailSharp } from "react-icons/io5";

const About = () => {
    return (
        <Container>
            <Row className="mt-5">
                <Col md={{ span: 5, offset: 1 }} className="mt-3 about-col">
                    <p className="about-text">
                        I'm Monkolsophearith (Peter). I live in Melbourne,
                        Australia and currently doing my Master's degree at
                        Swinburne University. My field of focus is Software
                        Engineering, Front and Back End Development, and Mobile
                        App Development. I have developed many projects over the
                        years that allows me to stay up to date with new tools
                        and technologies, building up my coding skills and
                        experience, and preparing myself to enter the workforce.
                    </p>
                    <p className="about-text">
                        In my spare time, I like to play tennis, build
                        interesting projects, and learn new programming tools
                        and techniques. I'm always up to collaborate on new
                        projects together, so please don't hesitate to reach
                        out.
                    </p>
                    <Link to="." className="send-message-btn mt-2">
                        <IoMailSharp className="mb-1" /> Get in touch
                    </Link>
                </Col>
                <Col className="text-center">
                    <img
                        className="author_pic"
                        alt="author_profile_picture"
                        src="../images/1.png"
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default About;
