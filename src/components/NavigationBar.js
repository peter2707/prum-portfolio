import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import DarkModeSwitch from "./DarkModeSwitch";
import logoDark from "../assets/logo-white.png";

function NavigationBar() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home"><img src={logoDark} height={70} width={90} alt="PMR Logo"/></Navbar.Brand>
                <Nav style={{marginRight: -100}}>
                    <DarkModeSwitch />
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;
