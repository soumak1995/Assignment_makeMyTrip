import {
    FATCH_VILLA,
    ADD_bOOKING,
    ADD_STATUS
} from '../actions/types';
const initialState={
    villas:[],
    bookings:[],
    bookingStatus:[]
}
export const villaReducer=(state=initialState, action)=>{
    switch(action.type){
        case FATCH_VILLA:
        return {...state,villas:action.payload}
        case ADD_bOOKING:
            console.log(action.payload)
        return {...state,bookings:[...state.bookings,action.payload]}
        case ADD_STATUS:
            const statArray=action.payload.data.filter(villa=>villa.hostId)
            if(statArray.length!==0)
           return {...state,bookingStatus:[...statArray]}
           else
           return {...state}
        default:
            return state;
    }
}
