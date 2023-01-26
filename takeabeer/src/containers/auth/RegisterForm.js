import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AuthForm from "../../components/auth/AuthForm";
import { changeField, initializeForm } from "../../modules/auth";
import axios from "axios";

const RegisterForm = () => {
    const dispatch = useDispatch();
    const { form } = useSelector(({ auth }) => ({form: auth.register}));

    //input 변경 이벤트 핸들러
    const onChange = e => {
        const { value, name } = e.target;
        dispatch(
            changeField({
                form: 'register',
                key: name,
                value
            })
        );
    };

    const onClick = e => {
        const { value, name } = e.target.value;
        dispatch(
            changeField({
                form: 'register',
                key: name,
                value
            })
        );
    }

    const member = useSelector(state => state.register.form);

    // 폼 등록 이벤트 핸들러
    const onSubmit = (e) => {
        e.preventDefault();

        const { username, password, passwordConfirm } = form;
        if(password !== passwordConfirm){
            //오류 처리
            return;
        }

        dispatch(({ username, password }) => {
            axios.post('', { username, password })
        })
    };   


    // 컴포넌트가 처음 렌더링될 때 form 초기화 작업
    useEffect(() => {
        dispatch(initializeForm('register'));
    },[dispatch]);

    return (
        <AuthForm 
        type="register"
        form={form}
        onChange={onChange}
        onSubmit={onSubmit}
        onClick={onClick}
        />
    )
}

export default RegisterForm;