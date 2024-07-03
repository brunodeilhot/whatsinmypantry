import axios from "axios";
import apiKey from "../../apiKey.js"

const baseURL = "https://api.spoonacular.com";
export const imageBaseURL = "https://spoonacular.com/cdn/ingredients_100x100/";

const api = axios.create({
  baseURL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// Search ingredient based on user input and return 5 results
export function searchIngredients(value, success) {
  return api
    .get("/food/ingredients/search", {
      params: {
        ...apiKey,
        query: value,
        number: 5,
      },
    })
    .catch((error) => apiLimit(error))
    .then(parseJsonResults)
    .then(success);
}

// Return a list of recipes based on ingredient values, number of recipes
// and filter options
export function searchRecByIng(value, type, diet, number, success) {
  const params = {
    ...apiKey,
    includeIngredients: value,
    sort: "min-missing-ingredients",
    sortDirection: "asc",
    number: number,
  };

  const filteredParams = () => {
    if (type !== undefined && diet !== undefined) {
      return {
        ...params,
        type: type,
        diet: diet,
      };
    } else if (type !== undefined) {
      return {
        ...params,
        type: type,
      };
    } else if (diet !== undefined) {
      return {
        ...params,
        diet: diet,
      };
    }
    return { ...params };
  };

  return api
    .get("/recipes/complexSearch", {
      params: filteredParams(),
    })
    .catch((error) => apiLimit(error))
    .then(parseJsonResults)
    .then(success);
}

// Return recipe details based on recipe id
export function getRecipeDetails(value, success) {
  return api
    .get(`/recipes/${value}/information`, {
      params: {
        ...apiKey,
      },
    })
    .catch((error) => apiLimit(error))
    .then(parseJsonData)
    .then(success);
}

function parseJsonResults(response) {
  if (response === 402) {
    return response;
  }
  return response.data.results;
}

// If an none existant id is received as user value then response is still
// returned as undefined and an error page is displayed
function parseJsonData(response) {
  if (response === undefined || response === 402) {
    return response;
  }
  return response.data;
}

// 402 error is used by the API to inform that api call limit has been reached
function apiLimit(error) {
  return error.response.status;
}

const methods = {
  imageBaseURL,
  searchIngredients,
  searchRecByIng,
  getRecipeDetails,
};

export default methods;
