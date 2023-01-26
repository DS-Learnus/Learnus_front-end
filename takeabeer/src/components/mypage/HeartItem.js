import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import { FaHeart } from 'react-icons/fa'
import '../../css/MyPage/HeartItem.css'


const HeartItem = () => {
  return (
    <div>
        <Link to="/beerDetail">
        <Card.Img variant="top" src="https://picsum.photos/250/250" alt="맥주 사진" className="beerPhoto"/>
        </Link>
        <Link to="/beerDetail" style={{ textDecoration: "none", color: '#000000'}}>
        <div className='title'>맥주이름</div>
        </Link>
    <div className="heart">
        <FaHeart />
    </div>
    </div>
  );
};

export default HeartItem