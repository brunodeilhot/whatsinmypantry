import { KitchenRounded, MenuBookRounded } from "@mui/icons-material";
import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  styled,
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

  // check if the current path matches any path in the action button list
  const location = useLocation();
  const path = location.pathname;
  const actionButtons = actionBtList.map((button) => button.link).indexOf(path);

  // manages the active sate of the action button group
  const [showActionBt, setShowActionBt] = useState(true);
  // manages the active state of individual action button
  const [active, setActive] = useState(path);

  useEffect(() => {
    if (actionButtons === -1) {
      return setShowActionBt(false);
    }
    setShowActionBt(true);
    setActive(path);
  }, [actionButtons, path]);

  function handlePathChange(e, value) {
    setActive(value);
  }

  const CustomBtNavAction = styled(BottomNavigationAction)(({ theme }) => ({
    "&.Mui-selected": { borderTop: "5px solid " + theme.palette.primary.main },
  }));

  return (
    <>
      {showActionBt && (
        <Box width="100%">
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
                <CustomBtNavAction
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
                  }}
                />
              ))}
            </BottomNavigation>
          </Paper>
        </Box>
      )}
    </>
  );
};

export default ActionButtons;
