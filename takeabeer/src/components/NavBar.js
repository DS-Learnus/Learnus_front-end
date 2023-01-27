import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';

const NavBar = () => {
  // 유저 상태 관리, 로그인-로그아웃 여부

  return (
    <div style={{ fontSize: '20px', fontFamily: 'NanumSquareNeoRegular' }}>
      <Navbar
        style={{
          backgroundColor: '#b9a690',
        }}
      >
        <Container
          style={{
            maxWidth: '1500px',
          }}
        >
          <a href="/" style={{ marginRight: 'auto', marginLeft: '0px' }}>
            <img
              src={require('../img/takeabeer-logo.png')}
              width="80px"
              alt="logo"
            />
          </a>
          
          <Nav className="me-auto">
            &nbsp;&nbsp;&nbsp;
            <Nav.Link href="/">Main</Nav.Link>&nbsp;&nbsp;
            <Nav.Link href="/beerList">Let's Beer</Nav.Link>&nbsp;&nbsp;
            <Nav.Link href="/recipeList">beer Recipe</Nav.Link> &nbsp;&nbsp;
          </Nav>
        </Container> 
          <Nav className="me-auto">
          &nbsp;&nbsp;&nbsp;
          <Nav.Link href="/login">Login</Nav.Link>&nbsp;&nbsp;
          {/* <Nav.Link href="#">Logout</Nav.Link> */}
          </Nav>
      </Navbar>
    </div>
  );
};

export default NavBar;
