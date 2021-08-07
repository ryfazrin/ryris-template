import { makeStyles, withStyles, Container, Grid, Fab, Icon, Badge, Divider } from '@material-ui/core';
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
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
    fab: {
      position: 'fixed',
      bottom: theme.spacing(8),
      right: theme.spacing(2),
    },
    fabArrow: {
      marginLeft: '1rem'
    }
}));

const StyledBadge = withStyles((theme) => ({
  badge: {
    border: `2px solid ${theme.palette.background.paper}`,
  },
}))(Badge);

function Home() {
    const classes = useStyles();
    
    return(
      <Container maxWidth="md">
        <Grid className={classes.root} container spacing={2}>
            
            <Grid item xs={12}>
              {/* banner */}
              <Banner />
              
            </Grid>

            <Grid item xs={12}>
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
            </Grid>

            <Grid item xs={12}>
              {/* banner */}
              <Banner />
            </Grid>

        </Grid>

        <Fab variant="extended" color="secondary" className={classes.fab}>
          3 item | Rp.100.000,-
          <StyledBadge badgeContent={4} color="primary">
            <Icon className={classes.extendedIcon}>shopping_cart</Icon>
          </StyledBadge>
          <Icon className={classes.fabArrow}>arrow_forward</Icon>
        </Fab>
        
      </Container>
    );
}

export default Home;