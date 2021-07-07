import SmallArticle from './SmallArticle';
      
 const Articles = ({articles}) => {

    return (
        <>
            {articles.map((article) => (
                <SmallArticle key={article.id} article={article}/>
            ))}
        </>
    )
}

export default Articles
