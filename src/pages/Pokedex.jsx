import '../styles/Pokedex.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import PokemonCard from "../components/PokemonCard"
import { useSelector } from 'react-redux'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Float from '../components/Float'




const Pokedex = () => {

    const [data, setData] = useState([])
    const user = useSelector( state => state.user )
    const [ type, setType ] = useState( [] )

    useEffect(() => {
        axios
        .get( "https://pokeapi.co/api/v2/type" )
        .then( (resp) => setType( resp?.data?.results ))
        .catch( error => console.error(error) )

     axios
     .get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1279")
     .then((resp)=> setData(resp?.data?.results))
     .catch((error) => console.log(error))
    } , [])

    const selectedType = (e) => {
        const url = e.target.value
        axios
        .get( url )
        .then( resp =>{
            setData(resp?.data?.pokemon)
            setPag(1) })
        .catch( error => console.error(error) )
    }
    
    // Paginación

    const [pag, setPag] = useState(1)
    const numbersPag = 30
    const lastPag = pag * numbersPag
    const firstPag = lastPag - numbersPag
    const totalPag= Math.ceil(data.length / numbersPag) //43
    
    const pokemonsPag = data?.slice(firstPag, lastPag)
    
    const arrayPag = []
    for(let i =1; i <= totalPag; i++) {
        arrayPag.push(i)
    }

    return (
        <div className='pokedex'>
            {/* Barra de inicio */}
            <NavBar
            ></NavBar>
            {/* Encabezado de la pagina y buscar por tipo */}
            <div className='header'>
            <div className='text'>
            <h1>Hello {user}..!</h1>
            <h2>Welcome, Would you like to know more about your favorite pokemons?</h2>
            </div>

            <div className='type'>
            <label htmlFor="SelectType">Select Of Type The Pokemons</label>
            <select name="" id="SelectType" onChange={selectedType}>Select of type
            <option value="https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1279">All Pokemons</option>
                {
                    type?.map( type => (
                        <option value={type?.url} key={type?.name}> {type?.name} </option>
                    ) )
                }
            </select>
            </div>
            </div>
            
            <div className='pokCard'>
            {pokemonsPag?.map((pokemons, index) => {
            return (
                <PokemonCard
                url={ pokemons?.pokemon ? pokemons?.pokemon?.url : pokemons?.url }
                key={`nro ${index}`}></PokemonCard>
            )
           })}
           </div>
           {/* Interfaz de la paginación */}
           <div className='pagination'>
           <button className='previus'
           onClick={()=> setPag( pag - 1)}
           disabled= {pag === 1}
           >Previous</button>
           {arrayPag.map((numbers, index)=> { 
                return (
                <button 
                onClick={() => setPag(numbers) } 
                key={`nro ${index}`}>{numbers}</button>
            )})}
           <button className='next'
           onClick={()=> setPag( pag + 1)}
           disabled= {pag === totalPag}
           >Next</button> 
           </div>
           <div className='pagination2'>
                <button className='previus'
                onClick={()=> setPag( pag - 1)}
                disabled= {pag === 1}
                >-</button>
                
                <button className='pagActual'
                onClick={()=> setPag( pag )}
                >{pag}</button>
                <button className='pagActual'
                onClick={()=> setPag( pag + 1)}
                >{pag +1}</button>
                <button className='pagActual'
                onClick={()=> setPag( pag + 2)}
                >{pag + 2}</button>

                <button className='next'
                onClick={()=> setPag( pag + 1)}
                disabled= {pag === totalPag}
                >+</button> 
            
           </div>
           <Float/>
            <Footer/>
    
        </div>

    )
}
export default Pokedex