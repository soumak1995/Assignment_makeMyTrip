import {
   FATCH_VILLA,
   ADD_bOOKING,
   ADD_STATUS
} from './types'
import {db} from '../firebse'
export const fatchVillas = () => (dispatch) => {
     return db
     .collection("Villas")
     .orderBy('timestamp','desc')
     .onSnapshot((snapshot)=>{         
         dispatch(addVillas(snapshot.docs.map(doc=>({...doc.data(),id:doc.id}))))
     })
   
 }
 export const addVillas = (villas) => ({
    type:FATCH_VILLA,
    payload: villas
});

 export const addBooking = (bookingDetails) => ({
    type:ADD_bOOKING,
    payload: bookingDetails
 })

 export const bookingStatus = (email) => (dispatch) => {
    return db
    .collection("Bookings")
    .onSnapshot((snapshot)=>{   
        dispatch(addBookingStatus({
            email:email,
            data:snapshot.docs.map(doc=>({...doc.data(),docId:doc.id}))
        }))
    })
  
}
export const addBookingStatus = (bookingStatus) => ({
    type:ADD_STATUS,
    payload: bookingStatus
 })

 export const updateDoc = (obj) => (dispatch) => {
    return db.collection("Bookings").doc(obj.id).update({
        status:obj?.status,
        cancel:obj?.cancel,
        notificationClose:obj?.notificationClose,
        guestNotiClose:obj?.guestNotiClose
    })
    .catch(err=>alert(err))
  
}
export const deleteDoc = (id) => (dispatch) => {
    return db.collection("Bookings").doc(id).delete().then(() => {
        console.log("Document successfully deleted!");
       
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });
  
}
export const deleteVillas = (id) => (dispatch) => {
    return db.collection("Villas").doc(id).delete().then(() => {
        console.log("Document successfully deleted!");
       
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });
  
}