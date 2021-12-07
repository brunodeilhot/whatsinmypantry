import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reducer from "./reducer";

const persistConfig = {
  key: 'root',
  storage,
};

const initialState = {
  myPantry: [],
  starredRecipes: []
}

const persistedReducer = persistReducer(persistConfig, reducer);


export const store = createStore(persistedReducer, initialState);
export const persistor = persistStore(store);