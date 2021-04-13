import {
   FATCH_VILLA,
   ADD_bOOKING

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
export const bookVilla = (obj) => (dispatch) => {
    return db.collection("Bookings").add({
        ...obj
        }).then(response=>{
           
        }).catch((error)=>{
          alert(error)
        });
  
}
export const fatchBookings = (obj) => (dispatch) => {
    return db.collection("Bookings").add({
        ...obj
        }).then(response=>{
           console.log(response);
        }).catch((error)=>{
        alert(error)
        });
  
}
 export const addBooking = (bookingDetails) => ({
    type:ADD_bOOKING,
    payload: bookingDetails
 })