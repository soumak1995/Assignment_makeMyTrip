import React,{useContext} from 'react'
import {Context} from '../../contextApi/context';
import Login from '../../components/Login';
import SignUp from '../../components/SignUp';
function Hotels() {
    const {
        openSignIn,
        openSignUp
    }=useContext(Context);
    return (
        <div>
            <h1 className="cooming_soon">Commimg Soon</h1>
            {openSignIn && <Login/>}
            {openSignUp && <SignUp/>}
        </div>
    )
}

export default Hotels
