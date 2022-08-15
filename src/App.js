import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
// import CantidadPokemon from './components/CantidadPokemon';
// import CompraPokemon from './components/CompraPokemon';
import store from './redux/store';
import { Provider } from 'react-redux';
import CantidadPokemonHook from './components/CantidadPokemonHook';
import CompraPokemonHook from './components/CompraPokemonHook';
import BuscadorPokemon from './components/buscador/BuscadorPokemon.jsx';
import ResultadoPokemon from './components/buscador/ResultadoPokemon.jsx';

function App() {
  return (
<Provider store={store}>
<div className="App container">
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="card mt-5" style={{ maxwidth: '300px' }}>
            <div className="row no-gutters">
              <div className="col-4">
                <img src={require('./imagen/pokemon.jpg')} alt="img not found" className='card-img' />
              </div>
              <div className="col-8">
                <div className="card-body">
                  <div className="card-title h3 text-center">
                    <CantidadPokemonHook/>
                  </div>
                  <CompraPokemonHook/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 mt-4 border-top pt-3">
          <BuscadorPokemon/>
        </div>
        <div className="col-12">
          <ResultadoPokemon/>
        </div>
      </div>
    </div>
</Provider>
      
  );
}

export default App;
