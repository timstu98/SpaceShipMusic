import Decompression from "../static/images/decompression.jpg"

const SmallArticle = ({ article }) => {
    return (
        <div className="small-article article">
            <img src={Decompression} alt="Article"/>
            <div className="text-wrapper">
                <div><h3>{article.title}</h3></div>
                <div><p>{article.text}</p></div>
                <div><p>{article.day}</p></div>
            </div>
        </div>
    )
}

export default SmallArticle
