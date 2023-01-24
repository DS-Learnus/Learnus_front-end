import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = () => {
  // 유저 상태 관리, 로그인-로그아웃 여부

  return (
    <div style={{ fontSize: "20px", fontFamily: "NanumSquareNeoRegular" }}>
      <Navbar
        style={{
          backgroundColor: "#b9a690",
        }}
      >
        <Container
          style={{
            maxWidth: "1200px",
          }}
        >
          <a href="/" style={{ marginRight: "auto", marginLeft: "0px" }}>
            <img
              src={require("../image/takeabeer-logo.png")}
              width="80px"
              alt="logo"
            />
          </a>

          <Nav className="me-auto">
            &nbsp;&nbsp;&nbsp;
            <Nav.Link href="#">Let's Beer</Nav.Link>&nbsp;&nbsp;
            <Nav.Link href="#">beer Recipe</Nav.Link>
          </Nav>

          <div className="input-group" style={{ maxWidth: "200px" }}>
            <div>
              <button
                className="btn btn-primary"
                style={{
                  backgroundColor: "#6f6457",
                  padding: "7px",
                  marginRight: "5px",
                  border: "1px solid #b9a690",
                }}
              >
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
            <input type="text" className="form-control" />
          </div>
        </Container>
        <Nav className="me-auto">
          &nbsp;&nbsp;&nbsp;
          <Nav.Link href="#">Login</Nav.Link>&nbsp;&nbsp;
          <Nav.Link href="#">Logout</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default NavBar;
