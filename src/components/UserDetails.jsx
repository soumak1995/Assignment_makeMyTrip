import React,{useState,useContext} from 'react';
import {Context} from '../contextApi/context'
import {useDispatch,useSelector} from 'react-redux'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import { Button,Input } from '@material-ui/core';
import MyModal from "./MyModal";
import {submitUserDetails} from '../actions/userActions'
import '../css/UploadProp.css';
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

function UserDetails() {
const {
    userDetailsModal,
    setUserDetailsModal
}=useContext(Context);
const [fullName,setFullName]=useState('');
const [gender,setGender]=useState('');
const [host,setHost]=useState(false);
const [dob,setDob]=useState("2017-05-24");
const dispatch = useDispatch();
const user = useSelector(state =>state.userReducer);
const handleChange=(e)=>{
  e.preventDefault();
  setHost(prevState=>!prevState)
}
const handleClose = () => {
    setUserDetailsModal(false);
  };
  const submit=(e)=>{
      e.preventDefault();
      dispatch(submitUserDetails({
        fullName,
        gender,
        host,
        dob,
        email:user.user.email
    }));
    setUserDetailsModal(false);
  }
const classes = useStyles();
    return (
       
            <MyModal open={userDetailsModal} handleClose={handleClose}>
                <form className="App__signup">
                <center>
                <img className="header_Image" 
                src="https://imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/header/logo@2x.png"
                alt="logo"/>
                </center>
                <Input placeholder="Full Name"
                type="text"
                value={fullName}
                onChange={e=>setFullName(e.target.value)}
                />
                <FormLabel >Gender</FormLabel>
                <RadioGroup aria-label="gender" name="gender1" value={gender} onChange={(e)=>setGender(e.target.value)}>
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
                <TextField
                        id="date"
                        label="Birthday"
                        type="date"
                        value={dob}
                        className={classes.textField}
                        InputLabelProps={{
                        shrink: true,
                        }}
                        onChange={(e)=>setDob(e.target.value)}
                    />
                    <FormControlLabel

                        control={<Switch
                            checked={host}
                            onChange={handleChange}
                            name="checkedA"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                        />} 
                        label="Host"
                      />
                   
                  <Button onClick={submit}>Submit</Button>
                </form>
            
    </MyModal>
    )
}

export default UserDetails
