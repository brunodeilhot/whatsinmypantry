import { RestaurantRounded, StarRateRounded } from "@mui/icons-material";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const MainNavList = () => {
  const navList = [
    { name: "Starred Recipes", icon: <StarRateRounded color="secondary" /> },
    { name: "My Meal Plan", icon: <RestaurantRounded color="secondary" /> },
  ];

  return (
      <List>
        {navList.map((item) => (
          <ListItem component="li" button divider key={item.name}>
              {item.icon === null ? null : (
                <ListItemIcon>{item.icon}</ListItemIcon>
              )}
              <ListItemText primary={item.name} primaryTypographyProps={{ color: 'secondary', align: 'right' }} /> 
          </ListItem>
        ))}
      </List>
  );
};

export default MainNavList;
