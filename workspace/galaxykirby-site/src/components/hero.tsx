import '../css/index.css'
import HeroImg from '../assets/hero-image.png'

export default function Hero() {
    return (
        <>
            <div id='hero-img'>
                <div className='hero-img-text-container'>
                    <h2 className='hero-img-front-txt'>Welcome To My Cafe!</h2>
                </div>
                <img className='hero-img-back' src={HeroImg} />
            </div>
        </>
    )
}