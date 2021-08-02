import React from 'react';
import { BottomNavigation, BottomNavigationAction, Icon, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        width: '100%',
        position: 'fixed',
        bottom: 5,
    },
});

function Footer() {
    const classes = useStyles();
    const [value, setValue] = React.useState('home');

    const handleChange = (evant, newValue) => {
        setValue(newValue);
    }

    return(
        <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
            <BottomNavigationAction label="Home" value="home" icon={<Icon>home</Icon>} component={Link} to="/" />
            <BottomNavigationAction label="Search" value="search" icon={<Icon>search</Icon>} component={Link} to="/search" />
            <BottomNavigationAction label="Favorites" value="favorites" icon={<Icon>favorite</Icon>} component={Link} to="/favorite" />
            <BottomNavigationAction label="History" value="history" icon={<Icon>assignment</Icon>} component={Link} to="/history" />
        </BottomNavigation>
    );
}

export default Footer;