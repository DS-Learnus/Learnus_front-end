import React, { useState, useEffect } from "react";
import axios from "../../node_modules/axios/index";
import "../css/RecipeDetail.css";
import "../css/Review.css";
import Review from "../components/Review";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp as regularThumbs } from "@fortawesome/free-regular-svg-icons"; // ♡
import { faThumbsUp as solidThumbs } from "@fortawesome/free-solid-svg-icons"; // ♥︎

const RecipeDetail = ({ recipeId }) => {

  const [name, setName] = useState([]);
  const [userName, setUserName] = useState([]);
  const [created, setCreated] = useState([]);
  const [ingList, setIngList] = useState([]);
  const [content, setContent] = useState([]);

  const [thumbs, setThumbs] = useState(false);
  const handleLike = e => setThumbs(!thumbs);

  useEffect(() => {
    console.log({recipeId});
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/recipe/${recipeId}`);
        setName(response.data.recipeDetail.name); 
        setUserName(response.data.recipeDetail.userId.nikname); 
        setCreated(response.data.recipeDetail.createdAt); 
        setIngList(response.data.recipeDetail.ingredient); 
        setContent(response.data.recipeDetail.content); 
        console.log(response.data); 
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  const ingredient = ingList.map((ing, index) => <div className="RecipeDetail-ingredientLine" key={index}><p>{ing.name}</p><p>{ing.amount}{ing.unit}</p></div>);

  return (
    <div className="RecipeDetail">
      <div className="RecipeDetail-title">
        <p>{name}</p>
        <p>좋아요</p>
        <div className="RecipeDetail-user">
          <p>{userName}</p>
          <p>{created}</p>
          <img alt="user" src={require("../img/userImg.png")} />
        </div>
        <div className='thumbs_icon'>
            <FontAwesomeIcon icon={thumbs ? solidThumbs : regularThumbs} onClick={handleLike} size="3x"  color={thumbs ? "#EB9B3E":'#A69C9C'}/>
        </div>

      </div>

      <div className="RecipeDetail-ingredient">
        <p>재료</p>
        <div className="RecipeDetail-ingredientContainer">
          {ingredient}
        </div>
      </div>

      <div className="post">
        <p>{content}</p>
      </div>

      <Review />
    </div>
  );
};

export default RecipeDetail;
