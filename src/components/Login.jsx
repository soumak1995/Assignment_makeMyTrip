import React,{useState} from 'react';
import { Button,Input } from '@material-ui/core';
import withModal from '../HOCs/withModal';
function Login() {
    const [email,setEmail]=useState('');
    const [username,setUsrname]=useState('');
    const [user,setUser]=useState(null);
    const [password,setPassword]=useState('');
    return (
        <div>
             <form className="App__signup">
       <center>
            <img className="App__headerImage"
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" 
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
            <Button>Sign Up</Button>
            </form>
        </div>
    )
}

export default withModal(Login,{defaultOnValue: false});
