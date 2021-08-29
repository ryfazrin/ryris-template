import { AppBar, Icon, IconButton, Toolbar, Typography, makeStyles } from "@material-ui/core";
import { Link, useLocation } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
}));


function Header() {
    const classes = useStyles();

    let location = useLocation();

    const back = () => {
      window.history.back();
    }

    const HeadCondition = () => {
      // eslint-disable-next-line eqeqeq
      if (location.pathname != location.pathname.match('/')){
        return (
          <>
            <IconButton onClick={back} edge="start" className={classes.menuButton} color="inherit">
                <Icon>arrow_back</Icon>
            </IconButton>
          </>
        );
      }

        return null;
      
    }

    return(
        <div className={classes.root}>
          <AppBar>
            <Toolbar position="static">

              <HeadCondition />

              <Typography variant="h6" className={classes.title}>
                Ryris
              </Typography>

              <IconButton color="inherit" component={Link} to="/account">
                <Icon>account_circle</Icon>
              </IconButton>

            </Toolbar>
          </AppBar>
        </div>
    );
}

export default Header;