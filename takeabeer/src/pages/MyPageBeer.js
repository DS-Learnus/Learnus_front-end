import HeartItem from '../components/mypage/HeartItem';
import '../css/MyPage/MyPageBeer.css'
import { Container, Row, Col } from "react-bootstrap";
import MyPageBtn from '../components/mypage/MyPageBtn';

const MyPage = () => {
    return (
        <div id='MyPageTemplate'>
            <h1 className='MyPageTitle'>MY PAGE</h1>
            <MyPageBtn/>
            <div className='whiteBox'>
                <Container>
                    <Row>
                        <Col md={3}>
                            <HeartItem />
                        </Col>
                        <Col md={3}>
                            <HeartItem />
                        </Col>
                        <Col md={3}>
                            <HeartItem />
                        </Col>
                        <Col md={3}>
                            <HeartItem />
                        </Col>
                        <Col md={3}>
                            <HeartItem />
                        </Col>
                        <Col md={3}>
                            <HeartItem />
                        </Col>
                        <Col md={3}>
                            <HeartItem />
                        </Col>
                        <Col md={3}>
                            <HeartItem />
                        </Col>
                        <Col md={3}>
                            <HeartItem />
                        </Col>
                        <Col md={3}>
                            <HeartItem />
                        </Col>
                        <Col md={3}>
                            <HeartItem />
                        </Col>
                        <Col md={3}>
                            <HeartItem />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default MyPage;