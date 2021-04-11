import {auth} from '../firebse'
import {
    AUTH_USER,
    DATA_LOADING,
    DATA_FAILED
} from './types';

export const signUp = (email,password,username) => (dispatch) => {
   console.log(email,password,username);
    dispatch(dataLoading(true));
    return auth.createUserWithEmailAndPassword(email,password)
    .then((authUser)=>{
        dispatch(authUser(
             username
        ))
        return authUser.user.updateProfile({
            displayName:username
         }) 
    }).then(response=>console.log(response))
    .catch((error)=>alert(error.message))
}

export const dataLoading = () => ({
    type:DATA_LOADING
});

export const dataFailed = (errmess) => ({
    type:DATA_FAILED,
    payload: errmess
});
export const authUser = (user) => ({
    type:AUTH_USER,
    payload: user
});

export const signIn = (email,password) => (dispatch) => {
     dispatch(dataLoading(true));
     return auth.signInWithEmailAndPassword(email,password)
     .then(response=>dispatch(authUser(response.user.displayName)))
     .catch((err)=>alert(err))
 };

 