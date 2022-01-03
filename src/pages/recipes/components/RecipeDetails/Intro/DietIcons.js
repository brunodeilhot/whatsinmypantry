import { Avatar, Grid, Tooltip } from "@mui/material";

const DietIcons = ({ glutenFree, dairyFree, vegetarian, vegan }) => {
  const icons = [
    { name: "GF", alt: "Gluten Free", prop: glutenFree },
    { name: "DF", alt: "Dairy Free", prop: dairyFree },
    { name: "V", alt: "Vegetarian", prop: vegetarian },
    { name: "VE", alt: "Vegan", prop: vegan },
  ];

  const iconStyle = {
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
      {icons.map((item) => (
        <Grid key={item.name} item>
          <Tooltip title={item.alt} enterDelay={300} leaveDelay={200}>
            <Avatar
              alt={item.alt}
              sx={
                item.prop
                  ? {
                      ...iconStyle,
                      borderColor: "primary.main",
                      color: "primary.main",
                    }
                  : iconStyle
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
