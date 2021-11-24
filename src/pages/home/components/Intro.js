import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Logo from "../../../assets/App-Logo@x2.png"

const Intro = () => {

    return(
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'text.primary' }}>
            <Box component="img" sx={{ height: 134, width: 202, mt: 2 }} src={Logo} alt="Large whatsinmypantry smiling taco logo" />
            <Typography variant="h3" fontWeight="bold" component="p">
                Let's begin!
            </Typography>
            <Typography variant="body1" component="h2" mb={4}>
                Search for ingredients to fill your pantry.
            </Typography>
        </Box>
    )
};

export default Intro;