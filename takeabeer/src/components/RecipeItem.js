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
        style={{ textDecoration: 'none' }}
      >
        <Card style={{ width: '18rem', display: 'flex' }}>
          <Card.Img
            variant="top"
            src="https://picsum.photos/250/250 "
            alt="제조 완료된 사진"
          />

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
