import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import { useEffect, useState } from "react";
import debounce from "@mui/utils/debounce";
import { useDispatch, useSelector } from "react-redux";
import { searchIngredients } from "../../../../services";
import { Box } from "@mui/system";

const SearchIngredients = () => {
  const dispatch = useDispatch();

  const pantry = useSelector((state) => state.myPantry);

  const [value, setValue] = useState("");
  const [ingredients, setIngredient] = useState();

  function handleChange(e) {
    return setValue(e.target.value);
  }

  function addIngredient(e, ingredient) {
    if (pantry.indexOf(ingredient) !== -1) {
      return dispatch({ type: "REMOVE_INGREDIENT", payload: ingredient });
    }
    dispatch({ type: "ADD_INGREDIENT", payload: ingredient });
  }

  function resetValue() {
    return setValue("");
  }

  useEffect(() => {
    // if (value.length >= 3) {
    //     searchIngredients(value, (searchResult) =>
    //     setIngredient(searchResult)
    //   );
    // }

    const testIngredients = [
      { id: 1, name: "tomato", image: "" },
      { id: 2, name: "banana", image: "" },
      { id: 3, name: "lettuce", image: "" },
      { id: 4, name: "broccoli", image: "" },
      { id: 5, name: "apple", image: "" },
      { id: 6, name: "apple sauce", image: "" },
      { id: 7, name: "tomato sauce", image: "" },
      { id: 8, name: "kiwi", image: "" },
    ];
    if (value.length >= 3) {
      return setIngredient(testIngredients);
    }
    setIngredient(undefined);
  }, [value]);

  return (
    <>
      <SearchBar value={value} handleChange={debounce(handleChange, 300)} />
      {ingredients !== undefined ? (
        <SearchResults
          ingredients={ingredients}
          addIngredient={addIngredient}
          resetValue={resetValue}
          pantry={pantry}
        />
      ) : null}
    </>
  );
};

export default SearchIngredients;
