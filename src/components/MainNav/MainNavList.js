import {
  InfoRounded,
  KitchenRounded,
  MenuBookRounded,
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
import ThemeButton from "../ThemeButton";

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
  ];

  const filteredNavList = navList.filter((item) =>
    desktop ? item.desktop === true : item.mobile === true
  );

  return (
    <List dense={desktop && !desktopLg} sx={desktop && { display: "flex" }}>
      {filteredNavList.map((item) => (
        <ListItem
          divider={!desktop}
          disablePadding
          key={item.name}
          sx={desktop && { width: "fit-content" }}
        >
          <ListItemButton
            component={Link}
            to={item.link}
            sx={{ width: "100%", paddingX: desktop && !desktopLg ? 1 : 2 }}
          >
            {item.icon === null ? null : (
              <ListItemIcon sx={{ minWidth: 40 }}>{item.icon}</ListItemIcon>
            )}
            <ListItemText
              primary={item.name}
              primaryTypographyProps={{ color: "secondary", align: "right" }}
            />
          </ListItemButton>
        </ListItem>
      ))}
      {desktop && (
        <ListItem disablePadding sx={{ width: "fit-content", marginLeft: desktopLg ? 5 : 2.5 }}>
          <ThemeButton />
        </ListItem>
      )}
    </List>
  );
};

export default MainNavList;
