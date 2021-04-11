import React from 'react'
import HotelIcon from '@material-ui/icons/Hotel';
import ApartmentIcon from '@material-ui/icons/Apartment';
import FlightIcon from '@material-ui/icons/Flight';
import { Button,Input } from '@material-ui/core';
import '../css/Header.css'
function Header() {
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

            <section className="App__loginContainer">
            <Button>Sign In</Button>
            <Button>Sign Up</Button>
            </section>
       </div>
    )
}

export default Header
