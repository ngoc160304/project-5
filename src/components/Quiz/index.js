import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getListQuestion } from "../../services/questionService";
import ButtonSubmit from "./ButtonSubmit";
import "./quiz.css"
import { getTopicById } from "../../services/topicService";

const QuizQuestion = () => {
    const { id } = useParams();
    const [ questions, setQuestions ] = useState([]);
    const [ topic, setTopic ] = useState([])
    useEffect(() => {
        const fetchApi = async () => {
            const data = await getListQuestion(id);
            const dataTopic = await getTopicById(id);
            setTopic(dataTopic);
            setQuestions(data);
        }
        fetchApi();
    }, [id]);
    return (
        <>
             {
                questions.length && <div className="form-answer">
                    <h1>Câu hỏi chủ đề {topic.name}</h1>
                    <form className="form">
                        {
                            questions.map((item, index) => (
                                <div className="question-item" key={item.id}>
                                    <p>Câu {index + 1} : {item.question}</p>
                                    <div className="answer-item">
                                        {
                                            item.answers.map((answer, i) => (
                                                <p key={i}>
                                                    <input type="radio" name={item.id} answer={i}/> <label>{answer}</label>
                                                </p>
                                            ))
                                        }
                                    </div>
                                </div>
                            ))
                        }
                        <ButtonSubmit topicId = {id}/>
                    </form>
                </div>
            }
        </>
    )
}
export default QuizQuestion;