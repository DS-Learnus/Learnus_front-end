import axios from "axios";

export const login = ({ username, password }) => 
axios.post('/api/user/login', { username, password})

export const register = ({ username, password, passwordConfirm}) => 
axios.post('/api/user/register', { username, password, passwordConfirm})