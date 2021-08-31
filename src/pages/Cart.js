import { Typography, makeStyles, Container, Grid, Button } from "@material-ui/core";
import CardItem from './../components/cartComponents/CardItem';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '1rem',
    marginBottom: '6rem',
  },
  description: {
    marginTop: '2rem',
    marginBottom: '2rem',
  }
}));

function Cart() {
  const classes = useStyles();
  const item = [];

  for (let i = 0; i < 3; i++) {
    item.push(
      <Grid item xs={12}>
        <CardItem />
      </Grid>
    );
  }

  return(
    <Container maxWidth="md">
      <Grid className={classes.root} container spacing={2}>

        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            Keranjang
          </Typography>
        </Grid>

        {item}

        <Grid item xs={12} className={classes.description}>
          <Grid container>
            <Grid item xs={8}>
              <Typography>Ada lagi yang ingin dipesan?</Typography>
              <Typography>Cek menu lainnya disini</Typography>
            </Grid>
            <Grid item xs={4}>
              <Button variant="outlined" color="primary" fullWidth component={Link} to="/best-selling">
                Lihat
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Button variant="contained" color="secondary" fullWidth component={Link} to="/order-details">
            Pesan
          </Button>
        </Grid>

      </Grid>
    </Container>
  );
}

export default Cart;