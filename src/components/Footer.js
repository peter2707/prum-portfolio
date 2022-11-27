import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { FaDiscord, FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

function Footer() {
    return (
        <div className="footer">
            <Container>
            <Row>
                <Col md="6">
                    <Link to="/"><FaDiscord className="social-links" size={30}/></Link>
                    <Link to="/"><FaLinkedin className="social-links" size={30}/></Link>
                    <Link to="/"><FaTwitter className="social-links" size={30}/></Link>
                    <Link to="/"><FaGithub className="social-links" size={30}/></Link>
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
