import React,{useState,useContext} from 'react';
import { Button,Input } from '@material-ui/core';
import {useDispatch} from 'react-redux';
import MyModal from './MyModal';
import {signIn} from '../actions/userActions';
import {Context} from '../contextApi/context'
import '../css/Login.css';
function Login() {
    const {
        openSignIn,
        setOpenSignIn,
        
    }=useContext(Context);
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const dispatch = useDispatch();
      const handleClose = () => {
        setOpenSignIn(false);
      };
      
    return (
        <div>
            <MyModal open={openSignIn} handleClose={handleClose}>

               <form className="App__signup">
                    <center>
                    <img 
                    className="header_Image" 
                    src="https://imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/header/logo@2x.png"  
                    alt="logo"/>
                        </center>
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
                    <Button onClick={()=>dispatch(signIn(email,password))}>Sign In</Button>
                </form>            
            </MyModal>
        </div>
    )
}

export default Login
