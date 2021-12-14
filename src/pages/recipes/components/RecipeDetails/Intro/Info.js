import { AccessTimeRounded, FavoriteBorderRounded } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";

const Info = ({ readyInMinutes, healthScore }) => {
  const items = [
    {
      id: 1,
      text: `${readyInMinutes} MINUTES`,
      color: "primary.main",
      icon: <AccessTimeRounded fontSize="large" color="primary" />,
    },
    {
      id: 2,
      text: `HEALTH SCORE ${healthScore}`,
      color: "#E06E9C",
      icon: (
        <FavoriteBorderRounded fontSize="large" sx={{ color: "#E06E9C" }} />
      ),
    },
  ];

  return (
    <Grid container item justifyContent="space-between">
      {items.map((item) => (
        <Grid
          key={item.id}
          container
          item
          alignItems="center"
          wrap="nowrap"
          sx={{ width: "fit-content" }}
        >
          {item.icon}
            <Typography
              variant="body2"
              fontWeight={700}
              pl={0.5}
              sx={{ color: item.color }}
            >
              {item.text}
            </Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default Info;
