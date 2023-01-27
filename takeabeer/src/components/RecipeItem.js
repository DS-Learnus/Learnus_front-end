import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { FaRegThumbsUp, FaThumbsUp } from 'react-icons/fa';

const RecipeItem = ({ content }) => {
  console.log(content);

  return (
    <div>
      <Link
        to={`/recipeDetail/${content._id}`}
        recipeid={content._id}
        userid={content}
        style={{ textDecoration: 'none', justifyContent: 'center' }}
      >
        <Card style={{ width: '18rem', display: 'flex' }}>
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
              alt="제조 완료된 사진"
              style={{
                overFit: 'cover',
                height: '100%',
              }}
            />
          </div>
          <Card.Footer>
            <small className="text-muted" id="recipeName">
              {content.name} by {content.userId.nikname}
            </small>
            <span className="likes" style={{ float: 'right' }}>
              <FaRegThumbsUp />
              <FaThumbsUp />
            </span>
          </Card.Footer>
        </Card>
      </Link>

      <br></br>
    </div>
  );
};

export default RecipeItem;
