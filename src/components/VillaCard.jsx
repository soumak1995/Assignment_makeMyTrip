import React from 'react'
import BathtubIcon from '@material-ui/icons/Bathtub';

import {useSelector,useDispatch} from 'react-redux';
import { Button } from '@material-ui/core';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import WifiIcon from '@material-ui/icons/Wifi';
import PowerIcon from '@material-ui/icons/Power';
import Rating from '@material-ui/lab/Rating';
import CheckIcon from '@material-ui/icons/Check';
import {useHistory} from 'react-router-dom'
import {deleteVillas} from '../actions/villasAction'
import '../css/VillaCard.css';
function VillaCard({villa}) {
    const user = useSelector(state =>state.userReducer);;
    const cottage = useSelector(state =>state.villaReducer);
    const hostFlag=cottage?.villas?.find(k=>k.email===user?.user?.email);
    const flag=cottage.bookingStatus?.find((v)=>v.id===villa.id);
    const dispatch=useDispatch();
    const history=useHistory();
    const handleBooking=(e)=>{
         e.preventDefault();
        history.push(`/Villas/${villa.id}`)
    }
    const handleRemove=(e)=>{
        e.preventDefault();
        dispatch(deleteVillas(villa.id));
    }

    return (
        <div className="villa_card">
            <div className="villa_card__imgdiv">

                 <img  className="villa_card__imgveri"src="https://imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/mbg_listing.png" alt="imgak" />
                 <img className="villa_card__img"src={villa?.imageUrl} alt={villa?.NameOfVilla}/>
            </div>
             
          
           <section className="villa_card_left">
               <div className="center_align">
                    <h4 className="margin_right">{villa?.NameOfVilla}</h4>
                    <Rating name="half-rating"  defaultValue={4.5} precision={0.5} />
               </div>
               
               <strong className="strong">{villa?.location}</strong>
               {villa?.CoupleFrnd && <div className="villa_card__cplfrnd">
                   <span>Couple Friendly</span>
               </div>}
               <img className="villa_card__promo" src="https://promos.makemytrip.com/Hotels_product/Persuasion_Icons/MySafety3x.png" alt="promo"/>
               <a href="#" className="villa_card__msg">Self certified by property</a>
               <section className="villa_card__feature">
                    {villa.feachers?.LivingRoom && <div className="center_align margin_left_right">
                        <BathtubIcon/>
                        <span className="villa_card__label">Living Room</span>
                    </div>}
                   {villa.feachers?.freeWifi && <div className="center_align margin_left_right">
                        <WifiIcon/>
                        <span className="villa_card__label">Wifi</span>
                    </div>}
                    {villa?.feachers?.DocOnCall && <div className="center_align margin_left_right">
                        <LocalHospitalIcon/>
                        <span className="villa_card__label">Doctor On Call</span>
                    </div>}
                   {villa?.feachers?.PowerBkp && <div className="center_align margin_left_right">
                        <PowerIcon/>
                        <span className="villa_card__label">Power Backup</span>
                    </div>}
               </section>
           </section>
           <section className="villa_card_right">
               <p>INCLUDE THIS PRICE</p>
                <div className="villa_card_right_brkfst center_align">
                   <CheckIcon fontSize="small"/>
                    <span className="villa_card__label">Free Cancellation</span>
                </div>
                <div className="center_align margin_top">
                    <h5> {villa.amount}</h5>
                    <small>+ ₹ 399 taxes and fees</small>
                </div>
                <strong className="strong">Per Night</strong>
                {user?.user?.email && !flag && !hostFlag?<Button variant="outlined" 
                color="primary" onClick={handleBooking}>Book Now</Button>:""
                }
                {user?.user?.email &&  hostFlag?<Button variant="outlined" 
                color="secondary" onClick={handleRemove}>Remove</Button>:""
                }
                {
                   user?.user?.email && flag ?<strong className="booking_status strong">BOOKED</strong>:""
                }
           </section>
        </div>
    )
}

export default VillaCard
