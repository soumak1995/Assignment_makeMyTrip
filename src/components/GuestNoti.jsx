import React from 'react'
import NotificationWrapper from './NotificationWrapper';
import {useDispatch} from 'react-redux';
import {updateDoc} from '../actions/villasAction'
function GuestNoti({className,notiData}) {
    const dispatch = useDispatch();
    const handleClose=()=>{
        dispatch(updateDoc({
            id:notiData.docId,
            status:notiData.status,
            cancel:notiData.cancel,
            notificationClose:notiData.notificationClose,
            guestNotiClose:true
        }))
    }
    return (
        <div>
            <NotificationWrapper className={className} 
            handleClose={handleClose} 
            guestNotiClose={notiData.guestNotiClose}
            guest>
                <strong>{`Your booking for ${notiData.NameOfVilla} has
                 been ${notiData.status?'Approve':''} ${notiData.cancel?'Canceled':''}.` }</strong>
            </NotificationWrapper>
        </div>
    )
}

export default GuestNoti
