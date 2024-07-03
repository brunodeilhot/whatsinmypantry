import { List, ListItem, ListItemText, Typography } from "@mui/material";

const IngredientList = ({ extendedIngredients, unit, servings, serving }) => {
  // servings is the base value received from the api, it is then divided
  // by the amount in order to get the value for 1 serving, then multiplied
  // by the value changed by the user
  const ingredientList = extendedIngredients.map((item) => {
    const metric = {
      text: item.measures.metric.unitShort,
      amount: ((item.measures.metric.amount / servings) * serving).toFixed(2),
    };
    const us = {
      text: item.measures.us.unitShort,
      amount: ((item.measures.us.amount / servings) * serving).toFixed(2),
    };

    return (
      <ListItem key={item.id} disablePadding>
        <ListItemText
          primary={
            <>
              <Typography fontWeight={700} display="inline">
                {unit === "metric"
                  ? metric.amount + " " + metric.text
                  : us.amount + " " + us.text}
              </Typography>
              <Typography display="inline">{" "}{item.name}</Typography>
            </>
          }
        />
      </ListItem>
    );
  });

  return <List dense>{ingredientList}</List>;
};

export default IngredientList;
