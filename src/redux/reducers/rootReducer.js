import { combineReducers } from "redux";
import buscador from "./buscadorReducer";
import game_shop from "./gameShopReducer";

const rootReducer = combineReducers(
    {
        game_shop,
        buscador
    }
)

export default rootReducer;