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

export function searchRecByIng(value, offset, number, success) {
  return api
    .get("/recipes/complexSearch", {
      params: {
        ...apiKey,
        includeIngredients: value,
        sort: "min-missing-ingredients",
        sortDirection: "asc",
        offset: offset,
        // type: "breakfast",
        number: number,
      },
    })
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

const methods = {
  imageBaseURL,
  searchIngredients,
  searchRecByIng,
  getRecipeDetails,
};

export default methods;
