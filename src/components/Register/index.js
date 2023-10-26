import ButtonRegister from "./ButtonRegister";

const RegisterAccount = () => {
    return (
        <div className="form-login">
            <form className="form">
                <h1>Register Quiz</h1>
                <div>
                    <input type="text" placeholder="Tên đăng nhập" className="input-login" required autoComplete="on"/>
                </div>
                <div>
                    <input type="text" placeholder="Địa chỉ email" className="input-login" required autoComplete="on"/>
                </div>
                <div>
                    <input type="password" placeholder="Mật khẩu" className="input-login" required autoComplete="on"/>
                </div>
                <ButtonRegister />
            </form>
        </div>
    )
}
export default RegisterAccount;