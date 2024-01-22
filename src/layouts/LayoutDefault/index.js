import { Layout } from 'antd';
import { Link, NavLink, Outlet } from 'react-router-dom';
import "./layoutDefault.scss"
import { useSelector } from 'react-redux';
import Logout from './Logout';
const { Footer, Content } = Layout;
const LayoutDefault = () => {
    const token = useSelector(state => state.accountReducer);
    return (
        <>
            <Layout>
                <header className='header'>
                    <Link className='header__logo' to="/">
                        Quizz
                    </Link>
                    {
                        token && <>
                            <ul className='header__menu'>
                                <li className='header__nav'>
                                    <NavLink to="/">
                                        Home
                                    </NavLink>
                                </li>
                                <li className='header__nav'>
                                    <NavLink to="/topic">
                                            Topic
                                    </NavLink>
                                </li>
                                <li className='header__nav'>
                                    <NavLink to="/answer">
                                            Answers
                                    </NavLink>
                                </li>
                            </ul>
                        </>
                    }
                    
                    <div className='header__account'>
                        {token  ? (
                            <>
                                <Logout />
                            </>
                        ) : (
                            <>
                                <NavLink to="/login">
                                    Đăng nhập
                                </NavLink>
                                <NavLink to="/register">
                                    Đăng ký
                                </NavLink>
                            </>
                        )}
                        
                    </div>
                </header>
                <Content className='content'>
                    <Outlet />
                </Content>
                <Footer className='footer'>Coppyreight by 28tech</Footer>
            </Layout>
        </>
    )
}
export default LayoutDefault;