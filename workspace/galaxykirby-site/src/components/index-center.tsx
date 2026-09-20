import '../css/index.css'

import ESportsPhoto from '../assets/Splatoon-Photo.jpg'
import CodingPhoto from '../assets/HTML-Img.png'
import HardwarePhoto from '../assets/PC-Photo.jpg'
import BooksPhoto from '../assets/Bookshelf.jpg'

export default function IndexCenter() {
    return (
        <>
            <div id="index-center">
                <h2 className="index-title">I'm Chai, Nice To Meet You</h2>
                <p className="bio-text">I’m a nerd and deer who is always looking to better myself. 
                    If I’m not frolicking, I’m typing away in VS Code 
                    or absorbed in some really good JRPG.
                </p>
                <hr className="index-hr" />
                <p className="index-subtitle">My Numerous Hobbies</p>
                <div id="index-hobbies-container">
                    <div className="hobbies-row">
                        <div className="hobbies-box">
                            <button className="hobbies-btn">E-Sports</button>
                            <img className='hobbies-photo' src={ESportsPhoto} />
                        </div>
                        <div className="hobbies-box">
                            <button className="hobbies-btn">Coding</button>
                            <img className='hobbies-photo' src={CodingPhoto} />
                        </div>
                    </div>
                    <div className="hobbies-row">
                        <div className="hobbies-box">
                            <button className="hobbies-btn">Hardware</button>
                            <img className='hobbies-photo' src={HardwarePhoto} />
                        </div>
                        <div className="hobbies-box">
                            <button className="hobbies-btn">Books</button>
                            <img className='hobbies-photo' src={BooksPhoto} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}