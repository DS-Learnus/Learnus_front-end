import BestItem from '../components/mypage/BestItem';
import '../css/MyPage/MyPageRecipe.css'
import { Container, Row, Col } from "react-bootstrap";
import MyPageBtn from '../components/mypage/MyPageBtn';

const MyPageRecipe = () => {
    return (
        <div className='MyPageTemplateRecipe'>
            <h1 className='MyPageTitle'>MY PAGE</h1>
            <MyPageBtn/>
            <div className='whiteBox'>
                <Container>
                    <Row>
                        <Col md={3}>
                            <BestItem />
                        </Col>
                        <Col md={3}>
                            <BestItem />
                        </Col>
                        <Col md={3}>
                            <BestItem />
                        </Col>
                        <Col md={3}>
                            <BestItem />
                        </Col>
                        <Col md={3}>
                            <BestItem />
                        </Col>
                        <Col md={3}>
                            <BestItem />
                        </Col>
                        <Col md={3}>
                            <BestItem />
                        </Col>
                        <Col md={3}>
                            <BestItem />
                        </Col>
                        <Col md={3}>
                            <BestItem />
                        </Col>
                        <Col md={3}>
                            <BestItem />
                        </Col>
                        <Col md={3}>
                            <BestItem />
                        </Col>
                        <Col md={3}>
                            <BestItem />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default MyPageRecipe;