import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'



const PokemonCard = ({url})=> {
    const [ detail, setDetail ] = useState({})
    let type= detail?.types?.[0]?.type?.name
    let componentClassName = "typePokemons"
    useEffect( () => {

        axios
        .get( url )
        .then( resp => setDetail(resp?.data) )

    }, [url] )
    
   

            switch ( type ) {

                case "grass":
                    componentClassName += " bg-green"
                    break;
                case "fire":
                    componentClassName += " bg-red-rose"
                    break;
                case "water":
                    componentClassName += " bg-softblue"
                    break;
                case "bug":
                    componentClassName += " bg-darkgreen"
                    break;
                case "normal":
                    componentClassName += " bg-violetbrouw"
                    break;
                    case "poison":
                    componentClassName += " bg-violet"
                    break;
                case "electric":
                    componentClassName += " bg-yellow"
                    break;
                case "ground":
                    componentClassName += " bg-softbrouw"
                    break;
                case "fairy":
                    componentClassName += " bg-fuchsia"
                    break;
                case "flying":
                    componentClassName += " bg-blugrey"
                    break;
                case "rock":
                    componentClassName += " bg-brouw"
                    break;
                case "ghost":
                    componentClassName += " bg-blueViolet"
                    break;
                case "steel":
                    componentClassName += " bg-greengrey"
                    break;
                case "ice":
                    componentClassName += " bg-bluesoft"
                    break;
                case "dragon":
                    componentClassName += " bg-turquoise"
                    break;
                case "fighting":
                    componentClassName += " bg-softbrown"
                    break;
                case "psychic":
                    componentClassName += " bg-daskpink"
                    break;
                case "dark":
                    componentClassName += " bg-softblack"
                    break;
                default:
                    break;
            }
       

    return (
        <Link to={`/pokemons/${detail?.name}`}>
        <div className='pokemonCard'>
            <li className={componentClassName}>
                <h1>{ `@${detail?.name}` }</h1>
                <img src={ detail.sprites?.front_default === null ? "/ditto.png" : detail?.sprites?.other['official-artwork']?.front_default } alt="" />
                <h3><span>{`${detail?.stats?.[0]?.stat?.name}:`}</span> <span>{detail?.stats?.[0]?.base_stat}</span></h3>
                <h3><span>{`${detail?.stats?.[1]?.stat?.name}:`}</span> <span>{detail?.stats?.[1]?.base_stat}</span></h3>
                <h3><span>{`${detail?.stats?.[2]?.stat.name}:`}</span> <span>{detail?.stats?.[2]?.base_stat}</span></h3>
                <h3><span>{`${detail?.stats?.[5]?.stat?.name}:`}</span> <span>{detail?.stats?.[5]?.base_stat}</span></h3>
            </li>
        </div>
        </Link>
    )
}
export default PokemonCard