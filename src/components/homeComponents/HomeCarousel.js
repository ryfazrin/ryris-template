import React from 'react';
import Carousel from "react-material-ui-carousel";
import { Paper, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  img: {
    width: '100%',
  }
}));

function HomeCarousel(props) {
  const items = [
    {
        img: './images/burgers.jpg',
        title: 'Burgers',
    },
    {
        img: './images/camera.jpg',
        title: 'Camera',
    },
    {
        img: './images/vegetables.jpg',
        title: 'Vegetables',
    }
  ];

  return(
    <Carousel>
      {
        items.map( (item, i) => <Item key={i} item={item} /> )

      }
    </Carousel>
  );
}

function Item(props) {
  const classes = useStyles();

  return (
      <Paper elevation={0}>
        <img src={props.item.img} alt={props.item.title} className={classes.img} />
      </Paper>
  );
}

export default HomeCarousel;