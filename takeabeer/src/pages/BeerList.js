import React, { useEffect, useState } from 'react';
import BeerItem from '../components/BeerItem';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/BeerList.css';
import axios from 'axios';
import Paginate from '../components/Paginate';

const BeerList = () => {
  const [beers, setBeers] = useState([]);
  const [page, setPage] = useState(1); // 페이지네이션
  const [totalPage, setTotalPage] = useState(1); // 페이지네이션

  useEffect(() => {
    console.log('beerListPage');
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/beer/beerList?page=${page}`);
        setBeers(response.data.beers);
        setTotalPage(response.data.beers.length);
        console.log(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [page]);

  // 맥주 목록 아이템 생성
  const listItem = () => {
    console.log(beers);
    const list = beers.map((beer, index) => {
      return (
        <Col md={3} key={index}>
          <BeerItem content={beer} />
        </Col>
      );
    });

    return list;
  };
  return (
    <div id="beerlistbody">
      <Container>
        <h1 className="listTitle" style={{ color: '#B9A690' }}>
          Let's Beer
        </h1>
        <p className="listText">
          한국에서 유통되고 있는 맥주에 대해 소개합니다
        </p>
        <Row>{listItem()}</Row>
        <div className="pageContainer">
          <Paginate page={page} setPage={setPage} totalPage={totalPage} />
        </div>
      </Container>
    </div>
  );
};

export default BeerList;
