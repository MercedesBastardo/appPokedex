import { Link } from 'react-router-dom'

import { useDispatch } from "react-redux"
import { changeName } from '../store/slices/user.slice'

const Login = () => {
  
    const dispatch = useDispatch()
    
    const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(changeName(e.target[0].value))
    }

    return (
        <div>
    
    <form action="" onSubmit={(e) => handleSubmit(e)}>
        <input type="text" />
        <button>Enviar</button>
    </form>

    <Link to="/pokedex">Lista de Pokemons</Link>
        </div>
    )     
}
export default Login