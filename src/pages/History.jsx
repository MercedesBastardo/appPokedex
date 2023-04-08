import '../styles/history.css'
import NavBar from '../components/NavBar'
import Footer from "../components/Footer"
import Float from '../components/Float'

const History = () => { 
    return (
        <div>
            <NavBar/>
            <div className="history">
            <h1> Pokemons History</h1>
            <img src="/picachu.webp" alt="" />
            <p>The history of Pokémon (short for Pocket Monsters) begins in Japan, a country where a video game lover named Satoshi Tajiri, at just 25 years old, had the idea of designing a system in which several players could interact in a shared world. It was an ambitious idea for 1990, but it was the germ of what years later would become a worldwide success. Tajiri was lucky enough to work under the direction of the mythical Shigeru Miyamoto (father of Mario Bros) in several video games and after years of developing the idea, he presented his first Pokémon for the Game Boy portable console in February 1996. Two versions were released, Pokémon: "Red" and "Green", and later, "Blue" would be added. The game was an RPG (role playing game), which put the player in a world full of creatures that he had to collect and train. The great addition and main attraction was the possibility for players to interact and fight their Pokémon. The formula was as simple as it was addictive, the public turned massively to the game and the critics praised it over and over again. It didn't take long for it to become a global phenomenon.</p>
            <img src="/queEsUnPokemon.webp" alt="" />
            <p>The central creatures of this universe are obviously the Pokémon. At first there were 150 and the vast majority of them had some kind of power or special ability (such as fire, water or electricity). Several of these beings are mainly docile and do not show signs of aggression, which makes them a perfect kind of pet (of course, this does not mean that there are some more aggressive ones, or that they prefer wildlife). Pokémon can travel in Pokeballs, capsules in which collectors can trap their creatures and take them out when it's time to put them to battle. In fiction, Pokémon masters are recurring, characters dedicated to collecting and training their creatures in order to make them stronger. In fact, Pokémon have the possibility to evolve and become more powerful. These beings can say only one word: their own name (one of the exceptions to this rule is Meowth, the Pokémon that accompanies the villains of Team Rocket).</p>
            <img src="/pokemonTv.avif" alt="" />
            <p>These days, the numbers of Pokemon are staggering. His world contains a television series divided into 19 seasons, whose chapters already exceed 900 installments, 18 films released in theaters in Japan (the new one will arrive precisely on July 16), several comic series, television specials, more than fifty video games distributed in several of the Nintendo consoles and now also the market for mobile applications. There is no doubt: 30 years after its debut, the Pokémon world is more alive than ever.</p>
            </div>
            <Float/>
            <Footer/>
        </div>
    )
}
export default History