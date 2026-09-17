import '../css/index.css'
import Hero from '../components/hero'
import IndexCenter from '../components/index-center'
import IndexSide from '../components/index-side'

/* Images */
import Metaphor from '../assets/Metaphor-Icon.png'
import PokemonBW from '../assets/Pokemon-BW-Icon.png'
import Splatoon3 from '../assets/Splatoon-3.png'
import Reload from '../assets/Persona-3-Reload-Icon.webp'

import Arcanine from '../assets/Arcanine-Portrait.png'
import Espeon from '../assets/Espeon-Portrait.png'
import Bulbasaur from '../assets/Bulbasaur.png'
import Dragonite from '../assets/Dragonite-Portrait.png'

import KirbyCoffee from '../assets/kirby-eating-coffee.gif'
import ChaiPfp from '../assets/Chai_pfp.png'
import ChaiCosplay from '../assets/Chai-Metaphor.png'
import CatCoffee from '../assets/cat-with-coffee.gif'

export default function Index() {
    return (
        <>
            <body>
                <Hero />
                <br />
                <div id="index-content">
                    <div className="border-photo-div">
                        <img className="border-photo-left" src={ChaiCosplay} />
                        <img className="border-photo-left" src={KirbyCoffee} />
                    </div>
                    <IndexSide 
                        image1={Metaphor} image2={PokemonBW}
                        image3={Splatoon3} image4={Reload}

                        name1="Metaphor Refantazio" name2="Pokemon Gen 5"
                        name3="Splatoon 3" name4="Persona 3 Reload"
                    />

                    <IndexCenter />

                    <IndexSide
                        image1={Arcanine} image2={Espeon}
                        image3={Bulbasaur} image4={Dragonite}

                        name1="Arcanine" name2="Espeon"
                        name3="Bulbasaur" name4="Dragonite"
                    />
                    <div className="border-photo-div">
                        <img className="border-photo-right" src={ChaiPfp} />
                        <img className="border-photo-right" src={CatCoffee} />
                    </div>
                </div>
            </body>
        </>
    )
}