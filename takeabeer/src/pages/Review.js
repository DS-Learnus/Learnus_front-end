import React, { useState } from "react";
import Comment from "./Comment";
import "../css/Review.css";

const Review = () => {
    
    const numList =[1,2,3,4,5];
    const starList = numList.map((num,index)=><button onClick={()=>{setStar(num); console.log(star);}} type="button" className="btn btn-secondary" key={index}>{num}</button>)
    const [star, setStar] = useState(null);

  return (
    <div className="review">
      <div className="review-write">
        <p className="reviewP">후기 남기기</p>
        <div className="write-rect1"></div>
        <input className="write-rect2" />
        <div
          class="btn-toolbar star-frame"
          role="toolbar"
          aria-label="Toolbar with button groups"
        >
          <div class="btn-group mr-2" role="group" aria-label="First group">
            {starList}
          </div>
        </div>

        <button type="button" class="write-btn btn btn-warning">
          코멘트 작성
        </button>
      </div>

      <div className="review-read">
        <p className="reviewP">코멘트</p>
        <div className="comment-window">
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
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
            <a class="page-link" href="#">
              1
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              2
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              3
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
