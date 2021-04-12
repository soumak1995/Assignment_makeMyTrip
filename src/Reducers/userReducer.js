import {
    AUTH_USER,
    DATA_LOADING,
    DATA_FAILED,
    ADD_USER_DTAILS
} from '../actions/types';

const userState = {
    user:null,
    loading:'',
    error:null,
    userDetails:null
};


export default function (state=userState, action) {
    switch(action.type){
        case DATA_LOADING:
            return {...state, loading:'Loading...',error:''};
        case AUTH_USER:
              return {...state, user:action.payload,loading:'',error:''};
       case ADD_USER_DTAILS:
       return {...state, userDetails:action.payload,loading:'',error:''};
        case  DATA_FAILED:
             return {...state, error:action.payload,loading:''};
        default:
            return state;
    }
}
