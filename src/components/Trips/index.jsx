import React,{useState,useEffect} from 'react';
import TripItem from './TripItem'

import callApi from "../../api"

import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    tripItem: {
        border: 1,
        borderColor: "#00FF00"
    }
  }));
const Trips = (props) => {
    //const classes = useStyles()
    const [trips,setTrips] = useState([])


    useEffect(() => {
        callApi(`/trips/find?fromStation=${props.location.state.fromStation}&toStation=${props.location.state.toStation}`)
        .getItems()
            .then(trips => {
                console.log("trips",trips)
                setTrips(trips)
            })
        
    
    },[])
    
    return (
        <div>
            {trips.map((trip,index) => (
                
                <TripItem
                    key={index}
                    trip={trip}
                    index={index}
                />
            
            ))}   
        </div>
    );
};

export default Trips;