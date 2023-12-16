import { useState, useEffect } from "react";

const App = () => {


    const [pokemonNumber, setPokemonNumber] = useState(1);
    const [pokemonName, setPokemonName] = useState('');


    function sumary() {
        setPokemonNumber(pokemonNumber +1);
    }

    useEffect(()=>{
        // llamados a la api
        // fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}/`)
        // .then(response=>response.json())
        // .then(data=>setPokemonName(data.name))


        serchPokemon(pokemonNumber)


    }, [pokemonNumber])

    const serchPokemon = async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}/`)
        const data = await response.json()
        setPokemonName(data.name)
    }
    

    return(
        <>
        <h1>value: {pokemonNumber} -- {pokemonName}</h1>
        <button
        onClick={sumary}
        >+1</button>
        </>
    )
};


export default App;