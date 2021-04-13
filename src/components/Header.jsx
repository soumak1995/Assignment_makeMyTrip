import React,{useContext} from 'react';
import { NavLink} from 'react-router-dom';
import {useSelector} from 'react-redux'
import HotelIcon from '@material-ui/icons/Hotel';
import ApartmentIcon from '@material-ui/icons/Apartment';
import FlightIcon from '@material-ui/icons/Flight';
import { Button } from '@material-ui/core';
import {Context} from '../contextApi/context';
import {auth} from '../firebse';
import '../css/Header.css'

function Header() {
    const {
        setOpenSignIn,
        setOpenSignUp,
        openSignIn,
        openSignUp
    }=useContext(Context);
    const user = useSelector(state =>state.userReducer);
    console.log( openSignIn,
        openSignUp)
    return (
        <nav className="header">
           <ul className="header_menu">
               
              
               <li className="header_img">
                   <img 
                        className="header_Image" 
                        src="https://imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/header/logo@2x.png" 
                     alt="logo"/>
               </li> 
           
               <NavLink
               activeClassName='is-active'
               className="tab"
                to="/Hotels">
                    <li className=" header_align__menu">
                            <HotelIcon/>
                            <p>Hotels</p>
                        </li>
               </NavLink>
                <NavLink activeClassName='is-active tab' 
                className="tab"
                to="/Villas">
                <li className=' header_align__menu'>
                   <ApartmentIcon/>
                    <p>Villas&Apts</p>
                </li>
                </NavLink>
                <NavLink activeClassName='is-active tab'
                className="tab"
                to="/Flights">
                    <li className='header_align__menu'>
                        <FlightIcon/>
                        <p>Flights</p>
                    </li>
                </NavLink>
                
            </ul>

            
            
                {
                    user.user? <Button onClick={()=>auth.signOut()}>Logout</Button>:
                    (
                   <section className="App__loginContainer">
                    <Button onClick={()=>setOpenSignIn(true)}>Sign In</Button>
                    <Button onClick={()=>setOpenSignUp(true)}>Sign Up</Button>
                    </section>)
                }
            
           
       </nav>
    )
}

export default Header
