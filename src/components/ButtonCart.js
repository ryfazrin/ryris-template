import { makeStyles, withStyles, Fab, Icon, Badge } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    extendedIcon: {
      // marginRight: theme.spacing(1),
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

function ButtonCart() {
    const classes = useStyles();
    
    return(
      <Fab variant="extended" color="secondary" className={classes.fab} elevation={0} component={Link} to="/cart">
        3 item dimasukkan | 100.000,-
        <StyledBadge badgeContent={3} color="primary">
          <Icon className={classes.extendedIcon}>shopping_cart</Icon>
        </StyledBadge>
        <Icon className={classes.fabArrow}>arrow_forward</Icon>
      </Fab>
    );
}

export default ButtonCart;