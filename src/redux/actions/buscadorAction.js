import axios from "axios";//

export const FETCH_POKEMON_REQUEST = 'FETCH_POKEMON_REQUEST';
export const FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCCESS';
export const FETCH_POKEMON_FAILURE = 'FETCH_POKEMON_FAILURE';

// Action N1: Peticion
export const fetchPokemonRequest = () => {
    return (
        {
            type: FETCH_POKEMON_REQUEST
        }
    );
}
// Action N2: buscar pokemon (se reibe por parametro)
export const fetchPokemonSuccess = (pokemon) => {
    return (
        {
            type: FETCH_POKEMON_SUCCESS,
            payload: pokemon
        }
    );
}
// Action N3: fallo
export const fetchPokemonFailure = (error) => {
    return ({
        type: FETCH_POKEMON_FAILURE,
        payload: error
    });
}

//Acciones asincronas: las acciones que creamos son acciones asincronas, estas van a estar envueltas dentro de otra funcion que va a ir ejecutan esas acciones paso a paso 
//- Action N1: cuando se envia, va a tener que mostrar el buscando, request
//- Action N2: cuando la busqueda es exitosa, seria un success
//- Action N3: cuando hay un error es porque fallo la busqueda, failure

//- Action general: contiene las acciones anteriores, y va a intercambiando por cada action internamente 
// - axios: libreria para hacer peticiones de manera simple a una API

const fetchPokemon = (valor) => {//valor = nombre del pokemon que piden
    return (dispatch) => {
        dispatch(fetchPokemonRequest());// Se esta haciendo request
        axios.get(`https://pokeapi.co/api/v2/pokemon/${valor}`)//Peticion
        // Si entra en then es porque todo esta correcto
            .then((response) => { // response: recibe una respuesta de la API
                dispatch(fetchPokemonSuccess([response.data]));
                //response.data: es to la informacion de ese pokemon (solonecesitamos nombre e imagen)
            })
        // Si entra en catch es porque hay un error
            .catch((error) => {
                dispatch(fetchPokemonFailure('No se encontro el pokemon'));
            })
    }
}

export default fetchPokemon;