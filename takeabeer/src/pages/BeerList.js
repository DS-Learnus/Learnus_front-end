import React from 'react'
import BeerItem from '../components/BeerItem'
import PaginationElements from '../components/PaginationElements'
import { Container, Row, Col } from 'react-bootstrap'
import './BeerList.css'

const BeerList = () => {
  return (
    <div id="beerlistbody">
      <h1 className="listTitle" style={{color: '#B9A690'}}>Let's Beer</h1>
      <p className="listText">한국에서 유통되고 있는 맥주에 대해 소개합니다</p>
      <Container>
        <Row>
          <Col md={3}><BeerItem /></Col>
          <Col md={3}><BeerItem /></Col>
          <Col md={3}><BeerItem /></Col>
          <Col md={3}><BeerItem /></Col>
          <Col md={3}><BeerItem /></Col>
          <Col md={3}><BeerItem /></Col>
          <Col md={3}><BeerItem /></Col>
          <Col md={3}><BeerItem /></Col>
          <Col md={3}><BeerItem /></Col>
          <Col md={3}><BeerItem /></Col>
          <Col md={3}><BeerItem /></Col>
          <Col md={3}><BeerItem /></Col>
        </Row>
      </Container>
      <PaginationElements />

    </div>
  )
}

export default BeerList