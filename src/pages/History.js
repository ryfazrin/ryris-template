import { Typography, makeStyles, Container, Grid } from "@material-ui/core";
import CardItem from './../components/historyComponents/CardItem';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '1rem',
    marginBottom: '6rem',
  },
}));

function History() {
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
            Riwayat
          </Typography>
        </Grid>

        {item}

      </Grid>
    </Container>
  );
}

export default History;