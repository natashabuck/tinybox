import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Logo from "./Images/Logo.png";

export default class NavBar extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg" fixed="top">
        <Navbar.Brand href="/">
          <img src={Logo} width="30" height="30" alt="logo" />
          {"  "}TinyBox
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link onClick={() => this.props.history.push("/venues")}>Venues</Nav.Link>
            <Nav.Link href="https://github.com/natashabuck/tinybox" target="_blank">GitHub</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
