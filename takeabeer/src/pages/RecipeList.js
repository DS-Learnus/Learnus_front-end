import React, { useEffect, useState } from 'react';
import RecipeItem from '../components/RecipeItem';
import { Container, Col, Row, Button } from 'react-bootstrap';
import PaginationElements from '../components/PaginationElements';
import '../css/RecipeList.css';
import Paginate from '../components/Paginate';
import axios from 'axios';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1); // 페이지네이션

  useEffect(() => {
    console.log('recipeListPage');
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/recipe/recipeList?page=${page}`);
        setRecipes(response.data.recipes);
        setTotalPage(response.data.beers.length);
        console.log(response.data.recipes);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [page]);

  // 레시피 목록 아이템 생성
  const listItem = () => {
    console.log(recipes);
    const list = recipes.map((recipe, index) => {
      return (
        <Col md={3} key={index}>
          <RecipeItem content={recipe} />
        </Col>
      );
    });
    return list;
  };

  return (
    <div id="recipelistbody">
      <h1 className="listTitle" style={{ color: '#F1EBC6' }}>
        Recipe List
      </h1>
      <p className="listText">맥주를 활용한 다양한 레시피를 소개합니다</p>
      <Button variant="warning" href="/addRecipe" id="recipeBtn">
        Add Recipe
      </Button>
      <Container>
        <Row>{listItem()}</Row>
      </Container>
      <div className="pageContainer">
        <Paginate page={page} setPage={setPage} totalPage={totalPage} />
      </div>
    </div>
  );
};

export default RecipeList;
