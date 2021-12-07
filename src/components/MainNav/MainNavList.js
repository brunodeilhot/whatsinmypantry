import { KitchenRounded, MenuBookRounded, RestaurantRounded, StarRateRounded } from "@mui/icons-material";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";

const MainNavList = () => {
  const navList = [
    { name: "My Pantry", icon: <KitchenRounded color="secondary" />, link: "/" },
    { name: "Recipes", icon: <MenuBookRounded color="secondary" />, link: "/recipes" },
    { name: "Starred Recipes", icon: <StarRateRounded color="secondary" />, link: "/starred" },
    { name: "My Meal Plan", icon: <RestaurantRounded color="secondary" />, link: "/" },
  ];

  return (
    <List>
      {navList.map((item) => (
        <ListItem component="li" divider disablePadding key={item.name}>
          <ListItemButton component={Link} to={item.link}>
            {item.icon === null ? null : (
              <ListItemIcon>{item.icon}</ListItemIcon>
            )}
            <ListItemText
              primary={item.name}
              primaryTypographyProps={{ color: "secondary", align: "right" }}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default MainNavList;
