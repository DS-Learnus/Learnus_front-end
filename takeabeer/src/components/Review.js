import React, { useState, useEffect } from "react";
import Comment from "./Comment";
import "../css/Review.css";
import axios from "../../node_modules/axios/index";

const Review = ({reviewId, isBeer}) => {

  const numList =[1,2,3,4,5];
  const scoreList = numList.map((num,index)=><button onClick={()=>{setScore(num); console.log(score);}} type="button" className="btn btn-secondary" key={index}>{num}</button>)
  const [score, setScore] = useState(null);    
  const [comments, setComments] = useState([]);
  const {avgScore, setAvgScore} = useState([]);

  
  const [inputText, setInputText] = useState('');
  const onChangeInput = e => setInputText(e.target.value);
  const onClickBtn = () => {
    setInputText('');
  };

  /* 맥주 댓글 정보 get */
  const getBeerCmt = () => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`/api/beer/${reviewId}`);
          setComments(response.data.beerDetail.review);
        } catch (e) {
          console.log(e);
        }
      };
      fetchData();
  }

  /* 레시피 댓글 정보 get */
  const getRecipeCmt = () => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`/api/recipe/${reviewId}`);
          setComments(response.data.recipeDetail.review);
        } catch (e) {
          console.log(e);
        }
      };
      fetchData();
  }
 

  /* 댓글 불러오기 */
  useEffect(() => {
    {isBeer? getBeerCmt() : getRecipeCmt() }
  }, [] )


  /* 맥주 후기 post */
  const postBeerReview = async () => {
    try {
    console.log("Beer Review");
    await axios.post(`http://localhost:3000/api/beer/review`, {
      "beerId": `${reviewId}`, 
      "score": `${score}`, 
      "content": `${inputText}` 
    });
    console.log("Beer Review post");
    } catch (e) {
      console.log(e);
    }
  }


  /* 레시피 후기 post */
  const postRecipeReview = async () => {
    try{
      
    console.log("Recipe Review");
    await axios.post(`http://localhost:3000/api/recipe/review`, {
      "recipeId": `${reviewId}`, 
      "score": `${score}`, 
      "content": `${inputText}` 
    });
    console.log("Recipe Review post");
    } catch (e) {
      console.log(e);
    }
  }

  /* review 배열 접근 */
  const cmt = () => {
    console.log(comments);
    const list = comments.map((comment, index) => {
      return (
          <Comment key={index} comment={comment} />
      );
    });
    return <div className="comment-window">{list}</div>;
  };

  return (
    <div className="review">
      <div className="review-write">
        <p className="reviewP">후기 남기기</p>
        <div className="write-rect1"></div>
        <textarea className="write-rect2" value={inputText} onChange={onChangeInput} maxLength={50}/>
        <div
          class="btn-toolbar star-frame"
          role="toolbar"
          aria-label="Toolbar with button groups"
        >
          <div class="btn-group mr-2" role="group" aria-label="First group">
            {scoreList}
          </div>
        </div>

        <button type="button" class="write-btn btn btn-warning" onClick={()=>{onClickBtn(); {isBeer? postBeerReview():postRecipeReview()};}}>
          코멘트 작성
        </button>
      </div>

      <div className={comments.length!==0? "review-read isReview" : "review-read"}>
        <p className="reviewP">코멘트 <span className="small">({comments.length})</span></p>
          {cmt()}
      </div>
    </div>
  );
};

export default Review;
