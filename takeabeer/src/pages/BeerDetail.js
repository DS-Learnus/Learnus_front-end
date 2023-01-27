import React, { useState, useEffect } from 'react';
import Review from '../components/Review';
import axios from '../../node_modules/axios/index';
import '../css/BeerDetail.css';
import '../css/Review.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons'; // ♡
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons'; // ♥︎

const BeerDetail = () => {
  const [heart, setHeart] = useState(false);

  const handleLike = (e) => setHeart(!heart);

  return (
    <div className="BeerDetail">
      <div className="BeerDetail-Info">
        <div className="heart-icon">
          <FontAwesomeIcon
            icon={heart ? solidHeart : regularHeart}
            onClick={handleLike}
            size="4x"
            color="#F24E1E"
          />
        </div>
        <p>제품명</p>
        <div className="BeerDetail-lines">
          <div className="BeerDetail-line">
            <p>평균 별점</p>
            <p>4</p>
          </div>
          <div className="BeerDetail-line">
            <p>도수</p>
            <p>5.2</p>
          </div>
          <div className="BeerDetail-line">
            <p>원재료</p>
            <p>원재료, 원재료, 원재료</p>
          </div>
          <div className="BeerDetail-line">
            <p>특징</p>
            <p>맥주설명 맥주설명 맥주설명 맥주설명 맥주설명 </p>
          </div>
          <div className="BeerDetail-line"></div>
        </div>
        <div className="BeerDetail-image">
          <img alt="terra" src={require('../img/terra.jpg')} />
        </div>
      </div>

      <Review />
    </div>
  );
};

export default BeerDetail;
