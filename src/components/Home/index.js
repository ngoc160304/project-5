import { useSelector } from "react-redux";
import "./home.css"
const HomePage = () => {
    const token = useSelector(state => state.accountReducer);
    return (
        <>
            <div className="home">
                {
                    token && <div className="logsin-success">
                        <div className="title">Chúc mừng bạn đã đăng kí thành công ^^</div>
                        <button className="button-home">Danh sách chủ đề ôn luyện</button> <button className="button-home">Danh sách các bài đã luyện</button>
                        <hr/>
                    </div>

                }
                <div className="content">
                    <p>React là thư viện JavaScript phổ biến nhất để xây dựng giao diện người dùng (UI). Nó cho tốc độ phản hồi tuyệt vời khi user nhập liệu bằng cách sử dụng phương pháp mới để render trang web.</p>
                    <p>Components của công cụ này được phát triển bởi Facebook. Nó được ra mắt như một công cụ JavaScript mã nguồn mở vào năm 2013. Hiện tại, nó đã đi trước các đối thủ chính như Angular và Bootstrap, hai thư viện JavaScript bán chạy nhất thời bấy giờ.</p>
                    <p>Trong trang web này sẽ có nhưng câu hỏi trắc nhiệm kiến thức nền tảng về html, css, js giúp bạn có thể tiếp cận ReactJS một cách dễ dàng hơn</p>
                </div>
            </div>
        </>
    )
}
export default HomePage;