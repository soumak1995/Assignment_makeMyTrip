import React,{useState,useContext} from 'react';
import { Button,Input } from '@material-ui/core';
import {useDispatch} from 'react-redux';
import MyModal from './MyModal';
import {signUp} from '../actions/userActions';
import {Context} from '../contextApi/context';
import '../css/SignUp.css';
function SignUp() {
    const {
            openSignUp,
            setOpenSignUp
    }=useContext(Context);
  const [email,setEmail]=useState('');
  const [username,setUsrname]=useState('');
  const [password,setPassword]=useState('');
  const dispatch = useDispatch()
  const handleClose = () => {
    setOpenSignUp(false);
  };
    return (
        <MyModal open={openSignUp} handleClose={handleClose}>
                <form className="App__signup">
                <center>
                <img className="header_Image" 
                src="https://imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/header/logo@2x.png"
                alt="logo"/>
                </center>
                <Input placeholder="username"
                type="text"
                value={username}
                onChange={e=>setUsrname(e.target.value)}
                />
                <Input placeholder="email"
                type="text"
                value={email}
                onChange={e=>setEmail(e.target.value)}
                />
                <Input placeholder="password"
                type="text"
                value={password}
                onChange={e=>setPassword(e.target.value)}
                />
                <Button onClick={()=>dispatch(signUp(email,password,username))}>Sign Up</Button>
                </form>
        </MyModal>
    )
}

export default SignUp
