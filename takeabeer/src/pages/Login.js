import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../_actions/user_action";
import '../css/auth/Login.css'
import { Link } from "react-router-dom";

function Login() {

    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value);
    }
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    }

    const dispatch = useDispatch();

    const onSubmitHandler = (event) => {
        // 버튼만 누르면 리프레시 되는것을 막아줌
        event.preventDefault();

        console.log('Email', Email);
        console.log('Password', Password);
        
        let body = {
            email: Email,
            password: Password,
        }

        dispatch(loginUser(body));
    }

    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center', 
            width: '100%', height: '100vh', background: '#F1EBC6'
        }}>
            <div className="authWhiteBox">
                <div className="authTitle">로그인</div>
                <div className="authSubTitle">가입하신 이메일 주소로 로그인하세요</div>
            <form className="formContainer" style={{ display: 'flex', flexDirection: 'column', width: '433px'}} onSubmit={onSubmitHandler}>
                <input type='email' value={Email} onChange={onEmailHandler} className="emailInput" placeholder="이메일 주소"/>
                <input type='password'value={Password} onChange={onPasswordHandler} className="passwordInput" placeholder="비밀번호"/>
                <br />
                <button formAction='' className="loginBtn">
                    로그인
                </button>
                <Link to='/register' style={{ textDecoration: "none", color: '#FFFEF3'}} className="registerBtn">
                    회원가입
                </Link>
            </form>
            
            </div>
        </div>
    )
}

export default Login;