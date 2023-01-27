import React, { useState, useEffect } from 'react';
import axios from '../../node_modules/axios/index';
import '../css/Modal.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons"; // ♡
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons"; // ♥︎
import { faThumbsUp as regularThumbs } from "@fortawesome/free-regular-svg-icons"; // ♡
import { faThumbsUp as solidThumbs } from "@fortawesome/free-solid-svg-icons"; // ♥︎
import { Link } from "react-router-dom";

const Modal = ({ open, close, userId }) => {

  const [beerName, setBeerName] = useState([]);
  const [beerLevel, setBeerLevel] = useState([]);
  const [recipeName, setRecipeName] = useState([]);
  const [beerImage, setBImage] = useState([]);
  const [recipeImage, setRImage] = useState([]);

  useEffect(() => {
    console.log({userId});
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/beer/recommend/${userId}`);
        setBeerName(response.data.result.name); 
        setBeerLevel(response.data.result.abv); 
        /*setRecipeName(response.data.resultRecipe.name);*/  
        setBImage(response.data.result.image);
        console.log(response.data); 
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);


    const [thumbs, setThumbs] = useState(false);
    const [heart, setHeart] = useState(false);

    const handleHeart = e => setHeart(!heart);  
    const handleThumbs = e => setThumbs(!thumbs);
  
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
                <div className='recContainer'>
                    <div className='Rec'>
                        <Link  to={`/beerDetail`} className='gotoDetail'>{beerName}</Link>
                        <p>{beerLevel}</p>
                        <img alt="추천 맥주 이미지" src={beerImage} />
                        <div className='Modal-heart-icon'>
                            <FontAwesomeIcon  icon={heart ? solidHeart : regularHeart} onClick={handleHeart} size="2x" color='#F24E1E'/>
                        </div>
                    </div>
                    <div className='Rec'>
                        <Link  to={`/recipeDetail`} className='gotoDetail'>{recipeName}</Link>
                        <p>평점 정보</p>
                        <img alt="추천 레시피 이미지" src={recipeImage} />
                        <div className='Modal-thumbs_icon'>
                            <FontAwesomeIcon icon={thumbs ? solidThumbs : regularThumbs} onClick={handleThumbs} size="2x"  color='#A69C9C'/>
                        </div>
                    </div>
                </div>
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