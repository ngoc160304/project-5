import { useNavigate } from "react-router-dom";
import { setCookie } from "../../helpers/cookie";
import { getUser } from "../../services/userService";
import { useDispatch } from "react-redux";
import { checkLogin } from "../../action/account";

const ButtonLogin = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.form[0].value;
        const pass = e.target.form[1].value;
        console.log(email);
        console.log(pass);
        const fetchApi = async () => {
            const user = await getUser(email, pass);
            if(user) {
                console.log(user);
                setCookie("token", user[0].token, 1000);
                setCookie("userId", user[0].id, 1000);
                dispatch(checkLogin(user[0].token));
                navigate("/");
            }
            
        }
        fetchApi();
    }
    return (
        <>
            <input type="submit" value="Login" className="button-authen" onClick={handleLogin} autoComplete="on"/>
        </>
    )
}
export default ButtonLogin;