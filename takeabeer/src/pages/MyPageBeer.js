import HeartItem from '../components/mypage/HeartItem';
import '../css/MyPage/MyPageBeer.css';
import { Container, Row, Col } from 'react-bootstrap';
import MyPageBtn from '../components/mypage/MyPageBtn';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import axios from 'axios';

const MyPageBeer = () => {
  const [likeBeerList, setLikeBeerList] = useState([]);
  const [likeRecipeList, setLikeRecipeList] = useState([]);

  // userId 불러오기
  const userId = useSelector((state) => state.user.loginSuccess.user._id);
  console.log(userId);

  // 리스트 불러오기
  useEffect(() => {
    console.log('MyPageBeer');
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/user/mypage/${userId}`);
        setLikeBeerList(response.data.mylikeBeer);
        setLikeRecipeList(response.data.myLikeRecipe);
        console.log(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  return (
    <div id="MyPageTemplate">
      <h1 className="MyPageTitle">MY PAGE</h1>
      <MyPageBtn />
      <div className="whiteBox">
        <Container>
          <Row>
            {likeBeerList.map((beerId) => {
              return (
                <Col md={3}>
                  <HeartItem beerId={beerId} />
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default MyPageBeer;
