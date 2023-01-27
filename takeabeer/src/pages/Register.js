import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../_actions/user_action';
import '../css/auth/Register.css'
import { Link, useNavigate } from 'react-router-dom';
import { Navigate } from '../../node_modules/react-router-dom/dist/index';

function Register(props) {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [Email, setEmail] = useState("");
    const [Name, setName] = useState("");
    const [Password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");

    const data = [0, 1, 2, 3, 4];
    const [select, setSelect] = useState('');

    const toggleAction = e => {
        setSelect(() => {
            return e.target.value;
        });
    }

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value);
    }
    const onNameHandler = (event) => {
        setName(event.currentTarget.value);
    }
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    }
    const onConfirmPasswordHandler = (event) => {
        setConfirmPassword(event.currentTarget.value);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        if(Password !== ConfirmPassword){
            return alert('비밀번호와 비밀번호 확인이 같지 않습니다.')
        }

        let body = {
            email: Email,
            nickname: Name,
            password: Password,
            //confirmPassword: ConfirmPassword,
            userAbv: Number(select) + 1,
        }

        dispatch(registerUser(body))
        .then(response => {
            if(response.payload.success){
                navigate("/login");
            } else {
                alert('Error')
            }
        })
    }

    return (
        <div style={{ 
            display: 'flex', justifyContent: 'center', alignItems: 'center', 
            width: '100%', height: '100vh', background: '#F1EBC6'
            }}>
            <div className='authwhiteBox'>
            <div className='authTitle'>회원가입</div>
            <div className="authSubTitle">이미 Take a Beer 회원이신가요? 
                <Link to="/login" className="login-link" style={{ textDecoration: "none", color: '#EB9B3E'}}>로그인</Link>
            </div>
            <form className="formContainer" style={{ display: 'flex', flexDirection: 'column', width: '433px'}}
                onSubmit={onSubmitHandler}
            >
                <input type='email' value={Email} onChange={onEmailHandler} placeholder="이메일 주소" className='Input'/>
                <input type='text' value={Name} onChange={onNameHandler} placeholder="닉네임" className='Input'/>
                <input type='password' value={Password} onChange={onPasswordHandler} placeholder="비밀번호" className='Input'/>
                <input type='password' value={ConfirmPassword} onChange={onConfirmPasswordHandler} placeholder="비밀번호 확인" className='Input'/>
                <br />
                <div>
                    <h5 className="degreeTitle">원하는 도수</h5>
                    <div className="Container">
                            {data.map((item, index) => {
                                return(
                                    <div>
                                        <button
                                        value={index}
                                        className={"degreeBtn " + (index == select ? "active" : "")}
                                        onClick={toggleAction}
                                        type="button"
                                        >
                                            {item + 1}
                                        </button>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                <button formAction='' className='formBtn' type='submit'>
                    회원가입
                </button>
            </form>
            </div>
        </div>
    )
}

export default Register;