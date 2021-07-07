const SmallArticle = ({ article }) => {
    return (
        <div className="article">
            <h3>{article.title}</h3>
            <p>{article.text}</p>
            <p>{article.day}</p>
        </div>
    )
}

export default SmallArticle
