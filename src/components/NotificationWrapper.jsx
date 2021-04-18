import React  from 'react'
import CloseIcon from '@material-ui/icons/Close';
import '../css/Notification.css';
function NotificationWrapper(props) {
    return (
        
        <div className={`Notification_card ${props.guest?props.guestNotiClose?'':props.className:props.notificationClose?'':props.className}`}>
            <header className="Notification_card_header">
               <CloseIcon className="Notification_card__icon-"fontSize="small"onClick={props.guest?props.handleClose:props.handleCancel}/>
            </header>
            <div className="Notification_padding">
               {props.children}
            </div>
   
        </div>
    )
}

export default NotificationWrapper
