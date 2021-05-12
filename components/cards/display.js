const CardDisplay = ({ title, content }) => {

    return (
        <div className="card__display">
            <h2>{title}</h2>
            <div>{content}</div>
        </div>
    )

}

export default CardDisplay;