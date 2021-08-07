import { Typography, makeStyles, Container, Grid } from "@material-ui/core";
import CardItem from './../components/bestSellingComponents/CardItem';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '1rem',
    marginBottom: '6rem',
  },
}));

function BestSelling() {
  const classes = useStyles();
  const item = [];

  for (let i = 0; i < 10; i++) {
    item.push(<Grid item md={3} xs={6}><CardItem /></Grid>);
  }

  return(
    <Container maxWidth="md">
      <Grid className={classes.root} container spacing={2}>

        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            Terlaris
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={2} justifyContent="center">
          {item}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default BestSelling;