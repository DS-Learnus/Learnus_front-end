import React, { useState } from 'react';
import '../css/Modal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons'; // ♡
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons'; // ♥︎
import { faThumbsUp as regularThumbs } from '@fortawesome/free-regular-svg-icons'; // ♡
import { faThumbsUp as solidThumbs } from '@fortawesome/free-solid-svg-icons'; // ♥︎
import { Link } from 'react-router-dom';

const Modal = ({ open, close }) => {
  const [thumbs, setThumbs] = useState(false);
  const [heart, setHeart] = useState(false);

  const handleHeart = (e) => setHeart(!heart);
  const handleThumbs = (e) => setThumbs(!thumbs);

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
            <div className="recContainer">
              <div className="Rec">
                <Link to={`/beerDetail`} className="gotoDetail">
                  맥주 이름
                </Link>
                <p>도수 정보</p>
                <img alt="terra" src={require('../img/terra.jpg')} />
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
                <Link to={`/recipeDetail`} className="gotoDetail">
                  레시피 이름
                </Link>
                <p>평점 정보</p>
                <img alt="terra" src={require('../img/recipe.jpg')} />
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
