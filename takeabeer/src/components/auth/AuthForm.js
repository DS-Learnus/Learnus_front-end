import styled from "styled-components";
import { Link } from 'react-router-dom';
import { useState } from "react";


/**
 * 회원가입 로그인 폼
 */

const AuthFormBlock = styled.div`
    width: 433px;
    margin-left: auto;
    margin-right: auto;

    button {
        width: 100%;
        height: 51px;
        text-align: center;
        border-radius: 9px;
        border: none;
        color: white;

        font-size: 28px;    
        line-height: 32px;
    }    
    .login-btn {
        background: #EB9B3E;
        margin-top: 3.5rem;
        margin-bottom: 2.5rem;
    }
    .register-btn {
        background: #998A77;
    }
    #degreeTitle {
        color: #413E3E;
        font-size: 17px;
        margin-bottom: 18px;
        font-weight: 400;
    }
    .degreeBtn {
        width: 80px;
        height: 40px;
        background-color: #FFFEF3;
        color: #EB9B3E;
        border: 1px solid #EB9B3E;
        margin-left: 6px;
        margin-bottom: 4rem;

        font-weight: 400;
        font-size: 19px;
        line-height: 21px;

        &.active {
            background-color: #EB9B3E;
            color: white;
        }
    }
    .select {
        background: light-green;
    }

`;

const StyledInput = styled.input`
    border: none;
    border-bottom: 1px solid;
    padding-bottom: 0.5rem;
    margin-bottom: 3rem;
    outline: none;
    width: 100%;
    background-color: #FFFEF3;
`;

const AuthForm = ({ type, form, onChange, onSubmit, onClick }) => {

    const data = [1, 2, 3, 4, 5];
    const [select, setSelect] = useState('');
    const handleClick = (e) => {
        setSelect(e.target.value);
    }

    return (
        <AuthFormBlock>
            <form onSubmit={onSubmit}>
                <StyledInput autoComplete="username" name="username" placeholder="이메일 주소" onChange={onChange} value={form.username}/>
                <StyledInput autoComplete="new-password" name="password" placeholder="비밀번호" type="password" onChange={onChange} value={form.password}/>
                { type === 'register' && (
                    <StyledInput
                    autoComplete="new-password"
                    name="passwordConfirm"
                    placeholder="비밀번호 확인"
                    type="password"
                    onChange={onChange}
                    value={form.passwordConfirm}
                    />
                )}
            </form>
            <footer>
                { type === 'login' && (<button className="login-btn">로그인</button>)}
                { type === 'register' && (
                    <div>
                        <h5 id="degreeTitle">원하는 도수</h5>
                        <div>
                            {data.map((item, index) => {
                                return (
                                    <>
                                        <button
                                        value={index}
                                        onClick={() => handleClick(item)}
                                        className={`${select === item ? 'select' : ''}`}
                                        >{item}단계</button>
                                    </>
                                );
                            })}
                        </div>
                    </div>
                )}
                <button className="register-btn"><Link to="/register">회원가입</Link></button>
            </footer>
        </AuthFormBlock>
    )
}

export default AuthForm;