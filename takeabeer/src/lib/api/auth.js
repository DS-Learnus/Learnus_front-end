import client from "./client";

//회원 인증에 필요한 API를 사용하기 쉽게 함수화하는 작업


//로그인
export const login = ({ username, password }) => 
    client.post('/api/auth/login', {username, password})

//회원가입
export const register = ({ username, password}) => 
    client.post('/api/auth/register', {username, password})

//로그인 상태 확인