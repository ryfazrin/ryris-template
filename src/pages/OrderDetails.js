import { Button, Container, FormControl, FormControlLabel, FormLabel, Grid, InputLabel, MenuItem, Radio, RadioGroup, Select, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '1rem',
    marginBottom: '6rem',
  }
}));

function OrderDetails() {
  const classes = useStyles();

  return(
    <Container maxWidth="md">
      <Grid className={classes.root}>

        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            Order Details
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Antar Ke
          </Typography>

          <Typography gutterBottom>
            Jl. Tirawan, Ds. Baharu utara Pulau laut utara, kotabaru 
          </Typography>

          <Button variant="contained" color="secondary">
            Ganti
          </Button>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h6">
            Metode Pembayaran
          </Typography>

          <FormControl>
            {/* <FormLabel component="legend">Metode</FormLabel> */}
            <RadioGroup row aria-label="pembayaran" name="metodePembayaran" value="">
              <FormControlLabel value="cod" control={<Radio />} label="COD" />
              <FormControlLabel value="transfer" control={<Radio />} label="Transfer" />
            </RadioGroup>
          </FormControl>

          <FormControl variant="outlined">
            <InputLabel>Rekening</InputLabel>
            <Select
              labelId="select-rekening"
              value="Pilih"
              onChange="BRI"
              label="rekening"
              >
              <MenuItem value="">Pilih</MenuItem>
              <MenuItem value="bri">BRI - XXX-XXX-XXX-XXX</MenuItem>
              <MenuItem value="bni">BNI - XXX-XXX-XXX-XXX</MenuItem>
            </Select>
          </FormControl>
        </Grid>

      </Grid>
    </Container>
  );
}

export default OrderDetails;