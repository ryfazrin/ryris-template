import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  makeStyles,
  CardActions,
  Button,
  Drawer,
  Divider,
  CardHeader
} from "@material-ui/core";
import React from "react";
import clsx from 'clsx';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  root: {
    // maxWidth: 345,
  },
  media: {
    height: '0',
    paddingTop: '56.25%', // 16:9
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
}));

function CardItem() {
  const classes = useStyles();

  const [state, setState] = React.useState({
    bottom: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Card
        lassName={classes.cardDrawer}>
        <CardHeader
          title="Pisang banana"
          subheader="September 14, 2021"
        />
        <CardMedia
          className={classes.media}
          image="images/breakfast.jpg"
          title="breakfast"
        />
        <Divider variant="middle" />
        <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Rp. 100.000,-
            </Typography>
          </CardContent>
          <Divider />
          <CardActions>
            <Button variant="contained" color="secondary" fullWidth component={Link} to="/cart">
              Tambah
            </Button>
          </CardActions>
      </Card>
    </div>
  );

  return (
    <Card className={classes.root}>
      <React.Fragment key="bottom">
        <CardActionArea onClick={toggleDrawer("bottom", true)}>
          <CardMedia
            className={classes.media}
            image="images/breakfast.jpg"
            title="breakfast"
          />
          <CardContent>
            <Typography gutterBottom variant="h6">
              Pisang banana
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              RP. 100.000,-
            </Typography>
          </CardContent>
        </CardActionArea>
      </React.Fragment>

      <CardActions>
        <Button variant="outlined" size="small" color="secondary" fullWidth>
          Tambah
        </Button>
      </CardActions>

      <Drawer
        anchor="bottom"
        open={state["bottom"]}
        onClose={toggleDrawer("bottom", false)}>
        {list('bottom')}
      </Drawer>
    </Card>
  );
}

export default CardItem;
