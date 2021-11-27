import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import { useEffect, useState } from "react";
import debounce from "@mui/utils/debounce";
import { useDispatch } from "react-redux";

const SearchIngredients = () => {

  const dispatch = useDispatch();

  const [value, setValue] = useState('');
  const [ingredients, setIngredient] = useState();

  function handleChange(e) {
    return setValue(e.target.value);
  }

  function addIngredient(e, ingredient) {
      dispatch({ type: 'ADD_INGREDIENT', payload: ingredient.toLowerCase() });
  }

  useEffect(() => {
    // if (value.length >= 3) {
    //   api.searchIngredients(value, (searchResult) =>
    //     setIngredient(searchResult)
    //   );
    // }

    const testIngredients = [
      { id: 1, name: 'Tomato', image: '' },
      { id: 2, name: 'Banana', image: ''},
      { id: 3, name: 'Lettuce', image: '' },
      { id: 4, name: 'Broccoli', image: '' }
    ]
    if (value.length >= 3) {
       return setIngredient(testIngredients)
    }
    setIngredient(undefined)
    
  }, [value]);

  return (
    <>
    <SearchBar value={value} handleChange={debounce(handleChange, 300)} />
    {ingredients !== undefined
    ? <SearchResults ingredients={ingredients} addIngredient={addIngredient} />
    : null}
    </>
  );
};

export default SearchIngredients;
