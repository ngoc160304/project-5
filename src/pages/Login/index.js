import { Form, Input, Button } from 'antd';
import { useNavigate } from "react-router-dom";
import { setCookie } from "../../helpers/cookie";
import { getUser } from "../../services/userService";
import { useDispatch } from "react-redux";
import { checkLogin } from "../../action/account";
import {  useState } from 'react';
import "./Login.scss"
const Login = () => {
    const [ message, setMessage ] = useState(false);
    const [ loading, setLoading ] = useState(false);
    const handleAuthen = (_, x) => {
        if(x.email === "" || x.password === "") {
            setMessage(false)
        }
    }
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogin = (user) => {
        const fetchApi = async () => {
            setLoading(true)
            const account = await getUser(user.email, user.password);
            if(account.length > 0) {
                setCookie("token", account[0].token, 1000);
                setCookie("userId", account[0].id, 1000);
                dispatch(checkLogin(account[0].token));
                navigate("/");
            }
            else {
                setMessage(true)
                setLoading(false)
            }
        }               
        fetchApi();
    }
    
    return (
        <>
           <Form className='form-login' layout='vertical' 
                onFinish={(e) => (
                    handleLogin(e)
                )}
                onValuesChange = {
                    handleAuthen
                }
           >
                <div className='form-login__title'>
                    <h2>Đăng Nhập Tài Khoản</h2>
                </div>
                <Form.Item 
                    label = "Email đăng nhập :"
                    name = "email"
                    rules = {[
                        {
                            required: true,
                            message: "Vui lòng nhập địa chỉ email !"
                        },
                        {
                            type: "email",
                            message: "Email không hợp lệ"
                        }
                    ]}
                    className='form-login__account'
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label = "Mật khẩu :"
                    name = "password"
                    rules = {[
                        {
                            required: true,
                            message: "Vui lòng nhập mật khẩu !"
                        },
                        
                    ]}
                    className='form-login__account form-login__account--password'
                >
                    <Input.Password />
                </Form.Item>
                {
                    message &&  <Form.Item
                        label = "Tài khoản hoặc mật khẩu không chính xác !"
                        className ='form-login__authen'
                    />
                   
                }
               
               <Form.Item className="form-login__button-submit">
                    <Button htmlType="submit" loading={loading}>
                        Đăng nhập
                    </Button>
                </Form.Item>
        </Form>
        </>
    )
}
export default Login;
