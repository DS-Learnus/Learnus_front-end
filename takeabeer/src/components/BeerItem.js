import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { FaRegHeart, FaHeart } from 'react-icons/fa';

const BeerItem = ({ content }) => {
  console.log('content: ' + content);
  const navigate = useNavigate();
  const userId = '63d3544d21b56c97a5cbde4a'; // 임시 고정
  const beerId = content._id;

  const movePage = () => {
    console.log(content);
    navigate(`/beerDetail/${beerId}`, {
      state: {
        userId: userId,
        beerId: beerId,
      },
    });
  };

  // userId 넘기는 부분은 추후에, 리덕스 작업 후에 작성하기.
  return (
    <>
      <div onClick={movePage} style={{ textDecoration: 'none' }}>
        <Card
          style={{
            width: '18rem',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '18rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              overFlow: 'hidden',
            }}
          >
            <Card.Img
              variant="top"
              src={content.image}
              style={{
                overFit: 'cover',
                height: '100%',
              }}
              alt="맥주 사진"
            />
          </div>
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
      </div>
      <br />
      <br />
    </>
  );
};

export default BeerItem;
