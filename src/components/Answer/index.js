import { useEffect, useState } from "react";
import {  getAnswerByUserId } from "../../services/answerService";
import { getCookie } from "../../helpers/cookie";
import { getListTopic } from "../../services/topicService";
import { useNavigate } from "react-router-dom";

const AnswersQuestion = () => {
    const navigate = useNavigate();
    const [ listAnswer, setListAnswer ] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            const answers = await getAnswerByUserId(getCookie("userId"));
            answers.reverse();
            const topic = await getListTopic();
            const result = [];
            for(let i = 0; i < answers.length; i++) {
                const option = {
                    ...answers[i],
                    topic : {
                        ...topic.find((item) => {
                            return item.id === answers[i].topicId;
                        })
                    }
                }
                result.push(option);
            }
            setListAnswer(result);
        }
        fetchApi();
    }, [])
    const handlePractice = (topicId) => {
        navigate(`/quiz/${topicId}`)
    }
    const handleResult = (id) => {
        navigate(`/result/${id}`)
    }
    return (
        <>
           
                    <h1>Danh sách chủ đề đã luyện</h1>
                    <table className="table-topic">
                        {
                            listAnswer.length > 0 && <>
                                <thead>
                                    <tr>
                                        <th>STT</th>
                                        <th>Chủ đề đã làm</th>
                                        <th>Kết quả</th>
                                        <th>
                                            Làm lại
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        listAnswer.map((item, index) => (
                                            <tr key={item.id}>
                                                <td>{index + 1}</td>
                                                <td>{item.topic.name}</td>
                                                <td><button className="button-practice" onClick={() => {handleResult(item.id)}}>Chi tiết kết quả</button></td>
                                                <td><button className="button-practice"  onClick={() => {handlePractice(item.topic.id)}}>Làm lại</button></td>
                                            </tr>
                                        ))
                                    }
                                    <tr>
                                    </tr>
                                </tbody>
                            </>
                        }
                    </table>
        </>
    )
}
export default AnswersQuestion;