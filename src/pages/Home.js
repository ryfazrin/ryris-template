import { Icon, IconButton, ImageListItem, makeStyles, ImageList, ImageListItemBar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
        marginTop: '1rem',
        marginBottom: '5rem',
    },
    banner: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    category: {
        marginTop: '100px'
    },
    title: {
        color: theme.palette.secondary.light,
    },
    titleBar: {
        background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
}));

function Home() {
    const classes = useStyles();

    return(
        <div className={classes.root}>
            {/* banner */}
            <ImageList className={classes.banner} cols={2.5}>
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img src={item.img} alt={item.title} />
                        <ImageListItemBar
                            title={item.title}
                            classes={{
                                root: classes.titleBar,
                                title: classes.title,
                            }}
                            actionIcon={
                                <IconButton aria-label={`star ${item.title}`}>
                                    <Icon className={classes.title}>star_outlined</Icon>
                                </IconButton>
                            }
                        />
                    </ImageListItem>
                ))}
            </ImageList>
            
            {/* Category */}
            <ImageList className={classes.category}>
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img src={item.img} alt={item.title} />
                        <ImageListItemBar
                            title={item.title}
                            classes={{
                                root: classes.titleBar,
                                title: classes.title,
                            }}
                            actionIcon={
                                <IconButton aria-label={`star ${item.title}`}>
                                    <Icon className={classes.title}>star_outlined</Icon>
                                </IconButton>
                            }
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
    );
}

const itemData = [
    {
        img: 'images/breakfast.jpg',
        title: 'Breakfast',
    },
    {
        img: 'images/bike.jpg',
        title: 'Bike',
    },
    {
        img: 'images/burgers.jpg',
        title: 'Burgers',
    },
    {
        img: 'images/camera.jpg',
        title: 'Camera',
    },
    {
        img: 'images/vegetables.jpg',
        title: 'Vegetables',
    }
];

export default Home;