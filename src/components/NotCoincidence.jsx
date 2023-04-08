import '../styles/NotCoincidence.css'

const NotCoincidence = ({data}) => {  
    return (
        <div className='toast' style={{display: data}}>
            <h1>This pokemon does not exist in our pokedex</h1>
            <img src="/pokemon5.jpg" alt="" />
            <h3>If you want to add a new one, <a href="tel:+5491124002961">contact us.</a> </h3>
        </div>
    )}
export default NotCoincidence