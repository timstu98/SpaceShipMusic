import Playlist from './Playlist';
import image_1 from "../static/images/DJOKO.jpg";
import image_2 from "../static/images/DJOKO.jpg";
import image_3 from "../static/images/DJOKO.jpg";

const Playlists = () => {
    return (
        <div className="playlists">
            <Playlist source={image_1} site=""/>
            <Playlist source={image_1} site=""/>
            <Playlist source={image_1} site=""/>
        </div>
    )
}

export default Playlists
