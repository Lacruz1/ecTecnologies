import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import "./style.scss";

type Props = {
    children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
    return (
        <div className="mainContainer">
            <div className="header">
                <Navbar bg="light" expand="lg" className="bgNavbar">
                    <Navbar.Brand href="#home" className="titleNavbar">EduardComputersTecnologies</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown title="Modelismo" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.4.3">Terrestres</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4.3">Acuaticos</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4.3">Aereos</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#link">Comercios</Nav.Link>
                            <NavDropdown title="Consolas" id="basic-nav-dropdown">
                                <NavDropdown title="XBOX" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.4.1">a</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.4.2">a</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.4.3">a</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.4.4">a</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="PLAY STATION" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.4.1">a</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.4.2">a</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.4.3">a</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.4.4">a</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="NINTENDO" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.4.1">a</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.4.2">a</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.4.3">a</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.4.4">a</NavDropdown.Item>
                                </NavDropdown>
                            </NavDropdown>
                            <NavDropdown title="Juegos" id="basic-nav-dropdown">
                                <NavDropdown title="PC" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.4.1">a</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.4.2">a</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.4.3">a</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.4.4">a</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="PLAY STATION" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.4.1">a</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.4.2">a</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.4.3">a</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.4.4">a</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="NINTENDO" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.4.1">a</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.4.2">a</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.4.3">a</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.4.4">a</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="XBOX" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.4.1">a</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.4.2">a</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.4.3">a</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.4.4">a</NavDropdown.Item>
                                </NavDropdown>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar></div>
            <div className="mainContent">{children}</div>
            <div className="footer"></div>
        </div>
    )
}

export default MainLayout;
