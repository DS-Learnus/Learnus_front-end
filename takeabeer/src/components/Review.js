import React, { useState } from "react";
import Comment from "./Comment";
import "../css/Review.css";
import axios from "../../node_modules/axios/index";

const Review = () => {

  const numList =[1,2,3,4,5];
  const starList = numList.map((num,index)=><button onClick={()=>{setStar(num); console.log(star);}} type="button" className="btn btn-secondary" key={index}>{num}</button>)
  const [star, setStar] = useState(null);
  
  const [inputText, setInputText] = useState('');
  const onChangeInput = e => setInputText(e.target.value);
  const onClickBtn = () => {
    setInputText('');
  };



  const postReview = async () => {
    await axios.post(`api/beer/review`, {
      "beerId": "63ccb786560d43ce3e821087", 
      "score": {star}, 
      "content": {inputText} 
    });
    console.log("ThumbsUp post");
  }
   

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
            {starList}
          </div>
        </div>

        <button type="button" class="write-btn btn btn-warning" onClick={onClickBtn}>
          코멘트 작성
        </button>
      </div>

      <div className="review-read">
        <p className="reviewP">코멘트</p>
        <div className="comment-window">
          <Comment userName={"서지혜"} userComment={"댓글1입니다"} userStar={1} />
          <Comment userName={"유수연"} userComment={"댓글2입니다"} userStar={2}/>
          <Comment userName={"오세은"} userComment={"댓글3입니다"} userStar={3}/>
          <Comment userName={"박유나"} userComment={"댓글4입니다"} userStar={4}/>
          <Comment userName={"코코넛"} userComment={"댓글5입니다"} userStar={5}/>
          <Comment userName={"코너톤"} userComment={"댓글6입니다"} userStar={1}/>
        </div>
      </div>

      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Review;
