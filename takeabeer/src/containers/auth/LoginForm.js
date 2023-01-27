import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AuthForm from "../../components/auth/AuthForm";
import { changeField, initializeForm } from "../../modules/auth";
import { register } from '../../lib/api/auth';

const LoginForm = () => {
    const dispatch = useDispatch();
    const { form } = useSelector(({ auth }) => ({form: auth.login}));

    //input 변경 이벤트 핸들러
    const onChange = e => {
        const { value, name } = e.target;
        dispatch(
            changeField({
                form: 'login',
                key: name,
                value
            })
        );
    };

    // 폼 등록 이벤트 핸들러
    const onSubmit = e => {
        // 버튼만 누르면 리프레시 되는 것을 막아줌
        e.preventDefault();
        
        const { username, password } = form;
        dispatch(register({username, password}));
    };

    // 컴포넌트가 처음 렌더링될 때 form 초기화 작업
    useEffect(() => {
        dispatch(initializeForm('login'));
    },[dispatch]);

    return (
        <AuthForm 
        type="login"
        form={form}
        onChange={onChange}
        onSubmit={onSubmit}
        />
    )
}

export default LoginForm;