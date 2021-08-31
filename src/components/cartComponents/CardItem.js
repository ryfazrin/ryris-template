import {
  Typography,
  makeStyles,
  Icon,
  Button,
  Paper,
  Grid,
  ButtonBase,
  ButtonGroup,
  Divider,
  Box,
  IconButton
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
  },
  image: {
    width: "150px",
  },
  img: {
    margin: "auto",
    display: "block",
    width: "100px",
    height: "100px",
  }
}));

function CardItem() {
  const classes = useStyles();

  return(
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={5} container>
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
              {/* <Grid item>
                <Button size="small" variant='outlined' color="secondary">
                  <Icon>list</Icon>
                    Catatan
                </Button>
              </Grid> */}
            </Grid>
          </Grid>

          <Grid xs={5} item container alignItems="center" justify="center">
            <ButtonBase className={classes.image}>
              <img
                className={classes.img}
                alt="Breakfast"
                src="images/breakfast.jpg"
              />
            </ButtonBase>
          </Grid>

          <Grid xs={2} item container alignItems="center" justify="center">
            <ButtonGroup 
              orientation="vertical"
              color="secondary"
              aria-label="vertical outlined primary button group"
              variant="text"
            >
              <IconButton>
                <Icon>add</Icon>
              </IconButton>
              <Button>11</Button>
              <IconButton >
                <Icon>remove</Icon>
              </IconButton>
            </ButtonGroup>
          </Grid>

          <Grid item xs={12}>
            <Divider />
            <Box display="flex" marginTop={2} justifyContent="flex-end" bgcolor="background.paper">
              <Box flexGrow={1} justifyContent="center" marginRight='10px'>
                <Button size="small" variant='outlined' color="secondary">
                  <Icon>list</Icon>
                    Catatan
                </Button>
              </Box>
              <Box>
                <Typography variant="subtitle1" gutterBottom>
                  Tambahkan toping coklat ...
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default CardItem;