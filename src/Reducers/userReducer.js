import {
    AUTH_USER,
    DATA_LOADING,
    DATA_FAILED
} from '../actions/types';

const userState = {
    user:null,
    loading:'',
    error:null
};


export default function (state=userState, action) {
    switch(action.type){
        case DATA_LOADING:
            return {...state, loading:'Loading...'};
        case AUTH_USER:
              return {...state, user:action.payload};
        case  DATA_FAILED:
             return {...state, error:action.payload};
        default:
            return state;
    }
}
