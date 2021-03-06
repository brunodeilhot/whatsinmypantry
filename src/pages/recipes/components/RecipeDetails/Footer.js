import { CopyrightRounded } from "@mui/icons-material";
import { Grid, Link, Typography } from "@mui/material";

const Footer = ({ sourceName, sourceUrl }) => (
  <Grid item pt={3.5} mb={2}>
    <Typography
      variant="body1"
      component="p"
      display="flex"
      alignItems="center"
      sx={{ color: "text.secondary" }}
    >
      COPYRIGHT <CopyrightRounded fontSize="small" sx={{ marginX: 0.5 }} />
      Recipe by
      <Link href={sourceUrl} target="_blank" underline="none" sx={{ ml: 0.5 }}>
        {sourceName}
      </Link>
    </Typography>
  </Grid>
);

export default Footer;
