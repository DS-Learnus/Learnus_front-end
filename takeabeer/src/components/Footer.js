import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">

        사이트 로고
        <br/>
        <Container>
          <Row>
            <Col md={6}>Developers Learnus</Col>
            <Col>ContactUs ???</Col>
          </Row>
        </Container>
    </div>
  );
};

export default Footer