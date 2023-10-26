import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAnswerById } from "../../services/answerService";
import { getListQuestion } from "../../services/questionService";
import "./result.css"

const ResultQuestion = () => {
    const { id } = useParams();
    const [ result , setResult ] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            const listAnswer = await getAnswerById(id);
            const listQuestion = await getListQuestion(listAnswer[0].topicId);
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
    }, [id])
    return (
        <>
            {
                result.length > 0 && <div className="form-result">
                    <form className="form">
                    {
                            result.map((item, index) => (
                                <div className="question-item" key={item.id}>
                                    <p>Câu {index + 1} : {item.question}</p>
                                    <div className="answer-item">
                                        {
                                            item.answers.map((answer, i) => {
                                                let check = false;
                                                let className = "";
                                                if(i === item.answer) {
                                                    check = true;
                                                    className="red"
                                                }
                                                if((i === item.correctAnswer) && (item.answer || item.answer === 0)) {
                                                    className="green";
                                                }
                                                return (
                                                    <p key={i}>
                                                        <input type="radio" name={item.id} answer={i} disabled checked={check} /> <label className={className}>{answer}</label>
                                                    </p>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </form>
                </div>
            }
        </>
    )
}
export default ResultQuestion;