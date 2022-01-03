export default function reducer(state, action) {
  switch (action.type) {
    case "ADD_INGREDIENT":
      return {
        ...state,
        myPantry: [...state.myPantry, action.payload],
      };
    case "REMOVE_INGREDIENT":
      state.myPantry.splice(action.payload, 1);
      return {
        ...state,
        myPantry: [...state.myPantry],
      };
    case "ADD_STARRED":
      return {
        ...state,
        starredRecipes: [...state.starredRecipes, action.payload],
      };
    case "REMOVE_STARRED":
      state.starredRecipes.splice(action.payload, 1);
      return {
        ...state,
        starredRecipes: [...state.starredRecipes],
      };
    case "API_LIMIT":
      return {
        ...state,
        apiLimitReached: action.payload,
      };
    default:
      return state;
  }
}
