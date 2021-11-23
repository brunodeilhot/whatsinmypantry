import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Logo from "../../../assets/App-Mascot@x2.png"

const About = () => {
  return (
    <Box sx={{ m: 2.5 }} >
        <Box component="img" sx={{ height: 35, width: 52 }} src={Logo} alt="whatsinmypantry smiling taco logo" />
      <Typography color="secondary" variant="h5" component="h2" sx={{ pb: 1 }}>
        about
      </Typography>
      <Typography gutterBottom={false} color="secondary" variant="body2" component="p" >
        Ut explicabo molestiae molestias deserunt veritatis dolorum. Occaecati
        voluptates impedit ea cum non molestiae ea nobis.
      </Typography>
    </ Box>
  );
};

export default About;
