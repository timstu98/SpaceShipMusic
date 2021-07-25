// import { useEffect } from "react";
import Decompression from "../static/images/decompression.jpg"

const MajorArticle = ({article}) => {
    // useEffect((article) => {
    //     console.log(article)
    // }, [])

    return (
        <div className="major-article article">
            <img src={Decompression} alt="Article"/>
            <div className="text-wrapper">
                <div><h3>{article.title}</h3></div>
                <div><p>{article.text}</p></div>
                <div><p>{article.day}</p></div>
            </div>
        </div>
    )
}

export default MajorArticle
