import { useSelector } from "react-redux";
import { Button } from "antd"
import { Link } from "react-router-dom"
import "./Home.scss"
import { useState } from "react";
const Home = () => {
    const token = useSelector(state => state.accountReducer);
    const [ loading1, setLoading ] = useState(false);
    const [ loading2, setLoading2 ] = useState(false)
    return (
        <>
            <div className="home">
                {
                    token && <div className="home__success">
                        <p className="home__title">Chúc mừng bạn đã đăng kí thành công ^^</p>
                        <div className="home__link">
                            <Link to="/topic">
                                <Button className="home__button" onClick={() => {setLoading(true)}} loading={loading1}>Danh sách chủ đề ôn luyện</Button> 
                            </Link>
                            <Link to="/answer">
                                <Button className="home__button" onClick={() => {setLoading2(true)}} loading={loading2}>Danh sách các bài đã luyện</Button>
                            </Link>
                        </div>
                        <hr className="home__hr"/>
                    </div>

                }
                <div className="home__content">
                    <p>React là thư viện JavaScript phổ biến nhất để xây dựng giao diện người dùng (UI). Nó cho tốc độ phản hồi tuyệt vời khi user nhập liệu bằng cách sử dụng phương pháp mới để render trang web.</p>
                    <p>Components của công cụ này được phát triển bởi Facebook. Nó được ra mắt như một công cụ JavaScript mã nguồn mở vào năm 2013. Hiện tại, nó đã đi trước các đối thủ chính như Angular và Bootstrap, hai thư viện JavaScript bán chạy nhất thời bấy giờ.</p>
                    <p>Trong trang web này sẽ có nhưng câu hỏi trắc nhiệm kiến thức nền tảng về html, css, js giúp bạn có thể tiếp cận ReactJS một cách dễ dàng hơn</p>
                </div>
                
               
            </div>
        </>
    )
}
export default Home;