import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";


const Loading = () => {

    return (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box sx={{ m: "50%" }}>
                <CircularProgress size={100} color="primary" />
            </Box>
        </Box>
        
    )
};

export default Loading;