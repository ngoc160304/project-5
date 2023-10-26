import { useEffect, useState } from "react";
import { getListTopic } from "../../services/topicService";
import { useNavigate } from "react-router-dom";
import "./topic.css";
const TopicQuestion = () => {
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
                listTopic.length > 0 && <table className="table-topic">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Chủ đề</th>
                            <th>Làm Bài</th>
                        </tr>
                    </thead>
                    <tbody>
                            {
                                listTopic.map((item, index) => (
                                    <tr key={item.id} >
                                        <td >{index + 1}</td>
                                        <td >{item.name}</td>
                                        <td ><button onClick={() => {handlePractice(item.id)}} className="button-practice">Làm Bài</button></td>
                                    </tr>
                                ))
                            }
                    </tbody>
              </table>
              
            }
        </>
    )
}
export default TopicQuestion;