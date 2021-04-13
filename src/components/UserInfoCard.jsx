import React,{useState} from 'react'
import { Button,Input } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import '../css/UserCardInfo.css'
const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));
function UserInfoCard({props}) {
    const classes = useStyles();
    return (
        <div className="Guest_Card">
            <center>
                <strong className="Guest_Card_title">Guests Details</strong>
            </center>
            <Input placeholder="Guest Name"
                type="text"
                className="Guest_Card_elm"
                value={props.guest}
                onChange={e=>props.setGuest(e.target.value)}
            />
             <TextField
                        id="date"
                        label="Check in Time"
                        type="date"
                        value={props.checkin}
                        className={classes.textField}
                        InputLabelProps={{
                        shrink: true,
                        }}

                        onChange={(e)=>props.setCheckIn(e.target.value)}
                    />
            <TextField
                        id="date"
                        label="Check out time"
                        type="date"
                        value={props.checkout}
                        className={classes.textField}
                        InputLabelProps={{
                        shrink: true,
                        }}
                        
                        onChange={(e)=>props.setCheckout(e.target.value)}
                    />
               
               <Input placeholder="Number Of Guest"
                type="number"
                value={props.noOfGuest}
                onChange={e=>props.setNoOfGuest(e.target.value)}
            />    
        </div>
    )
}

export default UserInfoCard
