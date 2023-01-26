import '../styles/login.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux"
import { changeName } from '../store/slices/user.slice'

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(changeName(e.target[0].value))
    navigate( "/pokedex" )
    }

    return (
        <div className='login'>
            <div className='text2'>
                <h2> <span> POKEDEX</span></h2>
            </div>
            <div className='circle'>
                <img src="/pokemon7.jpg" alt="" />
            </div>
            <div className='text1'>
                <h1>"HELLO"</h1>
            <h2>
                Enter your name and have fun
            </h2>
            </div>
            <form action="" onSubmit={(e) => handleSubmit(e)}>
                <input 
                type="text"
                placeholder='Your name' />
                <button>Enter</button>
            </form>
            
        </div>
    )     
}
export default Login