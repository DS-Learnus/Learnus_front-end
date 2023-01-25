import React from 'react';
import './RecipeDetail.css';
import './Review.css';
import Review from './Review';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp as regularThumbs } from '@fortawesome/free-regular-svg-icons'; // ♡
import { faThumbsUp as solidThumbs } from '@fortawesome/free-solid-svg-icons'; // ♥︎

const RecipeDetail = () => {
    return (
        <div className='RecipeDetail'>
            <div className='RecipeDetail-nav'></div>   
            <div className='RecipeDetail-title'>
                <p>수박 카스 칵테일</p>
                <p>user9</p>
                <p>2023년 1월 24일 화요일</p>
                <p>좋아요</p>
                <div className='RecipeDetail-userImg'>
                    <img alt='user' src={require("../img/userImg.jpg")} />
                </div>
                <div className='thumbs_icon'>
                    <FontAwesomeIcon icon={regularThumbs} size="3x"  color='#A69C9C'/>
                </div>
            </div>


            <div className='RecipeDetail-ingredient'>
                <p>재료</p>
                <div className='RecipeDetail-ingredientContainer'>
                    <div className='RecipeDetail-ingredientLine'>
                        <p>카스</p>
                        <p>1맥주잔</p>
                    </div>
                    <div className='RecipeDetail-ingredientLine'>
                        <p>처음처럼</p>
                        <p>3소주잔</p>
                    </div>
                    <div className='RecipeDetail-ingredientLine'>
                        <p>수박</p>
                        <p>1조각</p>
                    </div>
                    <div className='RecipeDetail-ingredientLine'>
                        <p>요구르트</p>
                        <p>1개</p>
                    </div>
                    <div className='RecipeDetail-ingredientLine'>
                        <p>얼음</p>
                        <p>15개</p>
                    </div>
                </div>
            </div>


            <div className='post'>

            </div>

            <Review />
            
            <span className='RecipeDetail-footer'></span>
        </div>
    );
};

export default RecipeDetail;