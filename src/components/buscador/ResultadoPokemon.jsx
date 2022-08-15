import React from "react";
import { useSelector } from "react-redux";
import './ResultadoPokemon.css'

const ResultadoPokemon = () => {
    const buscador = useSelector((state) => state.buscador)
    return (
        <div>
            <h3 className="text-white">Resultado: </h3>
            {buscador.loading && <div className="text-warnig">Buscando...</div>}
            {buscador.pokemon.length >= 1 &&
                <div className="text-success">
                    <img src={buscador.pokemon[0].sprites.front_default} alt="pokemon" />
                    <span className="text_name">{buscador.pokemon[0].name}</span>
                </div>}
            {buscador.error !== '' && <span className="text-ganger">{buscador.error}</span>}
        </div>
    )
}
export default ResultadoPokemon