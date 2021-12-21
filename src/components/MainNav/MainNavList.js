import {
  InfoRounded,
  KitchenRounded,
  MenuBookRounded,
  RestaurantRounded,
  StarRateRounded,
} from "@mui/icons-material";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";

const MainNavList = ({ desktop, desktopLg }) => {
  const navList = [
    {
      name: "My Pantry",
      icon: <KitchenRounded color="secondary" />,
      link: "/",
      mobile: true,
      desktop: false,
    },
    {
      name: "Recipes",
      icon: <MenuBookRounded color="secondary" />,
      link: "recipes",
      mobile: true,
      desktop: true,
    },
    {
      name: "Starred Recipes",
      icon: <StarRateRounded color="secondary" />,
      link: "starred",
      mobile: true,
      desktop: true,
    },
    {
      name: "About",
      icon: <InfoRounded color="secondary" />,
      link: "about",
      mobile: false,
      desktop: true,
    },
    // {
    //   name: "My Meal Plan",
    //   icon: <RestaurantRounded color="secondary" />,
    //   link: "/",
    // },
  ];

  const filteredNavList = navList.filter((item) =>
    desktop ? item.desktop === true : item.mobile === true
  );

  return (
    <List dense={desktop && !desktopLg} sx={desktop && { display: "flex" }}>
      {filteredNavList.map((item) => (
        <ListItem
          component="li"
          divider={!desktop}
          disablePadding
          key={item.name}
          sx={desktop && { width: "fit-content" }}
        >
          <ListItemButton
            component={Link}
            to={item.link}
            sx={{ width: "100%" }}
          >
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
