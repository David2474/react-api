import { useState } from "react";

import './sass/App.scss'
import { Card } from "./components/Card";
import { Button } from './components/Button';
import { TiArrowLeftOutline } from "react-icons/ti";
import { TiArrowRightOutline } from "react-icons/ti";

const App = () => {


    const [pokemonId, setPokemonId] = useState(1);

    function sumaryId (){
            setPokemonId(pokemonId + 1)
    }

    function restId (){
            (pokemonId == 1) ?
            setPokemonId(1):
            setPokemonId(pokemonId - 1)
    }


    return(
        <>
            <div>
                <Card/>
            </div>
            <div className='button-container'>
                <Button 
                    icon={<TiArrowLeftOutline />}
                    handelClick={restId} 
                />
                <p>{pokemonId}</p>
                <Button 
                    icon={<TiArrowRightOutline />} 
                    handelClick={sumaryId}
                />
            </div>
        </>
    )
};


export default App;