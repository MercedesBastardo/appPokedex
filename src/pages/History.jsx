import '../styles/history.css'
import NavBar from '../components/NavBar'
import Footer from "../components/Footer"

const History = () => {
    
    return (
        <div>
            <NavBar/>
            <div className="history">
            <h1> Pokemons History</h1>
            <img src="/picachu.webp" alt="" />
            <p>La historia de Pokémon (abreviatura de Pocket Monsters) comienza en Japón, país en el que un amante de los videojuegos llamado Satoshi Tajiri, con apenas 25 años tuvo la idea de diseñar un sistema en el que varios jugadores pudieran interactuar en un mundo compartido. Era una idea ambiciosa para 1990, pero fue el germen de lo que años más tarde se convertiría en un suceso a nivel mundial. Tajiri tuvo la suerte de trabajar bajo la dirección del mítico Shigeru Miyamoto (padre de Mario Bros) en varios videojuegos y luego de años de elaborar la idea, presentó en febrero de 1996 su primer Pokémon para la consola portátil Game Boy. Dos versiones salieron al mercado, Pokémon: "Red" y "Green", y luego, se sumaría el "Blue". El juego era un RPG (role playing game), que ponía al jugador en un mundo lleno de criaturas a las que debían coleccionar y entrenar. El gran agregado y principal atractivo era la posibilidad de que los jugadores interactúen y pongan a combatir sus Pokémones. La fórmula era tan sencilla como adictiva, el público se volcó masivamente al juego y la crítica lo elogió hasta el hartazgo. Poco tardó en convertirse en un fenómeno global.</p>
            <img src="/queEsUnPokemon.webp" alt="" />
            <p>Las criaturas centrales de este universo son, obviamente, los Pokémones. En un principio eran 150 y la gran mayoría de ellas presentaba algún tipo de poder o habilidad especial (como puede ser el fuego, el agua o la electricidad). Varios de estos seres son principalmente dóciles y no muestran signos de agresividad, lo que los convierte en una especie de mascota perfecta (claro que eso no quita que haya algunas más agresivas, o que prefieran la vida silvestre). Los Pokémones pueden viajar en las Pokebolas, unas cápsulas en las que los coleccionistas pueden tener atrapadas a sus criaturas y sacarlas cuando sea el momento de ponerlas a luchar. En la ficción, son recurrentes los maestros Pokémones, personajes dedicados a recolectar y entrenar a sus criaturas con el fin de hacerlas más fuertes. De hecho, los Pokémones tienen la posibilidad de evolucionar y volverse más poderosos. Estos seres pueden decir una sola palabra: su propio nombre (una de las excepciones a esta regla es Meowth, el Pokémon que acompaña a los villanos del equipo Rocket).</p>
            <img src="/pokemonTv.avif" alt="" />
            <p>En la actualidad, los números de Pokémon son asombrosos. Su mundo contiene una serie de televisión dividida en 19 temporadas, cuyos capítulos ya superan las 900 entregas, 18 películas estrenadas en los cines de Japón (la nueva llegará justamente el próximo 16 de julio), varias series de historietas, especiales televisivos, más de cincuenta videojuegos repartidos en varias de las consolas Nintendo y ahora también el mercado de las aplicaciones para celulares. Es indudable: a 30 años de su debut, el mundo Pokémon está más vivo que nunca.</p>
            </div>
            <Footer/>
        </div>
    )
}
export default History