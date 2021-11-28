export default function reducer(state, action) {
  switch (action.type) {
    case 'ADD_INGREDIENT':
      return {
        ...state,
        myPantry: [...state.myPantry, action.payload]
      }
    case 'REMOVE_INGREDIENT':
      const index = state.myPantry.indexOf(action.payload);
      state.myPantry.splice(index, 1);
      return {
        ...state,
        myPantry: [...state.myPantry]
      }
    default:
      return state;
  }
}
