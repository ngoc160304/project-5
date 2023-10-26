import { useNavigate } from "react-router-dom";
import { getCookie } from "../../helpers/cookie";
import { createAnswer, getAnswerByUser } from "../../services/answerService";

const ButtonSubmit = (props) => {
    const navigate = useNavigate();
    const { topicId } = props;
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
        let result = [];
        for(let i = 0; i < e.target.form.length; i++) {
            
            if(e.target.form[i].checked === true) {
                result.push({
                    questionId : parseInt(e.target.form[i].attributes[1].value) ,
                    answer :  parseInt(e.target.form[i].attributes[2].value)
                })
            }
        }
        const userId = getCookie("userId");
        const option = {
            userId : parseInt(userId),
            topicId : parseInt(topicId),
            answers : [...result]
        }
        const fetchApi = async () => {
            await createAnswer(option);
            const data = await getAnswerByUser(userId, topicId);
            console.log(data[data.length -1]);
            navigate(`/result/${data[data.length -1].id}`)
        }
        fetchApi();
    }
    return (
        <>
            <input type="submit" value="Nộp bài" onClick={handleSubmit} className="button-submit"/>
        </>
    )
}
export default ButtonSubmit;