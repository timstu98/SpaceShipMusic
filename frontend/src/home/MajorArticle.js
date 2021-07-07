import { useEffect } from "react";

const MajorArticle = ({article}) => {
    useEffect(() => {
        console.log(article)
    }, [])

    return (
        <div className="major-article article">
            <h3>{article.title}</h3>
            <p>{article.text}</p>
            <p>{article.day}</p>
        </div>
    )
}

export default MajorArticle
