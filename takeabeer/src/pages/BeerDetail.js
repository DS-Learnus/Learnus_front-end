import React, { useState, useEffect } from 'react';
import Review from '../components/Review';
import axios from '../../node_modules/axios/index';
import '../css/BeerDetail.css';
import '../css/Review.css';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons'; // ♡
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons'; // ♥︎

const BeerDetail = () => {
  // userId는 리덕스에서 넘겨줍니다. 우선은 BeerItem에서 임시로 userId를 작성하여 전송
  const location = useLocation();
  const userId = location.state.userId;
  const beerId = location.state.beerId;

  console.log('userId: ', userId);
  console.log('beerId: ', beerId);
  const [name, setName] = useState([]);
  const [star, setStar] = useState([]);
  const [level, setLevel] = useState([]);
  const [ingre, setIngre] = useState([]);
  const [intro, setIntro] = useState([]);
  const [image, setImage] = useState([]);
  const [likeId, setLikeId] = useState([]);

  const [heart, setHeart] = useState(false);
  const handleLike = (e) => setHeart(!heart);

  /* 맥주 정보 get */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/beer/${beerId}`);
        setName(response.data.beerDetail.name);
        setStar(response.data.likes);
        setLevel(response.data.beerDetail.abv);
        setIngre(response.data.beerDetail.ingredient);
        setIntro(response.data.beerDetail.intro);
        setImage(response.data.beerDetail.image);
        console.log(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [beerId]);

  /* 좋아요 여부 get */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `beerDetail/api/user/mypage/${userId}`,
        );
        setLikeId(response.data.mylikeBeer);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [userId]);

  /* 좋아요 결과 post */
  const postHeart = async () => {
    await axios.post(`api/user/likeBeer`, {
      beerId: `${beerId}`,
      userId: `${userId}`,
    });
  };

  return (
    <div className="BeerDetail">
      <div className="BeerDetail-Info">
        <div className="heart-icon">
          <FontAwesomeIcon
            icon={heart ? solidHeart : regularHeart}
            onClick={() => {
              handleLike();
              postHeart();
            }}
            size="4x"
            color="#F24E1E"
          />
        </div>
        <p>{name}</p>
        <div className="BeerDetail-lines">
          <div className="BeerDetail-line">
            <p>평균 별점</p>
            <p>{star}</p>
          </div>
          <div className="BeerDetail-line">
            <p>도수</p>
            <p>{level}</p>
          </div>
          <div className="BeerDetail-line">
            <p>원재료</p>
            <p>{ingre}</p>
          </div>
          <div className="BeerDetail-line">
            <p>특징</p>
            <p>{intro}</p>
          </div>
        </div>
        <div className="BeerDetail-image">
          <img alt="terra" src={image} />
        </div>
      </div>

      <Review reviewId={beerId} isBeer={true} />
    </div>
  );
};

export default BeerDetail;
