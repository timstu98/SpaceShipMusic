const Playlist = (props) => {
    return (
        <div className="playlist">
            <img src={props.source} alt="Playlist"/>
            <h2>Spotify 1</h2>
            <p>Click Here</p>
            <div className="arrow"/>
        </div>
    )
}

export default Playlist
