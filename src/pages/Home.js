import { makeStyles, withStyles, Container, Grid, Fab, Icon, Badge } from '@material-ui/core';
import Banner from '../components/homeComponents/Banner';
import CardCategory from '../components/homeComponents/CardCategory';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      marginTop: '1rem',
      marginBottom: '5rem',
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
    fab: {
      position: 'fixed',
      padding: '0 10px',
      bottom: theme.spacing(8),
      right: theme.spacing(2),
    },
}));

const StyledBadge = withStyles((theme) => ({
  badge: {
    // top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);

function Home() {
    const classes = useStyles();
    
    return(
      <Container maxWidth="md">
        <Grid className={classes.root} container spacing={2} display='flex'>
            
            <Grid item xs={12}>
              {/* banner */}
              <Banner />
            </Grid>

            <Grid item xs={12} alignContent='center'>
              <Grid container spacing={2}>
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
            </Grid>

            <Grid item xs={12}>
              {/* banner */}
              <Banner />
            </Grid>

        </Grid>

        <Fab variant="extended" color="secondary" className={classes.fab}>
          Masakan Padang | Rp.100.000,-
          <StyledBadge badgeContent={4} color="primary">
            <Icon className={classes.extendedIcon}>shopping_cart</Icon>
          </StyledBadge>
        </Fab>
        
      </Container>
    );
}

export default Home;