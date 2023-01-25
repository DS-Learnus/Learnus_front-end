import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import { FaRegThumbsUp, FaThumbsUp } from 'react-icons/fa'

const RecipeItem = () => {
  return (
    <div>
          <Card style={{ width: '18rem', display: 'flex' }}>
          <Link to="#recipeDetail">
            <Card.Img variant="top" src="https://picsum.photos/250/250 " alt="제조 완료된 사진"/>
          </Link>
      <Card.Footer>
          <small className="text-muted" id="recipeName">레시피 이름 by 작성자</small>
          <span className="likes" style={{float: 'right'}}>
          <FaRegThumbsUp />
          <FaThumbsUp />
          </span>

        </Card.Footer>
    </Card>


    <br></br>
    </div>
  )
}

export default RecipeItem