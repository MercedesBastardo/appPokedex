import { useState, useEffect } from 'react'
import axios from 'axios'
import PokemonCard from "../components/PokemonCard"
import { useSelector } from 'react-redux'


const Pokedex = () => {

    const [data, setData] = useState([])
    const user = useSelector( state => state.user )
    const [ type, setType ] = useState( [] )

    useEffect(() => {
        axios
        .get( "https://pokeapi.co/api/v2/type" )
        .then( (resp) => setType( resp.data.results ))
        .catch( error => console.error(error) )

     axios
     .get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1279")
     .then((resp)=> setData(resp.data.results))
     .catch((error) => console.log(error))
    } , [])

    const selectedType = (e) => {
        const url = e.target.value
        axios
        .get( url )
        .then( resp => setData(resp.data.pokemon) )
        .catch( error => console.error(error) )
    }

    return (
        <div>
            <h1>Hello {user}..!</h1>
            {/* aca voy a hacer el selector por tipo */}
            <div className='type'>
            <label htmlFor="SelectType">Select Of Type The Pokemons</label>
            <select name="" id="SelectType" onChange={selectedType}>Select of type
                {
                    type?.map( type => (
                        <option value={type.url} key={type.name}>{type.name}</option>
                    ) )
                }
            </select>
            </div>
            {data?.map((pokemons, index) => {
            return (
                <PokemonCard
                url={ pokemons.pokemon ? pokemons.pokemon.url : pokemons.url }
                key={`nro ${index}`}></PokemonCard>
            )
           })}
          
        </div>

    )
}
export default Pokedex