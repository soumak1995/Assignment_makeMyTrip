import React,{useContext} from 'react';
import {Context} from '../../contextApi/context';
import Login from '../../components/Login';
import SignUp from '../../components/SignUp';
import '../../css/Flights.css'
function Flights() {
    const {
        openSignIn,
        openSignUp
    }=useContext(Context);
    return (
        <div className="cooming_soon">
            <h1>Comming Soon</h1>
            {openSignIn && <Login/>}
            {openSignUp && <SignUp/>}
        </div>
    )
}

export default Flights
