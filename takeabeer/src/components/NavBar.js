import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

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
          <Nav.Link href="/mypageBeer">MyPage</Nav.Link>
          <Nav.Link href="/login">LogOut</Nav.Link>&nbsp;&nbsp;
          {/* <Nav.Link href="#">Logout</Nav.Link> */}
          </Nav>
      </Navbar>
    </div>
  );
};

export default NavBar;
