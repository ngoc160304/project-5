import { useEffect, useState } from "react";
import { getListTopic } from "../../services/topicService";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import "./Topic.scss"
const TopicQuestion = () => {
    const [ loading, setLoading ] = useState(false);
    const navigate = useNavigate();
    const [ listTopic, setListTopic ]= useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            const data = await getListTopic();
            setListTopic(data);
        }
        fetchApi();
    }, [])
    const handlePractice = (id) => {
        navigate(`/quiz/${id}`)
    }
    return (
        <>
            {
                listTopic.length > 0 &&
                <>
                    <div className="topic-content">
                        <h2>
                            Danh sách chủ đề ôn luyện
                        </h2>
                    </div>
                    <table className="topic">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Chủ đề</th>
                                    <th>Luyện tập</th>
                                </tr>
                            </thead>
                            <tbody>
                                    {
                                        listTopic.map((item, index) => (
                                            <tr key={item.id} >
                                                <td >{index + 1}</td>
                                                <td >{item.name}</td>
                                                <td >
                                                    <Button loading={loading} 
                                                        onClick={() => {handlePractice(item.id)}}
                                                        className="button-practice"
                                                    >
                                                        Làm Bài
                                                    </Button>
                                                </td>
                                            </tr>
                                        ))
                                    }
                            </tbody>
                    </table>
                </>
              
            }
        </>
    )
}
export default TopicQuestion;