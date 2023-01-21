import { useState, useEffect } from 'react'
import axios from 'axios'

const PokemonCard = ({url})=> {
    const [ detail, setDetail ] = useState({})

    useEffect( () => {

        axios
        .get( url )
        .then( resp => setDetail(resp.data) )

    }, [url] )


    return (
        <li className="pokemonCard">
        <img src={ detail.sprites?.front_default } alt="" />
        <h4>{ detail?.name }</h4>
    </li>
    )
}
export default PokemonCard