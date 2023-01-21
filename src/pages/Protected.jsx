
import { Outlet, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Protected = () => {
    const name = useSelector( state => state.user )

    if( name !== "" ){
        return <Outlet />
    }else{
        //redirigir a otra vista que sea publica
        return <Navigate to="/"/> 
    }

}

export default Protected