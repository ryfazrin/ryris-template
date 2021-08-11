import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  makeStyles,
  Icon,
  Button,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    align: 'center'
  },
  details: {
    display: 'block',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 300,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  // media: {
  //   height: '0',
  //   paddingTop: '56.25%', // 16:9
  // },
}));

function CardItem() {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={5}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            Pesanan 1
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Rp. 100.000,-
          </Typography>
        </CardContent>
        <div className={classes.controls}>
        <Button color="secondary">
          <Icon>list</Icon> Catatan
        </Button>
        </div>
      </div>
      <CardMedia
        className={classes.cover}
        image="images/breakfast.jpg"
        title="Breakfast"
      />
    </Card>
  );
}

export default CardItem;
