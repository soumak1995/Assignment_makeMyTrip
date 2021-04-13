import React  from 'react'
import '../css/Notification.css';
function NotificationWrapper(props) {
    return (
        <div className={`Notification_card ${props.className}`}>
            {props.children}
        </div>
    )
}

export default NotificationWrapper
