import React from 'react'
import RecipeItem from '../components/RecipeItem'
import { Container, Col, Row, Button } from 'react-bootstrap'
import PaginationElements from '../components/PaginationElements'
import './RecipeList.css'

const RecipeList = () => {
  return (
    <div id="recipelistbody">
      <h1 className="listTitle" style={{color: "#F1EBC6"}}>Recipe List</h1>
      <p className="listText">맥주를 활용한 다양한 레시피를 소개합니다</p>
      <Button variant="warning" href="/AddRecipe" id="recipeBtn">Add Recipe</Button>
      <Container>
        <Row>
          <Col md={3}><RecipeItem /></Col>
          <Col md={3}><RecipeItem /></Col>
          <Col md={3}><RecipeItem /></Col>
          <Col md={3}><RecipeItem /></Col>
          <Col md={3}><RecipeItem /></Col>
          <Col md={3}><RecipeItem /></Col>
          <Col md={3}><RecipeItem /></Col>
          <Col md={3}><RecipeItem /></Col>
        </Row>
      </Container>
      <PaginationElements />
    </div>
  )
}

export default RecipeList