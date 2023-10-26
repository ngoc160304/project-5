import { Link, NavLink, Outlet } from "react-router-dom"
import "./layoutDefault.css";
import { useSelector } from "react-redux";
import Logout from "../../components/Logout";
const LayoutDefault = () => {
    const token = useSelector(state => state.accountReducer);
    return (
        <>
            <header className="header">
                <div className="logo">
                    <Link className="logo-img" to="/">Quiz</Link>
                </div>
                <div className="list-menu">
                    {
                        token && <>
                            <ul>
                                <NavLink to="/">Home</NavLink>
                                <NavLink to="/topic">Topic</NavLink>
                                <NavLink to="/answer">Answer</NavLink>
                            </ul>
                        </>
                    }
                </div>
                <div className="account">
                    {
                        token ? (
                            <Logout />
                        ) : (
                            <>
                                <NavLink to="login">Login</NavLink>
                                <NavLink to="register">Register</NavLink>
                            </>
                        )
                    }
                    
                </div>
            </header>
            <main className="main">
                <Outlet />
            </main>
            <footer className="footer">
                Copyright by 28tech
            </footer>
        </>
    )
}
export default LayoutDefault;