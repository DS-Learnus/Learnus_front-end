import React from 'react';
import './Review.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';import { faThumbsUp as solidThumbs } from '@fortawesome/free-solid-svg-icons'; // ♥︎
import { faStar } from '@fortawesome/free-solid-svg-icons'; // ♥︎

const Comment = () => {
    return (
        <div className='c'>
            <span className='userImg'>
                <img alt='user' src={require("../img/userImg.jpg")} />
            </span>
            <div className='strBox'>
                <p className='comment-userName'>user1</p>
                <p>댓글</p>
                <div className='userStarBox'>
                    <p>5</p>
                    <div className='starIcon'>
                        <FontAwesomeIcon icon={faStar} color="#7B7B7B" />
                    </div>
                </div>
            </div>
            <span className='comLine'></span>
        </div>
    );
};

export default Comment;