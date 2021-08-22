import { Typography, makeStyles, Container, Grid, Button } from "@material-ui/core";
import CardItem from './../components/cartComponents/CardItem';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '1rem',
    marginBottom: '6rem',
  },
  // cardItem: {
  //   justifyContent: 'center'
  // }
}));

function Cart() {
  const classes = useStyles();
  const item = [];

  for (let i = 0; i < 3; i++) {
    item.push(<Grid item className={classes.cardItem} xs={12}><CardItem /></Grid>);
  }

  return(
    <Container maxWidth="md">
      <Grid className={classes.root} container spacing={2} xs={12}>

        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            Keranjang
          </Typography>
        </Grid>

        {item}

        <Grid item xs={12}>
            <Button variant="contained" color="secondary" fullWidth>
              Pesan
            </Button>
        </Grid>

      </Grid>
    </Container>
  );
}

export default Cart;