import React,{useState}from 'react';
import UserInfoCard from './UserInfoCard';
import { Input } from '@material-ui/core';
import {useDispatch,useSelector} from 'react-redux';
import {bookVilla} from '../actions/villasAction';
import '../css/PaymentCard.css'

function PaymentCard({villaDetals}) {
    const today=new Date().toLocaleDateString();
    const [cardName,setCardName]=useState('');
    const [cardNum,setCardNum]=useState('');
    const [expDate,setExpDate]=useState('');
    const [cvv,setCvv]=useState('');
    const [guest,setGuest]=useState('');
    const [checkin,setCheckIn]=useState('');
    const [checkout,setCheckout]=useState('');
    const [noOfGuest,setNoOfGuest]=useState(0);
    const dispatch = useDispatch();
    const user = useSelector(state =>state.userReducer);
    const handleSelect=(e)=>{
        setNoOfGuest(e.target.value);
    }
    const handlePayment=(e)=>{
       e.preventDefault();
       dispatch(bookVilla({
        guest,
        checkin,
        checkout,
        noOfGuest,
        amount:villaDetals.amount,
        hostId:villaDetals.email,
        GuestId:user.user.email,
        status:false
       }));
    }
    console.log(villaDetals);
    return (
        <div className="villa_card payment_card">
            <UserInfoCard props={
                {guest,
                setGuest,
                checkin,
                setCheckIn,
                checkout,
                setCheckout,
                noOfGuest,
                setNoOfGuest,
                handleSelect}
            }/>
                    <div className="payment_card_left">
                        <center>
                            <strong className="Guest_Card_title">PAYMENT DETAILS</strong>
                        </center>
                    <Input placeholder="Cardholder Name"
                        type="text"
                        value={cardName}
                        onChange={e=>setCardName(e.target.value)}
                        />
                         <Input placeholder="Card Number"
                            type="text"
                            value={cardNum}
                            onChange={e=>setCardNum(e.target.value)}
                        />
                         <Input placeholder="MM/YYYY"
                            type="text"
                            value={expDate}
                            onChange={e=>setExpDate(e.target.value)}
                        />
                         <Input placeholder="CVV"
                            type="password"
                            value={cvv}
                            onChange={e=>setCvv(e.target.value)}
                        />
                        <button className="btn" onClick={handlePayment}>Payment</button>
                    </div>
            </div>
    )
}

export default PaymentCard
