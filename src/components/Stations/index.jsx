import React,{useState,useEffect} from 'react';
import StationItem from './StationItem'

import callApi from "../../api/index"

const Stations = () => {
    const [station,selectStation] = useState({})  
    const [stations,setStations] = useState([])


    useEffect(() => {
        callApi("/stations")
        .getItems()
            .then(stations => {
                console.log(stations)
                setStations(stations)
            })
        
    
    },[])
    
    return (
        <div>
            {stations.map((station,index) => (
             <StationItem
                key={index}
                station={station}
                index={index}
            />
            ))
        }
        </div>
    );
};

export default Stations;