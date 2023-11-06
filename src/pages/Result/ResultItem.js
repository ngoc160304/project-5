const ResultItem = (props) => {
    const { index, item } = props;
    return (
        <>
            <div className="form-result__item" key={item.id}>
                <p>Câu {index + 1} : {item.question}</p>
                <div className="form-result__answer-item">
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
        </>
    )
}
export default ResultItem;