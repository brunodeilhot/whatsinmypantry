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
    .then(parseJson)
    .then(success)
}

function parseJson(response) {
    return response.data.results;
}

const methods = {
    searchIngredients
};

export default methods;