import { AppBar, Icon, IconButton, Toolbar, Typography, makeStyles } from "@material-ui/core";

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
    return(
        <div className={classes.root}>
            <AppBar>
                <Toolbar position="static">
                    {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <Icon>menu</Icon>
                    </IconButton> */}
                    <Typography variant="h6" className={classes.title}>
                        Ryris
                    </Typography>
                    <IconButton color="inherit">
                        <Icon>account_circle</Icon>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;