import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "../../styles/sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <Nav className="flex-column">
        <LinkContainer to="/">
          <Nav.Link>Home</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/allassets">
          <Nav.Link>All Assets</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/portfolio">
          <Nav.Link>My Portfolio</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/bottom">
          <Nav.Link>Bottom 10</Nav.Link>
        </LinkContainer>
      </Nav>
    </div>
  );
}

export default Sidebar;
