import React,{useState} from 'react';
import {FormControl,InputBase,TextField} from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import DatePicker from './DatePicker'
import {makeStyles,withStyles} from '@material-ui/core/styles'

import {withRouter} from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
    formControl: {
        
        margin: theme.spacing(1),
        minWidth: 12,
    },
    formControl2: {
      marginTop: theme.spacing(2),
    },
  }));

  const BootstrapInput = withStyles((theme) => ({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }))(InputBase);
  

const Test = (props) => {

    const classes = useStyles();
    const [toStation,setToStation] = useState('')
    const [fromStation,setFromStation] = useState('')

    const onPress = () => {
      // pass params as state to Trips component
      props.history.push({
        pathname:  "/trips",
        state: {fromStation,toStation}
      })
    }
    return (
        <div>
            <Grid container spacing= {2} >
            <Grid item  md={9} xs={24} >
            <FormControl className={classes.formControl}>
                <TextField 
                  id="standard-basic" 
                  label="Departure"
                  onChange={(event) => setFromStation(event.target.value)}
                />
            </FormControl>
            </Grid>
            <Grid item md={9} xs={24} >
            <Button className={classes.formControl}>Switch</Button>
            </Grid>
            <Grid item md={9} xs={24}>
            
            <FormControl className={classes.formControl}>
                <TextField 
                  id="standard-basic" 
                  label="Arrival"
                  onChange={(event) => setToStation(event.target.value)}
                />  
            </FormControl>
            </Grid>
            <Grid item xs={4} >
            
            <DatePicker/>
            </Grid>
            </Grid>
            <Button
              onClick={onPress}>Find ticket</Button>
        </div>
    );
};

export default withRouter(Test);