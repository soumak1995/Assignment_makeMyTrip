import React from 'react'
import { Button } from '@material-ui/core';
import {useDispatch} from 'react-redux';
import {updateDoc} from '../actions/villasAction';
import NotificationWrapper from './NotificationWrapper'
function Notification({className,book}) {
    const dispatch = useDispatch();
    const handleApprove=()=>{
        dispatch(updateDoc({
            id:book.docId,
            status:true,
            cancel:false,
            notificationClose:true,
            guestNotiClose:book.guestNotiClose
        }))
    }
    const handleCancel=()=>{
        dispatch(updateDoc({
            id:book.docId,
            status:false,
            cancel:true,
            notificationClose:true,
            guestNotiClose:book.guestNotiClose
        }))
        
    }
    return (
        <NotificationWrapper className={className} 
        notificationClose={book.notificationClose}
        handleCancel={handleCancel}>
            
              <div>
                  <label>Property Name</label>
                  <span>{book.NameOfVilla}</span>
              </div>
              <div>
                  <label>Number Guest(s)</label>
                  <span>{book?.noOfGuest}</span>
              </div>
              <div>
              <label>Check in</label>
                  <span>{book.checkin}</span>
              </div>
              <div>
              <label>Check out</label>
                  <span>{book.checkout}</span>
              </div>
              <section>
                  <div>
                     <strong>Booking Amount</strong>
                     <strong>{book.amount}</strong>
                  </div>
                  <div>
                     <strong>Your Share</strong>
                     <strong>{parseInt(book.amount)-100}</strong>
                  </div>
              </section>
         
                <div className="btn_group">
                <Button variant="outlined" color="primary" onClick={handleApprove}>Approve</Button>
                <Button variant="outlined" color="secondary" onClick={handleCancel}>cancel</Button>
                </div>
                
        </NotificationWrapper>
    )
}

export default Notification
