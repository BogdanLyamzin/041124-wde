import "./Header.css";

const Header = ()=> {
    return (
        <header className="header">
            <video width="400" controls>
            <source src="mov_bbb.mp4" type="video/mp4" />
            <source src="mov_bbb.ogg" type="video/ogg" />
            Your browser does not support HTML video.
            </video>
            <img src="https://i0.wp.com/uploads.saigacdn.com/2024/01/dmc-peak-of-combat-google-play-pre-registration-00.jpg" />
            <h2>Site header</h2>
        </header>
    );
}

export default Header;