import {
    FATCH_VILLA,
} from '../actions/types';
const initialState={
    villas:[]
}
export const villaReducer=(state=initialState, action)=>{
    switch(action.type){
        case FATCH_VILLA:
        return {...state,villas:[...action.payload]}
        default:
            return state;
    }
}
