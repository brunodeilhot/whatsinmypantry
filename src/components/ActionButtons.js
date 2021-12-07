import { KitchenRounded, MenuBookRounded } from "@mui/icons-material";
import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  Toolbar,
} from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const ActionButtons = () => {
  const actionBtList = [
    {
      name: "pantry",
      icon: <KitchenRounded sx={{ pr: 1, fontSize: 40 }} />,
      link: "/",
    },
    {
      name: "recipes",
      icon: <MenuBookRounded sx={{ pr: 1, fontSize: 40 }} />,
      link: "/recipes",
    },
  ];

  const location = useLocation();
  const path = location.pathname;

  const [active, setActive] = useState(path);
  const [showActionBt, setShowActionBt] = useState(true);

  useEffect(() => {
    const actionButtons = actionBtList
      .map((button) => button.link)
      .indexOf(path);
    if (actionButtons === -1) {
      return setShowActionBt(false);
    }
    setShowActionBt(true);
    setActive(path);
  }, [location]);

  function handlePathChange(e, value) {
    setActive(value);
  }

  const bottomNavigation = (
    <Box sx={{ width: "100%" }}>
      <Toolbar />
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={active}
          onChange={handlePathChange}
          sx={{ backgroundColor: "secondary.main" }}
        >
          {actionBtList.map((item) => (
            <BottomNavigationAction
              key={item.name}
              component={Link}
              to={item.link}
              value={item.link}
              label={item.name.toUpperCase()}
              icon={item.icon}
              sx={{
                display: "flex",
                flexDirection: "row",
                minWidth: (100 / actionBtList.length).toString() + "%",
                borderTop: "5px solid transparent",
                "&.Mui-selected": { borderTop: "5px solid #7FD7C3" },
              }}
            />
          ))}
        </BottomNavigation>
      </Paper>
    </Box>
  );

  return <>{showActionBt ? bottomNavigation : null}</>;
};

export default ActionButtons;
