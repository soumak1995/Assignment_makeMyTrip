import {auth,db} from '../firebse'
import {
    AUTH_USER,
    DATA_LOADING,
    DATA_FAILED,
    ADD_USER_DTAILS
} from './types';

export const signUp = (email,password,username) => (dispatch) => {
   console.log(email,password,username);
    dispatch(dataLoading(true));
    return auth.createUserWithEmailAndPassword(email,password)
    .then((User)=>{
        dispatch(authUser(
             username
        ))
        return User.user.updateProfile({
            displayName:username,
         }) 
    }).then(response=>console.log(response))
    .catch((error)=>{
        dispatch(dataFailed(error.message));
        alert(error)
    })
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
     .then(response=>{
         dispatch(authUser(response.user.displayName));
         dispatch(getUserDetails(email));
         })
     .catch((error)=>{
        dispatch(dataFailed(error.message));
        alert(error)
     })
 };

 export const submitUserDetails = (obj) => (dispatch) => {
    dispatch(dataLoading(true));
    return  db.collection("users").doc(obj.email).set({
              ...obj
    }).then(response=>{
        dispatch(getUserDetails(obj.email));
    }).catch((error)=>{
        dispatch(dataFailed(error.message));
        alert(error)
     });
};
export const getUserDetails = (email)=>(dispatch)=>{
    return  db
    .collection("users")
    .doc(email)
    .get().then((doc) => {
      if (doc.exists) {
         dispatch(addUserDetails(doc.data()));
          console.log("Document data:", doc.data());
      } else {
          console.log("No such document!");
      }
  }).catch((error) => {
    dispatch(dataFailed(error));
      console.log("Error getting document:", error);
  })
}
export const addUserDetails = (data) => ({
    type:ADD_USER_DTAILS,
    payload: data
});