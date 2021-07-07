const SmallArticle = ({ article }) => {
    return (
        <div className="article">
            <h3>{article.text}</h3>
            <p>{article.day}</p>
        </div>
    )
}

export default SmallArticle
