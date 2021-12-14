import { Avatar, Grid, Tooltip } from "@mui/material";

const DietIcons = ({ glutenFree, dairyFree, vegetarian, vegan }) => {
  const items = [
    { name: "GF", alt: "Gluten Free", prop: glutenFree },
    { name: "DF", alt: "Dairy Free", prop: dairyFree },
    { name: "V", alt: "Vegetarian", prop: vegetarian },
    { name: "VE", alt: "Vegan", prop: vegan },
  ];

  const avatarStyle = {
    border: "2px solid",
    borderColor: "text.secondary",
    backgroundColor: "transparent",
    color: "text.secondary",
    fontWeight: 700,
    fontSize: 12,
    width: 24,
    height: 24,
  };

  return (
    <Grid container item spacing={0.5}>
      {items.map((item) => (
        <Grid item key={item.name}>
          <Tooltip title={item.alt} enterDelay={300} leaveDelay={200}>
            <Avatar
              alt={item.alt}
              sx={
                item.prop
                  ? {
                      ...avatarStyle,
                      borderColor: "primary.main",
                      color: "primary.main",
                    }
                  : avatarStyle
              }
            >
              {item.name}
            </Avatar>
          </Tooltip>
        </Grid>
      ))}
    </Grid>
  );
};

export default DietIcons;
