import Articles from "./Articles";
import LandingImage from "./LandingImage";
import Playlists from "./Playlists";
import './Home.css';

const Home = ({smallArticles, majorArticle}) => {
    return (
        <div>
            <h1>My app!</h1>
            <LandingImage/>
            <Articles smallArticles={smallArticles} majorArticle={majorArticle}/>
            <Playlists/>
        </div>
    )
}

export default Home
