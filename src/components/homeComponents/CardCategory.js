import {Card, CardActionArea, CardContent, CardMedia, Typography, makeStyles } from "@material-ui/core";
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
    media:{
      height: 140,
    },
}));

function CardCategory() {
    const classes = useStyles();
    return(
      <Card elevation={0}>
        <CardActionArea component={Link} to="/best-selling">
          <CardMedia
            className={classes.media}
            image="images/breakfast.jpg"
            title="breakfast" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Terlaris
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
}

export default CardCategory;