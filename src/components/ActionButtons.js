import { KitchenRounded, MenuBookRounded } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

const ActionButtons = () => {
  const [active, setActive] = useState(0);

  const ActionBtList = [
    { name: "pantry", icon: <KitchenRounded sx={{ pr: 1, fontSize: 40 }} /> },
    { name: "recipes", icon: <MenuBookRounded sx={{ pr: 1, fontSize: 40 }} /> },
  ];

  function handleIndexChange(e, index) {
    setActive(index);
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={active}
          onChange={handleIndexChange}
          sx={{ backgroundColor: "secondary.main" }}
        >
          {ActionBtList.map((item) => (
            <BottomNavigationAction
              label={item.name.toUpperCase()}
              icon={item.icon}
              sx={{
                display: "flex",
                flexDirection: "row",
                minWidth: (100 / ActionBtList.length).toString() + "%",
                borderTop: "5px solid transparent",
                "&.Mui-selected": { borderTop: "5px solid #7FD7C3" },
              }}
            />
          ))}
        </BottomNavigation>
      </Paper>
    </Box>
  );
};

export default ActionButtons;
