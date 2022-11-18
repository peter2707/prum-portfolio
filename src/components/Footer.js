import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { FaDiscord, FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

function Footer() {
    return (
        <div className="bg-dark text-light">
            <Container>
            <Row>
                <Col md="6">
                    <Link to="/"><FaDiscord size={30} color={"white"}/></Link>
                    <Link to="/"><FaLinkedin size={30} color={"white"}/></Link>
                    <Link to="/"><FaTwitter size={30} color={"white"}/></Link>
                    <Link to="/"><FaGithub size={30} color={"white"}/></Link>
                </Col>
                <Col md="6" className="text-end">
                    <small>Copyright © 2022 Monkolsophearith Prum</small>
                </Col>
            </Row>
        </Container>
        </div>
    );
}

export default Footer;
