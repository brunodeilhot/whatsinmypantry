import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Logo from "../../../assets/Logo.svg"

const Intro = () => {

    return(
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'text.primary' }}>
            <Box component="img" sx={{ width: 170, height: 106, mt: 6, mb: 3 }} src={Logo} alt="Large whatsinmypantry smiling taco logo" />
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