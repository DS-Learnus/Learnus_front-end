import React, { useState, useEffect } from "react";
import axios from "../../node_modules/axios/index";
import "../css/Review.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp as solidThumbs } from "@fortawesome/free-solid-svg-icons"; // ♥︎
import { faStar } from "@fortawesome/free-solid-svg-icons"; // ♥︎

const Comment = ({ comment }) => {

  const [userComment, setUserComment] = useState(comment.content);
  const [userScore, setUserScore] = useState(comment.score);
  const [userName, setUserName] = useState(comment.userId.nikname);  

  return (
    <div className="c">
      <span className="userImg">
        <img alt="user" src={require("../img/userImg.png")} />
      </span>
      <div className="strBox">
        <p className="comment-userName">{userName}</p>
        <p>{userComment}</p>
        <div className="userStarBox">
          <p>{userScore}</p>
          <div className="starIcon">
            <FontAwesomeIcon icon={faStar} color="#7B7B7B" />
          </div>
        </div>
      </div>
      <span className="comLine"></span>
    </div>
  );
};

export default Comment;
