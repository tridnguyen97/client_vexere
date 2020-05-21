import React from 'react';

import Button from '@material-ui/core/Button';
import {Box,Container,Typography} from '@material-ui/core'

import TripDetail from './TripDetail'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
    root: {
    maxWidth: 345,
    },
    media: {
    height: 140,
    },
    h2: {
      bottom : "10px",
      marginLeft: "10px"
    },
    toStation: {
      marginLeft: "-100px"
    },
    fromStation: {
      marginBottom : "100px",
    }
});

const TripItem = (props) => {
    const { trip } = props
    const classes = useStyles();
    console.log("Trip is here",trip)
    return (
      <>
      <Container>
        <Box 
          className={classes.tripItem} 
          display="flex" 
          p={1}
          m={2}
          boxShadow={3} 
          border={1}
          alignItems="center" 
          justifyContent="center" 
          borderRadius={16} 
          borderColor="#D3D3D3" 
          bgcolor="background.paper">
            <div className={classes.fromStation}>
              <Typography variant="h5" component="h2">
                {trip.fromStationId.name}
              </Typography>
            </div>
            <div className={classes.toStation}>
              <Typography  variant="h5" component="h2">
                {trip.toStationId.name}
              </Typography>
            </div>
                      
            <Typography gutterBottom variant="h5" component="h2">
              {trip.price}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {trip.startTime}
            </Typography>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
          <TripDetail/>
        </Box>
      </Container>
      
     
      
    </>
    );
};

export default TripItem;