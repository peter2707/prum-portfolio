import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import logoDark from "../assets/logo-dark.png";

function NavigationBar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home"><img src={logoDark} height={50} width={60} alt="BigCo Inc. logo"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href=""><FaLinkedin size={40} color={"white"}/></Nav.Link>
                        <Nav.Link href=""><FaTwitter size={40} color={"white"}/></Nav.Link>
                        <Nav.Link href=""><FaGithub size={40} color={"white"}/></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;
