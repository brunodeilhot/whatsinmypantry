# #whatsinmypantry
This app was envisioned with a mobile first approach, as a final Front End academic project which combines knowledge of HTML, CSS, Javascript, React and REST API.

The users begin their experience by searching for ingredients and adding them to a list (the pantry). Once ingredients are added, the Recipes page will list a number of recipes based on the ingredients in the user's pantry. Clicking on a Recipe card will open detailed information such as health score, ingredient list with options for number of servings and  step by step instructions.

[Try the Live project here](https://brunodeilhot.github.io/whatsinmypantry/)

## Libraries used in this project
- <b>React redux</b>: Store management of data needed to be available globally;
- <b>Redux persist</b>: Local storage of the redux store with the possibility to blacklist data not needed to be saved locally;
- <b>React Router</b>: App Navigation;
- <b>Axios</b>: HTTP requests;
- <b>Material UI</b>: Base UI react components framework;
- <b>use-debounce</b>: Reduce the number of requests on user input;
- <b>react-infinite-scroll-component</b>: Smooth loading of recipes in the Recipe list;

## App file tree
- <b>App.js</b>
    - <b>components</b>
        - <b>MainNav</b>
            - <b>MainNavList</b>: Manages the list of nav objects, can also add or remove navigation options here;
            - <b>MainNavMobile</b>: Navigation drawer for mobile view;
        - <b>ActionButtons</b>: Bottom navigation for mobile view;
        - <b>ErrorPage</b>: Error page for 404 Not found and for 402 Api call limit reached;
        - <b>Header</b>: App main header, calls the main nav components;
        - <b>Loading</b>: Loading animation for various components when waiting for promises;
        - <b>ScrollTop</b>: Button which allows smooth scroll back to anchor element;
        - <b>ThemeButton</b>: Switch that controls light and dark theme options;
    - <b>pages</b>
        - <b>about</b>: Information about the app and copyright, present as a page in the desktop version and included in the nav drawer for the mobile version.
        - <b>home</b>: Index route of the app in mobile view and a permanent left drawer for desktop;
            - <b>MyPantry</b>: Lists the ingredients added by the user with the option to remove;
            - <b>SearchIngredients</b>: Presents a text input where the user can write the ingredient's names, the value is debounced to reduced number of calls, and presents 5 possible results with an image aid and a button to add or remove;
            - <b>Intro</b>: Logo and text presentation of the home page;
        - <b>recipes</b>: This page displays a list of recipes based on the ingredients listed in the pantry;
            - <b>Filters</b>: Component which controls the filter options of the recipe list;
            - <b>RecipeDetails</b>: Page that displays all the information about a single recipe based on its id;
            - <b>RecipeList</b>: List of recipes obtained as a result from the api with a scroll based loading for more recipes and allows users to star recipes; 
            - <b>NoRecipes</b>: Component displayed when there are no recipes, either because no ingredients were added to the pantry or the filter options returned empty;
        - <b>starred</b>: Displays a list of recipes that were previously starred in the recipes page. Also uses the RecipeList component but passes a predetermined list of recipes as a prop;
- <b>services</b>: Using Axios it controls all http requests to the api;
- <b>store</b>: Redux store connected to redux persist so that needed data is saved in local storage;
- <b>Routes.js</b>: Lists all the possible routes of the App and passes booleans for mediaqueries and system theme setting;
- <b>Theme.js</b>: Controls the color theme for the App.
- <b>Utils.js</b>: Custom hook used in the App.
