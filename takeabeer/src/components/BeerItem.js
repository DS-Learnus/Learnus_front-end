import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
const BeerItem = ({ content }) => {
  console.log(content);
  // userId 넘기는 부분은 추후에, 리덕스 작업 후에 작성하기.
  return (
    <>
      <Link
        to={`/beerDetail/${content._id}`}
        beerid={content._id}
        userid={content}
        style={{ textDecoration: 'none' }}
      >
        <Card style={{ width: '18rem', display: 'flex' }}>
          <Card.Img
            variant="top"
            src="https://picsum.photos/250/250"
            alt="맥주 사진"
          />

          <Card.Body>
            <Card.Text>
              {content.name}{' '}
              <small className="text-muted" style={{ float: 'right' }}>
                {content.company}
              </small>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Card.Text>
              <small className="text-muted">평균 평점</small>
              <small className="likesBeer" style={{ float: 'right' }}>
                <FaRegHeart />
                <FaHeart />
              </small>
            </Card.Text>
          </Card.Footer>
        </Card>
      </Link>
      <br />
      <br />
    </>
  );
};

export default BeerItem;
