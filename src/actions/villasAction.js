import {
   FATCH_VILLA,
   ADD_VILLA,
   REMOVE_VILLA,
   DATA_LOADING,
   DATA_FAILED,
} from './types'
import {db} from '../firebse'
export const fatchVillas = () => (dispatch) => {
     return db
     .collection("Villas")
     .orderBy('timestamp','desc')
     .onSnapshot((snapshot)=>{         
         dispatch(addVillas(snapshot.docs.map(doc=>doc.data())))
     })
   
 }
 export const addVillas = (villas) => ({
    type:FATCH_VILLA,
    payload: villas
});