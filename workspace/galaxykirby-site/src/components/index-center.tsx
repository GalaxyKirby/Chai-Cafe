import '../css/index.css'

export default function IndexCenter() {
    return (
        <>
            <div id="index-center">
                <h2 className="index-title">I'm Chai, Nice To Meet You</h2>
                <p className="bio-text">I’m a nerd and deer who is always looking to better myself. 
                    If I’m not frolicking, I’m typing away in VS Code 
                    or absorbed in the fantasy world of a video game.
                </p>
                <hr className="index-hr" />
                <p className="index-subtitle">My Numerous Hobbies</p>
                <div id="index-hobbies-container">
                    <div className="hobbies-row">
                        <div className="hobbies-box">
                            <button className="hobbies-btn">E-Sports</button>
                        </div>
                        <div className="hobbies-box">
                            <button className="hobbies-btn">Coding</button>
                        </div>
                    </div>
                    <div className="hobbies-row">
                        <div className="hobbies-box">
                            <button className="hobbies-btn">Hardware</button>
                        </div>
                        <div className="hobbies-box">
                            <button className="hobbies-btn">Books</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}