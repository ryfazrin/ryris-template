import { makeStyles, Container, Grid } from '@material-ui/core';
import Banner from '../components/homeComponents/Banner';
import CardCategory from '../components/homeComponents/CardCategory';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      // flexWrap: 'wrap',
      flexGrow: 1,
      marginTop: '1rem',
      marginBottom: '6rem',
    },
}));

function Home() {
    const classes = useStyles();
    
    return(
      <div style={{ overflow: 'hidden' }}>
        <Grid className={classes.root} container spacing={2}>
            
            <Grid item xs={12}>
              {/* banner */}
              <Banner />
              
            </Grid>

            <Grid item xs={12}>
            <Container>
              <Grid container spacing={2} justifyContent="center">
                {/* Card Category */}
                <Grid item xs={6}>
                  <CardCategory />
                </Grid>
                <Grid item xs={6}>
                  <CardCategory />
                </Grid>
                <Grid item xs={6}>
                  <CardCategory />
                </Grid>
                <Grid item xs={6}>
                  <CardCategory />
                </Grid>
              </Grid>
            </Container>
            </Grid>

            <Grid item xs={12}>
              {/* banner */}
              <Banner />
            </Grid>

        </Grid>
      </div>
    );
}

export default Home;