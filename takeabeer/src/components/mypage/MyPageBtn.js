import '../../css/MyPage/MyPageBtn.css'
import { Link } from 'react-router-dom'

const MyPageBtn = () => {
    return (
        <div className='Container'>
            <Link to="/mypageBeer" style={{ textDecoration: "none", color: '#FFFEF3'}}><span className='beerBtn'>BEER</span></Link>
            <Link to="/mypageRecipe" style={{ textDecoration: "none", color: '#FFFEF3'}}><span className='recipeBtn'>RECIPE</span></Link>
        </div>
    )
}

export default MyPageBtn;