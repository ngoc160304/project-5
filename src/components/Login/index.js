import ButtonLogin from "./ButtonLogin";
import "./login.css";
const LoginQuiz = () => {
    return (
        <div className="form-login">
            <form className="form">
                <h1>Login Quiz</h1>
                <div>
                    <input type="text" placeholder="Địa chỉ email" className="input-login" required autoComplete="on"/>
                </div>
                <div>
                    <input type="password" placeholder="Mật khẩu" className="input-login" required autoComplete="on"/>
                </div>
                <ButtonLogin />
            </form>
        </div>
    )
}
export default LoginQuiz;