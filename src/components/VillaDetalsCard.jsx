import React from 'react'
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
function VillaDetalsCard({villaDetals}) {
    return (
        <div className=" villa_card paymentPage_card">
                 <section className="paymentPage_left">
                     <img className="paymentPage_img" src={villaDetals?.imageUrl} alt={villaDetals?.NameOfVilla}/>
                 </section>
                 <section className="paymentPage_right">
                      <div className="paymentPage_right__up">
                          <section className="paymentPage_right__up_left">
                                <h4>{villaDetals?.NameOfVilla}</h4>
                                <strong className="per_night strong">Per Night</strong>
                                <strong className="strong">For two Adults</strong>
                                    <section className="center_align non_refund">
                                    <RemoveCircleIcon fontSize="small"/>
                                    <span >Non-Refundable</span>
                                    </section>
                                    <section className="center_align room_only">
                                    <CheckCircleIcon fontSize="small"/>
                                    <span>Room Only</span>
                                    </section>
                          </section>
                          <section className="paymentPage_right__up_right">
                              <p className="flex-end"><del>₹ 2300</del></p>  
                              <strong className="flex-end font">₹ 2000</strong>
                              <p>+₹ 606 taxes & fees</p>
                              <p className="flex-end deal_color">Deal Applied</p>
                              <p className="flex-end deal_color">Saving ₹ 300</p>
                          </section>
                           
                     </div>
                     <div className="paymentPage_right__bottom">
                         <h4>User Rating & Reviews</h4>
                         <small>56 Ratings & 40 Reviews</small>
                         <p className="para">
                          Loved everything about the resort. <br/>
                          People who want peace should defini...
                         </p>
                         <a href="#" className="read_me">READ ME</a>
                     </div>
                 </section>
            </div>
    )
}

export default VillaDetalsCard
