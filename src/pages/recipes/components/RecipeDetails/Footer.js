import { Grid, Link, Typography } from "@mui/material";

const Footer = ({ sourceName, sourceUrl }) => {
  return (
    <Grid item pt={3.5} mb={2}>
      <Typography
        variant="body1"
        component="p"
        sx={{ color: "text.secondary" }}
      >
        COPYRIGHT © Recipe by{" "}
        <Link href={sourceUrl} underline="none">
          {sourceName}
        </Link>
      </Typography>
    </Grid>
  );
};

export default Footer;
