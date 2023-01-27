import HeartItem from '../components/mypage/HeartItem';
import '../css/MyPage/MyPageBeer.css'
import { Container, Row, Col } from "react-bootstrap";
import MyPageBtn from '../components/mypage/MyPageBtn';
import { useSelector } from 'react-redux';


const MyPageBeer = () => {

    const userId = useSelector(state => state.user.loginSuccess.user._id);
    console.log(userId);

    const likeBeerList = useSelector(state => state.user.loginSuccess.user.likeBeers);

    return (
        <div id='MyPageTemplate'>
            <h1 className='MyPageTitle'>MY PAGE</h1>
            <MyPageBtn/>
            <div className='whiteBox'>
                <Container>
                    <Row>
                        {likeBeerList.map((beerId) => {
                            return(
                                <Col md={3}>
                                    <HeartItem beerId={beerId}/>
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default MyPageBeer;