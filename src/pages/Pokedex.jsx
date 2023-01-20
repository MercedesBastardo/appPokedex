import { useState, useEffect } from 'react'
import axios from 'axios'
import PokemonCard from "../components/PokemonCard"


const Pokedex = () => {

    const [data, setData] = useState([])

    useEffect(() => {
     axios
     .get("https://pokeapi.co/api/v2/pokemon")
     .then((resp)=> setData(resp.data.results))
     .catch((error) => console.log(error))
    } , [])

    return (
        <div>
            <h1>hola Dayana</h1>
            <PokemonCard
            data={data}></PokemonCard>
        </div>

    )
}
export default Pokedex