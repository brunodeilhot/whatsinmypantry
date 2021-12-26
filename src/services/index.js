import axios from "axios";

const baseURL = "https://api.spoonacular.com";
export const imageBaseURL = "https://spoonacular.com/cdn/ingredients_100x100/";

const apiKey = {
  apiKey: "e1f264b88e3a411d9f0b94cf29b7bf49",
};

const api = axios.create({
  baseURL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export function searchIngredients(value, success) {
  return api
    .get("/food/ingredients/search", {
      params: {
        ...apiKey,
        query: value,
        number: 5,
      },
    })
    .then(parseJsonResults)
    .then(success);
}

export function searchRecByIng(value, type, diet, number, success) {

  const params = {
    ...apiKey,
    includeIngredients: value,
    sort: "min-missing-ingredients",
    sortDirection: "asc",
    number: number,
  }

  const filteredParams = () => {
        if (type !== undefined && diet !== undefined) {
          return {
            ...params,
            type: type,
            diet: diet
          }
        } else if (type !== undefined) {
          return {
            ...params,
            type: type
          }
        } else if (diet !== undefined) {
          return {
            ...params,
            diet: diet
          }
        }
        return {...params}
      }

  return api
    .get("/recipes/complexSearch", {
      params: filteredParams()
    })
    .catch((error) => apiLimit(error))
    .then(parseJsonResults)
    .then(success);
}

export function getRecipeDetails(value, success) {
  return api
    .get(`/recipes/${value}/information`, {
      params: {
        ...apiKey,
        // includeNutrition: true,
      },
    })
    .catch((error) => apiLimit(error))
    .then(parseJsonData)
    .then(success);
}

function parseJsonResults(response) {
  console.log(response.data.results);
  return response.data.results;
}

function parseJsonData(response) {
  console.log(response.data);
  return response.data;
}

function apiLimit(error) {
  if(error.response.status === 402) {
    return 402
  }
}

const methods = {
  imageBaseURL,
  searchIngredients,
  searchRecByIng,
  getRecipeDetails,
};

export default methods;
