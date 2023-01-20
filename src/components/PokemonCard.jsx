

const PokemonCard = ({data})=> {
    return (
        <div>
            <h1>listar Pokemons</h1>
            <p>{data[5].name}</p>
        </div>
    )
}
export default PokemonCard