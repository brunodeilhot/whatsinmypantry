import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reducer from "./reducer";

const persistConfig = {
  key: "whatsinmypantry",
  storage,
  blacklist: ["apiLimitReached", "mediaqueries", "preferedDarkMode"],
};

// myPantry - stores a list of ingredients added by the user
// starredRecipes - stores a list of recipes saved by the users
// apiLimitReached - indicates via the ErrorPage component that the number
// of api calls has reached its limit (this is not saved on local storage)
// mediaqueries - stores an object {desktop: boolean, desktopLg: boolean} based
// on current width of the document
// preferedDarkMode - stores the system or browser theme preference
// darkMode - stores theme preference only after a theme is chosen in the app itself
const initialState = {
  myPantry: [],
  starredRecipes: [],
  apiLimitReached: false,
  mediaqueries: {},
  preferedDarkMode: false,
  darkMode: null
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(persistedReducer, initialState);
export const persistor = persistStore(store);
