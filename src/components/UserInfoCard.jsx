import React,{useState} from 'react'
import { Button,Input } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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
