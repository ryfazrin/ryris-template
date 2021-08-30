import { makeStyles, Container, Grid } from '@material-ui/core';
import HomeCarousel from '../components/homeComponents/HomeCarousel';
import CardCategory from '../components/homeComponents/CardCategory';
import MenuList from '../components/homeComponents/MenuList';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexGrow: 1,
      marginBottom: '6rem',
    },
}));

function Home() {
    const classes = useStyles();
    
    return(
      <div style={{ overflow: 'hidden' }}>
        <Grid className={classes.root} container spacing={2}>
            
            <Grid item xs={12}>
              {/* HomeCarousel */}
              <HomeCarousel />
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
              {/* MenuList */}
              <MenuList />
            </Grid>

        </Grid>
      </div>
    );
}

export default Home;