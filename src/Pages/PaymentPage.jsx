import React from 'react'
import {useSelector} from 'react-redux';
import VillaDetalsCard from '../components/VillaDetalsCard'
import PaymentCard from '../components/PaymentCard'
import AmountDetails from '../components/AmountDetails'
import  '../css/PaymentPage.css';
import {
    useParams
  } from "react-router-dom";
function PaymentPage() {
    let { id } = useParams();
    const Villas = useSelector(state =>state?.villaReducer?.villas);
    const villaDetals=Villas.find(villa=>villa.id===id);
    console.log(villaDetals)
    return (
        <main className="paymentPage">
            <div>
                <VillaDetalsCard villaDetals={villaDetals}/>
            </div>
            <div className="paymentPage_bottom">
                <PaymentCard villaDetals={villaDetals}/>
                <AmountDetails/>
            </div>
            
        </main>
    )
}

export default PaymentPage
