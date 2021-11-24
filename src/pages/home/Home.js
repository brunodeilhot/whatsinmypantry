import {
    Avatar,
    List,
    ListItem,
    ListItemAvatar,
    ListItemButton,
    ListItemText,
    TextField,
    Typography,
  } from "@mui/material";
  import { useEffect, useState } from "react";
  import api from "../../services/Api";
  
  const Home = () => {
  
    const [value, setValue] = useState('');
    const [ingredients, setIngredient] = useState();
  
    function handleChange(e) {
      setValue(e.target.value);
    }
  
    useEffect(() => {
      
      if (value.length >= 3) {
          api.searchIngredients(value, searchResult => setIngredient(searchResult))
      }
  
    }, [value])
  
  
    const imageBaseURL = 'https://spoonacular.com/cdn/ingredients_100x100/'
  
    return (
      <>
        <Typography variant="h1">Home Page</Typography>
        <TextField
          onChange={handleChange}
          fullWidth
          id="ingredient-search"
          label="Search Ingredients"
          variant="outlined"
        ></TextField>
          <List dense>
            {ingredients !== undefined
              ? ingredients.map((ingredient) => (
              <ListItem key={ingredient.id} disablePadding>
                  <ListItemButton>
                          <ListItemAvatar>
                              <Avatar src={imageBaseURL+ingredient.image} />
                          </ListItemAvatar>
                          <ListItemText primary={ingredient.name} />
                  </ListItemButton>
              </ListItem>
              ))
              : null
          }
          </List>
      </>
    );
  };
  
  export default Home;
  