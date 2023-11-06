import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAnswerById } from "../../services/answerService";
import { getListQuestion } from "../../services/questionService";
import { getTopicById } from "../../services/topicService";
import ResultItem from "./ResultItem";
import "./Result.scss"
import { Button } from "antd";
const Result = () => {
    const { id } = useParams();
    const [ result , setResult ] = useState([]);
    const [ topic, setTopic ] = useState({});
    const [ loading, setLoading ] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchApi = async () => {
            const listAnswer = await getAnswerById(id);
            const listQuestion = await getListQuestion(listAnswer[0].topicId);
            const topic = await getTopicById(listAnswer[0].topicId);
            setTopic(topic);
            const result = [];
            for(let i = 0; i < listQuestion.length ; i++) {
                const option = {
                    ...listQuestion[i],
                    ...listAnswer[0].answers.find((item) => item.questionId === listQuestion[i].id)
                }
                result.push(option);
            }
            setResult(result);

        }
        fetchApi();
    }, [id]);
    const handleBack = () => {
        setLoading(true);
        navigate(`/quiz/${topic.id}`);
    }
    return (
        <>
            {
                result.length > 0 && <>
                    <form className="form-result">
                        <div className="form-result-title">
                            <h1>Kết quả chủ đề : {topic.name}</h1>
                        </div>
                        {
                            result.map((item, index) => (
                                <ResultItem item={item} index={index} key={item.id}/>
                            ))
                        }
                        <Button onClick={handleBack} loading={loading}>Làm lại</Button>
                    </form>
                </>
            }
        </>
    )
}
export default Result;