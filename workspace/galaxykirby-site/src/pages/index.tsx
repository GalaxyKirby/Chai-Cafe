import '../css/index.css'
import Hero from '../components/hero'
import IndexCenter from '../components/index-center'
import IndexSide from '../components/index-side'

/* Images */
import Metaphor from '../assets/Metaphor-Icon.png'
import PokemonBW from '../assets/Pokemon-BW-Icon.png'
import Splatoon3 from '../assets/Splatoon-3.png'


export default function Index() {
    return (
        <>
            <body>
                <Hero />
                <br />
                <div id="index-content">
                    <IndexSide image1=""/>
                </div>
            </body>
        </>
    )
}