import axios from "axios";

const baseURL = 'https://api.spoonacular.com'

const apiKey = {
    apiKey: 'e1f264b88e3a411d9f0b94cf29b7bf49'
}

const api = axios.create({
    baseURL,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});

export function searchIngredients(value, success) {
    return api.get('/food/ingredients/search', {
        params: {
            ...apiKey,
            query: value,
            number: 5
        }
    })
    .then(parseJsonResults)
    .then(success)
}

export function searchRecByIng(value, success) {
    return api.get('/recipes/complexSearch', {
        params: {
            ...apiKey,
            query: "",
            includeIngredients: value,
            sort: "min-missing-ingredients",
            sortDirection: "asc",
            number: 6
        }
    })
    .then(parseJsonResults)
    .then(success)
}

function parseJsonResults(response) {
    console.log(response.data.results)
    return response.data.results;
}

function parseJsonData(response) {
    console.log(response)
    return response.data;
}

const methods = {
    searchIngredients,
    searchRecByIng
};

export default methods;