import "./index.css";

import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Header from "./common/Header";
import Footer from "./common/Footer";
import Home from "./home/Home";
import AboutUs from "./aboutUs/AboutUs";

function App() {
  const data1 = "Egg";

  const [smallArticles, setSmallArticles] = useState([]);
  const [majorArticle, setMajorArticle] = useState({});

  useEffect(() => {
    const getSmallArticles = async () => {
      const smallArticlesFromServer = await fetchSmallArticles();
      setSmallArticles(smallArticlesFromServer);
    };

    getSmallArticles();

    const getMajorArticle = async () => {
      const majorArticleFromServer = await fetchMajorArticle();
      setMajorArticle(majorArticleFromServer);
    };

    getMajorArticle();
  }, []);

  const fetchSmallArticles = async () => {
    const res = await fetch("http://localhost:5000/smallArticles");
    const data = await res.json();

    return data;
  };

  const fetchMajorArticle = async () => {
    const res = await fetch("http://localhost:5000/majorArticle");
    const data = await res.json();

    return data;
  };

  return (
    <Router>
      <div className="container">
        <Header foo="Egg" />
        <div className="content">
          {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/aboutUs">
              <AboutUs />
            </Route>
            <Route path="/">
              <Home smallArticles={smallArticles} majorArticle={majorArticle}/>
            </Route>
          </Switch>
        </div>
        <Footer foo={data1} />
      </div>
    </Router>
  );
}

export default App;

// const addArticle = async (article) => {
//   const res = await fetch(`http://localhost:5000/articles`, {
//   method: 'POST',
//   headers: {
//     'Content-type': 'application/json'
//   },
//     body: JSON.stringify(article)
//   })

//   const data = res.json()

//   setArticles([...articles, data])
// }

// const deleteArticle = async (id) => {
//   await fetch(`http://localhost:5000/articles/${id}`, {
//     method: 'DELETE'
//   })

//   setArticles(articles.filter((article) => article.id !== id))
// }
