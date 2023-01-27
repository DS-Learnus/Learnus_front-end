import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import { FaRegHeart, FaHeart } from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons'; // ♡
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons'; // ♥︎
const BeerItem = ({beerdetail}) => {
  
  const [likes, setLikes ] = useState(false);

  const handleLike = () => {
    setLikes(!likes);
  }

  return (
    <div>

          <Card style={{ width: '18rem', display: 'flex' }}>
          <Link to="#beerDetail" state={beerdetail}>
          <Card.Img variant="top" src="https://picsum.photos/250/250" alt="맥주 사진"/>
          </Link>
      <Card.Body>
      <Card.Text>맥주 이름 <small className="text-muted" style={{float: 'right'}}>맥주 제조사</small></Card.Text>
      </Card.Body>
      <Card.Footer>
      <Card.Text>
          <small className="text-muted">평균 평점</small>
          <small className="likesBeer" style={{float: 'right'}}>
          <span>
          <div className="likeIcon" onClick={handleLike}>
      {likes ? (
        //좋아요
        <FaHeart 
        style={{
        color: "#F24E1E"
        }}
        />
      ) : (
        //좋아요 취소
        <FaRegHeart
        style={{
          color: "#F24E1E"
          }}
        />
      )}
    </div>
          </span>
          </small>


          </Card.Text>
        </Card.Footer>
    </Card>


    <br></br>
    </div>
  );
};

export default BeerItem