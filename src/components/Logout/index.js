import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../action/account";
import { deleteCookie } from "../../helpers/cookie";

const Logout = () => {
    const dispatch = useDispatch();
    const handleLogout = () => {
        deleteCookie("token");
        deleteCookie("userId");
        dispatch(logout());
    }
    return (
        <>
            <Link to="/" onClick={handleLogout}>Log out</Link>
        </>
    )
}
export default Logout;