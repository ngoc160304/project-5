import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getListQuestion } from "../../services/questionService";
import { createAnswer, getAnswerByUser } from "../../services/answerService";
import { getCookie } from "../../helpers/cookie";
import { getTopicById } from "../../services/topicService";
import "./Quiz.scss"
import { Button } from "antd";
import QuizItem from "./QuizItem";

const QuizQuestion = () => {
    const { id } = useParams();
    const [ questions, setQuestions ] = useState([]);
    const [ topic, setTopic ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchApi = async () => {
            const data = await getListQuestion(id);
            const dataTopic = await getTopicById(id);
            setTopic(dataTopic);
            setQuestions(data);
        }
        fetchApi();
    }, [id]);
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        console.log(e);
        console.log(e.target[0])
        let result = [];
        for(let i = 0; i < e.target.elements.length; i++) {
            
            if(e.target[i].checked === true) {
                result.push({
                    questionId : parseInt(e.target[i].attributes[1].value) ,
                    answer :  parseInt(e.target[i].attributes[2].value)
                })
            }
        }
        const userId = getCookie("userId");
        const option = {
            userId : parseInt(userId),
            topicId : parseInt(id),
            answers : [...result]
        }
        const fetchApi = async () => {
            await createAnswer(option);
            const data = await getAnswerByUser(userId, id);
            console.log(data[data.length -1]);
            navigate(`/result/${data[data.length -1].id}`)
        }
        fetchApi();
    }
    return (
        <>
             {
                questions.length && <div className="quiz">
                    <h1>Câu hỏi chủ đề {topic.name}</h1>
                    <form className="quiz__form" onSubmit={handleSubmit}>
                        {
                            questions.map((item, index) => (
                                <QuizItem key={item.id} item={item} index={index}/>
                            ))
                        }
                        <Button htmlType="submit" className="button-submit" loading={loading} >
                            <input type="submit" value="Nộp Bài" onSubmit={handleSubmit} />
                        </Button>
                    </form>
                </div>
            }
        </>
    )
}
export default QuizQuestion;