import {
  Typography,
  makeStyles,
  Icon,
  Button,
  Paper,
  Grid,
  ButtonBase,
  Box,
  Badge,
  Chip
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
    // width: '100%',
    width: 128,
    height: 110,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  }
}));

function CardItem() {
  const classes = useStyles();

  return(
      <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid CardItem>
            <ButtonBase className={classes.image}>
              <img
                className={classes.img}
                alt="Breakfast"
                src="images/breakfast.jpg"
              />
            </ButtonBase>
          </Grid>

          <Grid item xs sm container>
            <Grid item xs container direction="column">
              <Grid item xs>
                <Typography variant="h6" gutterBottom>
                  Menu Pertama
                </Typography>
                <Typography variant="body2" gutterBottom>
                  31 Jan 2021
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  INV123456
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            <Chip
              label="Selesai"
              color="primary"
              variant="outlined"
              clickable
            />
          </Grid>
          
          <Grid item xs={12}>
            <Box display="flex" justifyContent="flex-end" bgcolor="background.paper">
              <Box flexGrow={1} justifyContent="center">
                <Typography variant="subtitle1" gutterBottom>
                  Rp. 100.000,-
                </Typography>
              </Box>
              <Box>
                <Button variant='outlined' color="secondary">
                  <Icon>list</Icon>
                    Catatan
                </Button>
              </Box>
            </Box>
          </Grid>
          
        </Grid>
      </Paper>
    </div>
  );
}

export default CardItem;