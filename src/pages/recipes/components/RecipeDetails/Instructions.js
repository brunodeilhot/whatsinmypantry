import { Grid, List, ListItem, ListItemText, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Logo from "../../../../assets/Logo.svg";

const Instructions = ({ analyzedInstructions }) => {
  const instructions = analyzedInstructions.map((item) => {
    const listSteps = item.steps.map((step) => (
      <ListItem key={step.number} disablePadding>
        <ListItemText
          primary={
            <>
              <Typography fontWeight={700} sx={{ display: "inline" }}>
                {step.number}
                {". "}
              </Typography>
              <Typography sx={{ display: "inline" }}> {step.step}</Typography>
            </>
          }
        />
      </ListItem>
    ));

    return item.name === "" ? (
      <List dense key={"main list"}>
        {listSteps}
      </List>
    ) : (
      <Grid item key={item.name}>
        <Typography
          variant="h6"
          component="h3"
          color="primary"
          fontWeight={700}
        >
          {item.name}
        </Typography>
        <List dense>{listSteps}</List>
      </Grid>
    );
  });

  return (
    <Grid container item direction="column" pt={3}>
      <Typography variant="h4" component="h2" color="primary" fontWeight={700}>
        Instructions
      </Typography>
      {instructions}
      <Grid container item direction="column" alignItems="center" pt={3.5}>
        <Box
          component="img"
          sx={{ height: 35, width: 52 }}
          src={Logo}
          alt="whatsinmypantry smiling taco logo"
        />
        <Typography variant="h3" component="p" color="primary" fontWeight={700}>
          bon appétit!
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Instructions;
