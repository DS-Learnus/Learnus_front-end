import React from 'react';
import Comment from './Comment';
import './Review.css';

const Review = () => {
    return (
        <div className='review'>
            <div className='review-write'>
                <p className='reviewP'>후기 남기기</p>
                <div className='write-rect1'></div>
                <input className='write-rect2' />
                <div class="btn-toolbar star-frame" role="toolbar" aria-label="Toolbar with button groups">
                    <div class="btn-group mr-2" role="group" aria-label="First group">
                        <button type="button" class="btn btn-secondary">1</button>
                        <button type="button" class="btn btn-secondary">2</button>
                        <button type="button" class="btn btn-secondary">3</button>
                        <button type="button" class="btn btn-secondary">4</button>
                        <button type="button" class="btn btn-secondary">5</button>
                    </div>
                </div>
                
                <button type="button"  class="write-btn btn btn-warning">코멘트 작성</button>
            </div>

            <div className='review-read'>
                <p className='reviewP'>코멘트</p>
                <div className='comment-window'>
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
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
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