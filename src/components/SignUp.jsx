import React,{useState,useContext,useEffect} from 'react';
import { Button,Input } from '@material-ui/core';
import {useDispatch,useSelector} from 'react-redux';
import MyModal from './MyModal';
import {signUp} from '../actions/userActions';
import {Context} from '../contextApi/context';
import '../css/SignUp.css';
function SignUp() {
    const {
            openSignUp,
            setOpenSignUp,
            setUserDetailsModal
    }=useContext(Context);
  const user = useSelector(state =>state.userReducer);
  console.log(user)
  const [email,setEmail]=useState('');
  const [username,setUsrname]=useState('');
  const [password,setPassword]=useState('');
  const dispatch = useDispatch()
  const handleClose = () => {
    setOpenSignUp(false);
  };
  const onClickhandle=(e)=>{
   e.preventDefault();
   dispatch(signUp(email,password,username));
  }
  useEffect(() => {
      if(user.user!==null){
        setUserDetailsModal(true);
      }
  }, [user.user])
    return (
        <MyModal open={openSignUp} handleClose={handleClose} >
                <form className="App__signup">
                   
                <center>
                <img className="header_Image" 
                src="https://imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/header/logo@2x.png"
                alt="logo"/>
                </center>
                {user.error && <small>{user.error }</small>}
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
                <Button onClick={onClickhandle}>Sign Up</Button>
                </form>
        </MyModal>
    )
}

export default SignUp
