import React, { useState, useEffect } from 'react';
import axios from '../../node_modules/axios/index';
import '../css/Modal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons'; // ♡
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons'; // ♥︎
import { faThumbsUp as regularThumbs } from '@fortawesome/free-regular-svg-icons'; // ♡
import { faThumbsUp as solidThumbs } from '@fortawesome/free-solid-svg-icons'; // ♥︎
import { Link, useNavigate } from 'react-router-dom';

const Modal = ({ open, close, userId }) => {
  const navigate = useNavigate();
  const [beerName, setBeerName] = useState([]);
  const [beerLevel, setBeerLevel] = useState([]);
  const [beerId, setBeerId] = useState([]);
  const [beerImage, setBImage] = useState([]);

  const [recipeName, setRecipeName] = useState([]);
  const [recipeScore, setRecipeScore] = useState([]);
  const [recipeId, setRecipeId] = useState([]);
  const [recipeImage, setRImage] = useState([]);

  
  const moveBeerPage = () => {
    navigate(`/beerDetail/${beerId}`, {
      state: {
        userId: userId,
        beerId: beerId,
      },
    });
  };

  
  const moveRecipePage = () => {
    navigate(`/reciepDetail/${recipeId}`, {
      state: {
        userId: userId,
        recipeId: recipeId,
      },
    });
  };


  useEffect(() => {
    console.log({ userId });
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/beer/recommend/${userId}`);
        setBeerName(response.data.result.name);
        setBeerLevel(response.data.result.abv);
        setBImage(response.data.result.image);
        setBeerId(response.data.result._id);

        /*setRecipeName(response.data.resultRecipe.name);
        setRecipeScore(response.data.resultRecipe.score);
        setRecipeId(response.data.resultRecipe._id);
        setRImage(response.data.resultRecipe.image);*/
        console.log(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  const [thumbs, setThumbs] = useState(false);
  const [heart, setHeart] = useState(false);

  const handleHeart = (e) => setHeart(!heart);
  const handleThumbs = (e) => setThumbs(!thumbs);

  const logIn = () => {
    return <div className="recContainer">
    <div className="Rec">
      <div onClick={moveBeerPage} className="gotoDetail">
        {beerName}
      </div>
      <p>{beerLevel}</p>
      <img alt="추천 맥주 이미지" src={beerImage} />
      <div className="Modal-heart-icon">
        <FontAwesomeIcon
          icon={heart ? solidHeart : regularHeart}
          onClick={handleHeart}
          size="2x"
          color="#F24E1E"
        />
      </div>
    </div>
    <div className="Rec">
      <div onClick={moveRecipePage} className="gotoDetail">
        {recipeName}
      </div>
      <p>평점: {recipeScore}</p>
      <img alt="추천 레시피 이미지" src={recipeImage} />
      <div className="Modal-thumbs_icon">
        <FontAwesomeIcon
          icon={thumbs ? solidThumbs : regularThumbs}
          onClick={handleThumbs}
          size="2x"
          color="#A69C9C"
        />
      </div>
    </div>
  </div>
  }

  const logOut = () => {
    return <div className='notUser'>
    <p>로그인을 하면 사용자의 도수에 맞는<br/> 맥주와 맥주 레시피를 추천받을 수 있습니다.</p>
    <div className='btn'>
      <Link to="/login" style={{ textDecoration: "none", margin:"auto"}}>로그인하기</Link>
    </div>
    </div>
  }


  return (
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>
          <header>
            <p>오늘의 추천</p>
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main>
            {logIn()}
          </main>

          <footer>
            <button className="close" onClick={close}>
              close
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default Modal;
