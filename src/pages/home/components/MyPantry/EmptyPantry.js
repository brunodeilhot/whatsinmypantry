import { KitchenRounded } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const EmptyPantry = () => {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <KitchenRounded sx={{ fontSize: "20vh", color: "text.secondary", mt: "5vh" }} />
      <Typography variant="h4" component="p" color="text.secondary">
        Your pantry is empty.
      </Typography>
    </Box>
  );
};

export default EmptyPantry;
