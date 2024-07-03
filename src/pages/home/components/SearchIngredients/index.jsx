import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchIngredients } from "../../../../services";
import { useDebounce } from "use-debounce";
import { Box } from "@mui/material";

const SearchIngredients = () => {
  const dispatch = useDispatch();
  const searchBarRef = useRef();

  // State and functions that manage the values received on the search input
  // The debounced value is used to fetch a list of ingredients
  // Ingredient's fetched state is then forwarded to the search results component
  // When ingredient is added it is dispatched to the redux store

  // States that manage the user input of the ingredient search bar
  const [value, setValue] = useState("");
  const [debouncedValue] = useDebounce(value, 500);

  const handleChange = (e) => setValue(e.target.value);

  // State that manages the list of ingredients obtained from the api
  const [ingredientResults, setIngredientResults] = useState([]);

  // When debounced value of the input changes, a list of resuslts is
  // called from the api, if the response is 402 then api limit was
  // reached and an error page is displayed
  useEffect(() => {
    if (debouncedValue.length >= 3) {
      searchIngredients(debouncedValue, (searchResults) => {
        if (searchResults === 402) {
          return dispatch({ type: "API_LIMIT", payload: true });
        }
        setIngredientResults(searchResults);
      });
    }

    setIngredientResults([]);
  }, [debouncedValue, dispatch]);

  // This function is called on the search results when the user adds or removes
  // an ingredient and then updates the global store myPantry
  const pantry = useSelector((state) => state.myPantry);

  const ingredientToggle = (e, ingredient) => {
    const ingredientIndex = pantry.indexOf(ingredient);

    if (ingredientIndex !== -1) {
      return dispatch({ type: "REMOVE_INGREDIENT", payload: ingredientIndex });
    }
    dispatch({ type: "ADD_INGREDIENT", payload: ingredient });
  }

  const resetValue = () => {
    setValue("");
  }

  return (
    <Box position="relative">
      <SearchBar
        searchBarRef={searchBarRef}
        value={value}
        handleChange={handleChange}
      />
      {ingredientResults.length > 0 ? (
        <SearchResults
          widthRef={searchBarRef}
          ingredients={ingredientResults}
          ingredientToggle={ingredientToggle}
          resetValue={resetValue}
          pantry={pantry}
        />
      ) : null}
    </Box>
  );
};

export default SearchIngredients;
