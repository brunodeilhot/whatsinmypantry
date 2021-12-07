export default function reducer(state, action) {
  switch (action.type) {
    case 'ADD_INGREDIENT':
      return {
        ...state,
        myPantry: [...state.myPantry, action.payload]
      }
    case 'REMOVE_INGREDIENT':
      const ingIndex = state.myPantry.indexOf(action.payload);
      state.myPantry.splice(ingIndex, 1);
      return {
        ...state,
        myPantry: [...state.myPantry]
      }
    case 'ADD_STARRED':
      return {
        ...state,
        starredRecipes: [...state.starredRecipes, action.payload]
      }
    case 'REMOVE_STARRED':
      state.starredRecipes.splice(action.payload, 1);
      return {
        ...state,
        starredRecipes: [...state.starredRecipes]
      }
    default:
      return state;
  }
}
