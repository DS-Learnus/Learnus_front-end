import styled from "styled-components";
import { Link } from 'react-router-dom';

/** 
 * 회원가입/로그인 페이지 전체적인 틀
 */

/**화면 전체적인 틀*/
const AuthTemplateBlock = styled.div`
    background-color: #F1EBC6;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 5rem;
    padding-bottom: 5rem;
`;

/**가운데 위치하는 흰 박스 */
const WhiteBox = styled.div`
    .titleBox {
        display: block;
        text-align: center;
        padding-bottom: 6.6rem;
    }
    .title {
        font-weight: 700;
        font-size: 46px;
        padding-top: 1.5rem;
        padding-bottom: 1rem;
        line-height: 51px;
        margin-left: auto;
        margin-right: auto;
    }
    .subtitle {
        font-weight: 400;
        font-size: 22px;
        line-height: 24px;

        .login-link {
            color: #EB9B3E;
            padding-left: 2rem;
        }
    }
    background-color: #FFFEF3;
    padding-top: 6rem;
    padding-bottom: 6rem;
    width: 833px;
    border-radius: 20px;
`;

const AuthTemplate = ({ children, type }) => {

    return (
        <AuthTemplateBlock>
            <WhiteBox>
                <div className="titleBox">
                    {type === 'register' ? (<div className="title">회원 가입</div>) : (<div className="title">로그인</div>)}
                    {type === 'register' ? (
                    <div className="subtitle">이미 Take a Beer 회원이신가요? 
                        <Link to="/login" className="login-link" style={{ textDecoration: "none", color: '#EB9B3E'}}>로그인</Link>
                    </div>
                    ) : (<div className="subtitle">가입하신 이메일 주소로 로그인하세요.</div>)}
                    
                </div>
                { children }
            </WhiteBox>
        </AuthTemplateBlock>
    )
}

export default AuthTemplate;