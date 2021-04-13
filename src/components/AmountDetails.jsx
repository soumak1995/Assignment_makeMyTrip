import React from 'react'
import '../css/AmountDetails.css' 
function AmountDetails() {
    return (
        <div className="villa_card AmountDetails_card">
            <strong className="AmountDetails_card_title Guest_Card_title">PRICE BREAK-UP</strong>
            <div className="AmountDetails_card_details">
            <div className="AmountDetails_card_column">
                <section>
                    <strong className="AmountDetails_card_label room_night">1 Room x 1 Night</strong>
                      <small className="AmountDetails_card_label base_price">Base Price</small>
                </section>
                <p className="AmountDetails_card_value">₹ 2300</p>
            </div>
            <div className="AmountDetails_card_column ">
              <p className="AmountDetails_card_label total_discount">Total Discount</p>
              <p className="AmountDetails_card_value total_discount">₹ 300</p>
            </div>
            <div className="AmountDetails_card_column">
              <p className="AmountDetails_card_label">Price After Discount</p>
              <p className="AmountDetails_card_value">₹ 2000</p>
            </div>
            <div className="AmountDetails_card_column">
                <p className="AmountDetails_card_label">Taxes & Service fees</p>
                <p className="AmountDetails_card_value">₹ 606</p>
            </div>
            <div className="AmountDetails_card_column">
                <p className="AmountDetails_card_label total_label">Total Amount to be paid</p>
                <p className="AmountDetails_card_value total">₹ 2606</p>
            </div>
            </div>
            

                    
        </div>
    )
}

export default AmountDetails
