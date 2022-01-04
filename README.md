# #whatsinmypantry
This app was envisioned with a mobile first approach, as a final Front End academic project which combines knowledge of HTML, CSS, Javascript, React and REST API.

The users to begin their experience by searching for ingredients and adding them to a list (the pantry). Once ingredients are added, the Recipes page will list a number of recipes based on the ingredients in the user's pantry. Clicking on a Recipe card will open detailed information such as health score, ingredient list with options for number of servings and  step by step instructions.
## Libraries used in this project
    - <b>React redux</b>: Store management of data needed to be available globally;
    - <b>Redux persist</b>: Local storage of the redux store with the possibility to blacklist data not needed to be saved locally;
    - <b>React Router</b>: App Navigation;
    - <b>Axios</b>: HTTP requests;
    - <b>Material UI</b>: Base UI react components framework;
    - <b>use-debounce</b>: Reduce the number of requests on user input;
    - <b>react-infinite-scroll-component</b>: Smooth loading of recipes in the Recipe list;
## App file tree
### Root(index.js)
    - <b>App.js</b>
        - <b>components</b>
            - <b>MainNav</b>
                - <b>MainNavList</b>
                - <b>MainNavMobile</b>
            - <b>ActionButtons</b>
            - <b>ErrorPage</b>
            - <b>Header</b>
            - <b>Loading</b>
            - <b>ScrollTop</b>
            - <b>ThemeButton</b>
        - <b>pages</b>
            - <b>about</b>
            - <b>home</b>
                - <b>components</b>
                    - <b>MyPantry</b>
                    - <b>SearchIngredients</b>
                    - <b>Intro</b>
            - <b>recipes</b>
                - <b>Filters</b>
                - <b>RecipeDetails</b>
                - <b>RecipeList</b>
                - <b>NoRecipes</b>
            - <b>starred</b>
    - <b>services</b>
    - <b>store</b>
    - <b>Routes.js</b>
    - <b>Theme.js</b>
    - <b>Utils.js</b>