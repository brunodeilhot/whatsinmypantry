import { createStore } from "redux";
import reducer from "./reducer";

const initialState = {
    myPantry: []
};

export const store = createStore(reducer, initialState);