import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchIngredients } from "../../../../services";
import { useDebounce } from "use-debounce/lib";


const SearchIngredients = () => {
  const dispatch = useDispatch();

  const pantry = useSelector((state) => state.myPantry);

  const [value, setValue] = useState("");
  const [debouncedValue] = useDebounce(value, 500);
  const [ingredientResults, setIngredientResults] = useState([]);

  const handleChange = (e) => setValue(e.target.value);

  function addIngredient(e, ingredient) {
    if (pantry.indexOf(ingredient) !== -1) {
      return dispatch({ type: "REMOVE_INGREDIENT", payload: ingredient });
    }
    dispatch({ type: "ADD_INGREDIENT", payload: ingredient });
  }

  function resetValue() {
    setValue("");
  }

  useEffect(() => {
    if (debouncedValue.length >= 3) {
        searchIngredients(debouncedValue, (searchResult) =>
        setIngredientResults(searchResult)
      );
    }

    // const testIngredients = [
    //   { id: 1, name: "tomato", image: "" },
    //   { id: 2, name: "banana", image: "" },
    //   { id: 3, name: "lettuce", image: "" },
    //   { id: 4, name: "broccoli", image: "" },
    //   { id: 5, name: "apple", image: "" },
    //   { id: 6, name: "apple sauce", image: "" },
    //   { id: 7, name: "tomato sauce", image: "" },
    //   { id: 8, name: "kiwi", image: "" },
    // ];
    // if (value.length >= 3) {
    //   return setIngredientResults(testIngredients);
    // }
    setIngredientResults([]);

  }, [debouncedValue]);

  return (
    <>
      <SearchBar value={value} handleChange={handleChange} />
      {ingredientResults.length > 0 ? (
        <SearchResults
          ingredients={ingredientResults}
          addIngredient={addIngredient}
          resetValue={resetValue}
          pantry={pantry}
        />
      ) : null}
    </>
  );
};

export default SearchIngredients;
