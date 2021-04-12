import React,{useContext} from 'react';
import {useSelector} from 'react-redux'
import HotelIcon from '@material-ui/icons/Hotel';
import ApartmentIcon from '@material-ui/icons/Apartment';
import FlightIcon from '@material-ui/icons/Flight';
import { Button } from '@material-ui/core';
import {Context} from '../contextApi/context';
import {auth} from '../firebse'
import '../css/Header.css'

function Header() {
    const {
        setOpenSignIn,
        setOpenSignUp
    }=useContext(Context);
    const user = useSelector(state =>state.userReducer);
    console.log(user.user)
    return (
        <div className="header">
           <section className="header_menu">
               <div className="header_img">
                   <img 
                        className="header_Image" 
                        src="https://imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/header/logo@2x.png" 
                     alt="logo"/>
               </div>  
                <div className=" header_align__menu">
                    <HotelIcon/>
                    <p>Hotels</p>
                </div>
                <div className=' header_align__menu'>
                   <ApartmentIcon/>
                    <p>Villas&Apts</p>
                </div>
                <div className='header_align__menu'>
                    <FlightIcon/>
                    <p>Flights</p>
                </div>
            </section>

            
            
                {
                    user.user? <Button onClick={()=>auth.signOut()}>Logout</Button>:
                    (
                 <section className="App__loginContainer">
                    <Button onClick={()=>setOpenSignIn(true)}>Sign In</Button>
                    <Button onClick={()=>setOpenSignUp(true)}>Sign Up</Button>
                    </section>)
                }
            
            
       </div>
    )
}

export default Header