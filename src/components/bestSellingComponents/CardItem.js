import {Card, CardActionArea, CardContent, CardMedia, Typography, makeStyles, CardActions, Button } from "@material-ui/core";
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
    root: {
      maxWidth: 345,
    },
    media:{
      height: 140,
    },
}));

function CardItem() {
    const classes = useStyles();
    return(
      <Card className={classes.root}>
        <CardActionArea component={Link} to="/best-selling">
          <CardMedia
            className={classes.media}
            image="images/breakfast.jpg"
            title="breakfast" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Pisang banana
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              RP. 100.000,-
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="secondary">
            Tambah
          </Button>
        </CardActions>
      </Card>
    );
}

export default CardItem;