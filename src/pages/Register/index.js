import { Form } from "antd";
import "./Register.scss"
import { useState } from "react";
import FormRegister from "./FormRegister";
import { createAccount, getUserByEmail } from "../../services/userService";
import { useNavigate } from "react-router-dom";
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
function generateString() {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < 20; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
const Register = () => {
    const [ message , setMessage ] = useState(false);
    const [ typeInput, setTypeInput ] = useState(false);
    const [ loading, setLoading ] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        delete e.confirmPassword;
        setLoading(true)
        if(e.email.indexOf('@gmail.com') >= 0) {
            const fetchApi = async () => {
                const checkUser = await getUserByEmail(e.email);
                if(checkUser.length) {
                    setMessage(true)
                    setLoading(false)
                }
                else {
                    e.token = generateString()
                    await createAccount(e);
                    navigate("/login")
                }
            }
            fetchApi();
        }
        else {
            setTypeInput(true)
        }
    }
    const handleValueChange = (_, e) => {
        if(e.email === "" || e.fullName === "" || e.password === "") {
            setMessage(false);
        }
    }
    return (
        <>
            <Form 
                name = "register"
                className = "form-register"
                layout = "vertical"
                onFinish={handleSubmit}
                onValuesChange={handleValueChange}
            >
                <div className="form-register__title">
                    <h2>Đăng ký tài khoản</h2>
                </div>
               <FormRegister message={message} typeInput={typeInput} loading={loading}/>
            </Form>
        </>
    )
}
export default Register;