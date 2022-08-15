import React from 'react';
import { useSelector } from "react-redux";

const CantidadPokemonHook = ()=>{
    const game_shop = useSelector((state) => state.game_shop.pokemon)
    return (
        <React.Fragment>
            Unidades: {game_shop}
        </React.Fragment>
    )
}

export default CantidadPokemonHook;

//React-redux nos proporciona meodos para trabajar con estas funciones
//1. useSelector() para obtener estados
//2. usaDispatch() para enviar acciones