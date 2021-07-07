import SmallArticle from './SmallArticle';
import MajorArticle from './MajorArticle';
      
 const Articles = ({smallArticles, majorArticle}) => {

    return (
        <div>
        <MajorArticle article={majorArticle}/>
        <>
            {smallArticles.map((article) => (
                <SmallArticle key={article.id} article={article}/>
            ))}
        </>
        </div>
    )
}

export default Articles
