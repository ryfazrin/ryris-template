import { Icon, IconButton, ImageListItem, makeStyles, ImageList, ImageListItemBar, Container, Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';

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
      marginTop: '1rem',
    },
    title: {
      color: theme.palette.secondary.light,
    },
    titleBar: {
      background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    media:{
      height: 140,
    },
}));


function Home() {
    const classes = useStyles();
    
    return(
        <Container className={classes.root} maxWidth="sm">
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
            {/* <ImageList className={classes.category}>
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
            </ImageList> */}

            {/* Card */}
            <Card>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="images/breakfast.jpg"
                  title="breakfast" />
              </CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  RP. 100.000,-
                </Typography>
              </CardContent>
            </Card>
        </Container>
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