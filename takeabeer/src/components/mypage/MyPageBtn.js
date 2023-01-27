import '../../css/MyPage/MyPageBtn.css'
import { Link } from 'react-router-dom'

// Beer 좋아요 목록 버튼 / Recipe 좋아요 목록 버튼

const MyPageBtn = () => {
    return (
        <div className='MyPageContainer'>
            <Link to="/mypageBeer" style={{ textDecoration: "none", color: '#FFFEF3'}}><span className='beerBtn'>BEER</span></Link>
            <Link to="/mypageRecipe" style={{ textDecoration: "none", color: '#FFFEF3'}}><span className='recipeBtn'>RECIPE</span></Link>
        </div>
    )
}

export default MyPageBtn;