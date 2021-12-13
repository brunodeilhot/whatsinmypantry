import { List, ListItem, ListItemText, Typography } from "@mui/material";


const IngredientList = ({ extendedIngredients, unit, servings, serving}) => {

    const ingredientList = extendedIngredients.map((item) => {
        const metric = {
          text: item.measures.metric.unitShort,
          amount: (item.measures.metric.amount / servings) * serving,
        };
        const us = {
          text: item.measures.us.unitShort,
          amount: (item.measures.us.amount / servings) * serving,
        };
    
        return (
          <ListItem key={item.id} disablePadding>
            <ListItemText
              primary={
                <>
                  <Typography fontWeight={700} sx={{ display: "inline" }}>
                    {unit === "metric"
                      ? metric.amount + " " + metric.text
                      : us.amount + " " + us.text}
                  </Typography>
                  <Typography sx={{ display: "inline" }}> {item.name}</Typography>
                </>
              }
            />
          </ListItem>
        );
      });

    return(
        <List dense>{ingredientList}</List>
    )
};

export default IngredientList;