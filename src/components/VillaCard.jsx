import React from 'react'
import BathtubIcon from '@material-ui/icons/Bathtub';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import WifiIcon from '@material-ui/icons/Wifi';
import PowerIcon from '@material-ui/icons/Power';
import Rating from '@material-ui/lab/Rating';
import CheckIcon from '@material-ui/icons/Check';
import '../css/VillaCard.css'
function VillaCard({villa}) {

    return (
        <div className="villa_card">
           <img className="villa_card__img"src={villa?.imageUrl} alt={villa?.NameOfVilla}/>
           <section className="villa_card_left">
               <div className="center_align ">
                    <h4 className="margin_right">{villa?.NameOfVilla}</h4>
                    <Rating name="half-rating"  defaultValue={2.5} precision={0.5} />
               </div>
               
               <strong>{villa?.location}</strong>
               {villa?.CoupleFrnd && <div className="villa_card__cplfrnd">
                   <span>Couple Friendly</span>
               </div>}
               <section className="villa_card__feature">
                    <div className="center_align margin_left_right">
                        <BathtubIcon/>
                        <span className="villa_card__label">Living Room</span>
                    </div>
                    <div className="center_align margin_left_right">
                        <WifiIcon/>
                        <span className="villa_card__label">Living Room</span>
                    </div>
                    <div className="center_align margin_left_right">
                        <LocalHospitalIcon/>
                        <span className="villa_card__label">Living Room</span>
                    </div>
                    <div className="center_align margin_left_right">
                        <PowerIcon/>
                        <span className="villa_card__label">Living Room</span>
                    </div>
               </section>
           </section>
           <section className="villa_card_right">
               <p>INCLUDE THIS PRICE</p>
                <div className="villa_card_right_brkfst center_align">
                   <CheckIcon fontSize="small"/>
                    <span className="villa_card__label">Free Brackfast</span>
                </div>
                <div className="center_align">
                    <h5> ₹ 1200</h5>
                    <small>+ ₹ 399 taxes and fees</small>
                </div>
                <strong>Per Night</strong>
           </section>
        </div>
    )
}

export default VillaCard
