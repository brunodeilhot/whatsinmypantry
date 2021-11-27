export default function reducer(state, action) {
  switch (action.type) {
    case 'ADD_INGREDIENT':
      return {
        myPantry: [...state.myPantry, action.payload]
      }
    default:
      return state;
  }
}
