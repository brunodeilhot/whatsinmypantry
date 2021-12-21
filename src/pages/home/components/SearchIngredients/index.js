import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchIngredients } from "../../../../services";
import { useDebounce } from "use-debounce/lib";

const SearchIngredients = () => {
  const dispatch = useDispatch();
  const pantry = useSelector((state) => state.myPantry);

  // State and function that controls the width of the search results
  // Width of search results is always the same as the search bar
  const searchBarRef = useRef();
  const [searchBarWidth, setWidth] = useState();

  const getSearchBarWidth = () => {
    const widthRef = searchBarRef.current;
    if (widthRef === null) {
      return;
    }
    setWidth(widthRef.clientWidth);
  };

  useEffect(() => {
    getSearchBarWidth();
    window.addEventListener("resize", getSearchBarWidth);
  }, []);

  // State and functions that manage the values received on the search input
  // The debounced value is used to fetch a list of ingredients
  // Ingredients fetched state is then forwarded to the search results component
  // When ingredient is added it is dispatched to the redux store
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
      searchIngredients(debouncedValue, (searchResults) => {
        if (searchResults === 402) {
          return dispatch({ type: "API_LIMIT", payload: true });
        }
        setIngredientResults(searchResults);
      });
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
  }, [debouncedValue, dispatch]);

  return (
    <>
      <SearchBar
        searchBarRef={searchBarRef}
        value={value}
        handleChange={handleChange}
      />
      {ingredientResults.length > 0 ? (
        <SearchResults
          searchBarWidth={searchBarWidth}
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
