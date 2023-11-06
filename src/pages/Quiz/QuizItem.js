const QuizItem = (props) => {
    const { item, index} = props;
    return (
        <div className="quiz__item">
            <p>Câu {index + 1} : {item.question}</p>
            <div className="quiz__answer-item">
                {
                    item.answers.map((answer, i) => (
                        <p key={i}>
                            <input type="radio" name={item.id} answer={i} value={`${index}-${i}`} required={i === 0 && true}/> <label>{answer}</label>
                        </p>
                    ))
                }
            </div>
        </div>
    )
}
export default QuizItem