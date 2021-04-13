import React from 'react'
import NotificationWrapper from './NotificationWrapper';
function GuestNoti({className,notiData}) {
    return (
        <div>
            <NotificationWrapper className={className}>
                <strong>{`Your booking for ${notiData.NameOfVilla} has
                 been ${notiData.status?'Approve':''} ${notiData.cancel?'Canceled':''}.` }</strong>
            </NotificationWrapper>
        </div>
    )
}

export default GuestNoti
