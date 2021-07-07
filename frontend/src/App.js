import Header from "./components/Header";
import Articles from "./components/Articles";
import "./index.css";
import {useState,useEffect} from 'react';

function Footer(props) {
  return (
    <footer>
    <h1>Hello, this will be the footer, {props.foo}!</h1>
    </footer>
  )
}

function App() {

  const data1 = 'Egg'

  const [articles, setArticles] = useState([])

  useEffect(() => {
    const getArticles = async () => {
      const articlesFromServer = await fetchArticles()
      setArticles(articlesFromServer)
    }

    getArticles()
  }, [])

const fetchArticles = async () => {
  const res = await fetch('http://localhost:5000/articles')
  const data = await res.json()

  return data
}

const deleteArticle = async (id) => {
  await fetch(`http://localhost:5000/articles/${id}`, {
    method: 'DELETE'
  })

  setArticles(articles.filter((article) => article.id !== id))
}

const addTask = async (article) => {
  const res = await fetch(`http://localhost:5000/article`, {
  method: 'POST',
  headers: {
    'Content-type': 'application/json'
  },
    body: JSON.stringify(article)
  })

  const data = res.json()

  setArticles([...articles, data])

}

  return (
    <div className="container">
      <Header foo="Egg"/>
      <div className="container">
        <h1>My app!</h1>
        <Articles articles={articles}/>
      </div>
      <Footer foo={data1}/>
    </div>
  );
}

export default App;
