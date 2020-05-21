import React from 'react';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {Typography} from '@material-ui/core'

import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
    root: {
    maxWidth: 345,
    },
    media: {
    height: 140,
    },
});

const StationItem = (props) => {
  
    const { station } = props
    const classes = useStyles();
    return (
        <div>
            <Card className = {classes.root}>
            <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {station.address}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {station.province}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
            </Card>
        </div>
    );
};

export default StationItem;