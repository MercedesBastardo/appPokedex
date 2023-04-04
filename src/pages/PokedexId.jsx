import '../styles/detailsPok.css'
import {  useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'


const PokedexId = () => {

    const { name } = useParams()
    const [ pokemon, setPokemon ] = useState({})
  

    useEffect(() => {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((resp)=> setPokemon( resp?.data ))
        .catch((error)=> console.log( error ))
    }, [])

    return (
        <div>
            <NavBar/>
            <div className='idCard'>
            <div className="pokedexId">
                <div className='part1'>
                    <div className='name'>
                        <h2>{`#${pokemon?.id}`}</h2>
                        <h1>{pokemon?.name}</h1>
                        <section className='measure'>
                            <h4><span>Height:</span> <span>{pokemon?.height}</span></h4>
                            <h4><span>Weight:</span> <span>{pokemon?.weight}</span></h4>
                        </section>
                    </div>
                    <div className='image'>
                        <img src= {pokemon?.sprites?.other['official-artwork']?.front_default} alt="" />
                        <section className='lotation'>
                        <i className="fa-solid fa-location-dot"></i>
                        <a href={`${pokemon?.location_area_encounters}`}>Lotation</a>
                        </section>
                    </div>

                </div>
            <div className='part2'>
                
                <section className='typeDetails'>
                    <h3>Types</h3>
                   <p>{pokemon?.types?.[0]?.type?.name}</p>
                   <p>{pokemon?.types?.[1]?.type?.name}</p> 
                </section>
                <section className='abilitisDetails'>
                    <h3>Abilities</h3>
                   <p>{pokemon?.abilities?.[0]?.ability?.name}</p>
                   <p>{pokemon?.abilities?.[1]?.ability?.name}</p> 
                </section>
            </div>
            <div className='part3'>
                <h2>Movements</h2>
              
                <ul>
                {
                    pokemon?.moves?.map( moves => (
                        <li key={moves?.move?.name}>{moves?.move?.name}</li>
                    ) )
                }
                </ul>
            </div>
            </div>
            </div>
            <Footer/>
        </div>
    )
}
export default PokedexId