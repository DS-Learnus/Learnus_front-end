import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import { FaRegHeart, FaHeart } from 'react-icons/fa'
const BeerItem = () => {
  return (
    <div>

          <Card style={{ width: '18rem', display: 'flex' }}>
          <Link to="#beerDetail">
          <Card.Img variant="top" src="https://picsum.photos/250/250" alt="맥주 사진"/>
          </Link>
      <Card.Body>
      <Card.Text>맥주 이름 <small className="text-muted" style={{float: 'right'}}>맥주 제조사</small></Card.Text>
      </Card.Body>
      <Card.Footer>
      <Card.Text>
          <small className="text-muted">평균 평점</small>
          <small className="likesBeer" style={{float: 'right'}}>
          <FaRegHeart />
          <FaHeart />
          </small>


          </Card.Text>
        </Card.Footer>
    </Card>


    <br></br>
    </div>
  );
};

export default BeerItem