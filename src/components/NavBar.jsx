import '../styles/navBar.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux"
import { namePok } from '../store/slices/searchName.slice'
import { useState } from 'react'


const NavBar = () => {
 
    const navigate = useNavigate()
    const dispatch = useDispatch()
    

    const searchPokemon= (e) => {
        e.preventDefault()
        dispatch(namePok(e.target[0].value.toLowerCase()))
        navigate( "/search" )
    }
  
    return (
        <nav className="navBar">
            <div className='image'>
                <button onClick={ () => navigate(-1) }> <img src="./atras.png" alt="" /> </button>
            </div>
            
            <div className='nav'>
                    <ul className='change' id="change">
                        <li> <Link to={`/`}>Login</Link> </li>
                        <li> <Link to={`/pokedex`}>Home</Link> </li>
                        <li> <Link to={`/history`}>Pokemons History</Link> </li>
                    </ul>
            
            <form onSubmit={ (e) => searchPokemon(e)}>
                <input 
                type="text"
                placeholder='Search pokemon'
                id='search' />
                <button type= "submit" >
                <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </form>
            <img src="/kirlia2.jpg" alt="" />
            </div>
        </nav>

    )
}
export default NavBar