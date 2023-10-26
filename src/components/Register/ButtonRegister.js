import { useNavigate } from "react-router-dom";
import { createAccount, getUser } from "../../services/userService";

const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
function generateString() {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < 20; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}
const ButtonRegister = () => {
    const navigate = useNavigate();
    const handleRegister = (e) => {
        e.preventDefault();
        const option = {
            fullName : e.target.form[0].value,
            email : e.target.form[1].value,
            password : e.target.form[2].value,
            token : generateString()
        }
        const fetchApi = async () => {
            const data = await getUser(option.email, option.password);
            if(data.length === 0) {
                await createAccount(option);
                navigate("/login")
            }
        }
        fetchApi();
    }
    return (
        <>
            <input type="submit" value="Register" className="button-authen" onClick={handleRegister}/>
        </>
    )
}
export default ButtonRegister;