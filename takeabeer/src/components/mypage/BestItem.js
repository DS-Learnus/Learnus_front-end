import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import '../../css/MyPage/HeartItem.css'
import { FaThumbsUp } from 'react-icons/fa'


const BestItem = () => {
  return (
    <div>
        <Link to="/recipeDetail">
        <Card.Img variant="top" src="https://picsum.photos/250/250" alt="맥주 사진" className="beerPhoto"/>
        </Link>
        <Link to="/recipeDetail" style={{ textDecoration: "none", color: '#000000'}}>
        <div className='title'>레시피이름</div>
        </Link>
    <div className="heart">
        <FaThumbsUp />
    </div>
    </div>
  );
};

export default BestItem