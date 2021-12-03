import { StarRateRounded } from "@mui/icons-material";
import { Card, CardActionArea, CardActions, CardContent, CardMedia, IconButton, Typography } from "@mui/material";


const RecipeCard = ({ title }) => {

    return (
        <Card>
            <CardActionArea>
                <CardMedia />
                <CardContent>
                    <Typography component="h2" sx={{ fontSize: 12, fontWeight: "700" }}>
                        {title}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <IconButton>
                    <StarRateRounded />
                </IconButton>
            </CardActions>
        </Card>
    )
};

export default RecipeCard;