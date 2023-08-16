import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FaHome, FaCoins, FaChartPie, FaCaretDown, FaCaretUp } from "react-icons/fa"; // Import icons
import "../../styles/sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <Nav className="flex-column">
        <LinkContainer to="/">
          <Nav.Link className="nav-link">
            <FaHome className="icon" />
            <span className="link-text">Home</span>
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="/allassets">
          <Nav.Link className="nav-link">
            <FaCoins className="icon" />
            <span className="link-text">All Assets</span>
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="/portfolio">
          <Nav.Link className="nav-link">
            <FaChartPie className="icon" />
            <span className="link-text">My Portfolio</span>
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="/top">
          <Nav.Link>
            <FaCaretUp className="icon" />
            <span className="link-text">Top 10 Assets</span>
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="/bottom">
          <Nav.Link>
            <FaCaretDown className="icon" />
            <span className="link-text">Bottom 10 Assets</span>
          </Nav.Link>
        </LinkContainer>
      </Nav>
    </div>
  );
}

export default Sidebar;
