import {
  Typography,
  makeStyles,
  Icon,
  Button,
  Paper,
  Grid,
  ButtonBase
} from "@material-ui/core";
import React from "react";

// note : However, if the design of this card item looks ugly. I Suggest use a complicated grid
// https://material-ui.com/components/grid/#complex-grid

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500
  },
  image: {
    width: '100%',
  },
  img: {
    margin: "auto",
    display: "block",
    width: "100%",
    height: "100%"
  }
}));

function CardItem() {
  const classes = useStyles();

  return(
      <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={6} container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Pesanan pisang
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Rp. 100.000,-
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ID: 1030114
                </Typography>
              </Grid>
              <Grid item>
                <Button size="small" variant='outlined' color="secondary">
                  <Icon>list</Icon>
                    Catatan
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid xs={6} item>
            <ButtonBase className={classes.image}>
              <img
                className={classes.img}
                alt="Breakfast"
                src="images/breakfast.jpg"
              />
            </ButtonBase>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default CardItem;