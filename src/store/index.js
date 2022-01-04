import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reducer from "./reducer";

const persistConfig = {
  key: "whatsinmypantry",
  storage,
  blacklist: ["apiLimitReached", "mediaqueries"],
};

// myPantry - stores a list of ingredients added by the user
// starredRecipes - stores a list of recipes saved by the users
// apiLimitReached - indicates via the ErrorPage component that the number
// of api calls has reached its limit (this is not saved on local storage)
const initialState = {
  myPantry: [],
  starredRecipes: [],
  apiLimitReached: false,
  mediaqueries: {},
  darkMode: false
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(persistedReducer, initialState);
export const persistor = persistStore(store);
