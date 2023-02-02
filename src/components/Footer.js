import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaDiscord, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <div className="footer">
            <Container>
                <Row>
                    <Col md="6">
                        <a href="https://discordapp.com/users/283908146999721984">
                            <FaDiscord className="social-links" size={30} />
                        </a>
                        <a href="https://www.linkedin.com/in/monkolsophearith-prum-b49a11247">
                            <FaLinkedin className="social-links" size={30} />
                        </a>
                        <a href="https://twitter.com/pmr_2707">
                            <FaTwitter className="social-links" size={30} />
                        </a>
                        <a href="https://github.com/peter2707">
                            <FaGithub className="social-links" size={30} />
                        </a>
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
