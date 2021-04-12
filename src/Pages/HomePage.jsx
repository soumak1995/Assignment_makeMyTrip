import React,{useContext,useEffect,useState} from 'react';
import {useDispatch,useSelector } from 'react-redux';
import Login from '../components/Login'
import SignUp from '../components/SignUp';
import {Context} from '../contextApi/context';
import {auth,db} from '../firebse';
import {authUser,addUserDetails} from '../actions/userActions';
import UserDetails from '../components/UserDetails';
function HomePage() {
  const user = useSelector(state =>state.userReducer);
    const {
        openSignIn,
        openSignUp,
        setOpenSignIn,
        setOpenSignUp
    }=useContext(Context);
    const dispatch=useDispatch();
    const [users,setUsers]=useState(null);
    console.log(user?.user);
    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged((User)=>{
           if(User){
           console.log(User)
             dispatch(authUser(User)) 
           }else{
             dispatch(authUser(null)) 
           }
         });
         return ()=>{
          unsubscribe();
         }
    },[user?.user]);
    useEffect(() => {
        if(user?.user!==null){
            setOpenSignIn(false);
            setOpenSignUp(false);
        } 
    }, [user?.user?.email]);
    useEffect(() => {
     
          const unsubscribe=db
            .collection("users")
            .doc(user?.user?.email)
            .get().then((doc) => {
              if (doc.exists) {
                  console.log("Document data:", doc.data());
              } else {
                  // doc.data() will be undefined in this case
                  console.log("No such document!");
              }
          }).catch((error) => {
              console.log("Error getting document:", error);
          })
            // .onSnapshot((snapshot)=>{
            //    setUsers(snapshot.docs.map(doc=>doc.data()));
            // })
            // console.log(users.find(user=>console.log(user.email,user?.user?.email)));
            // if(users!==null){
            //    dispatch(addUserDetails(users.find(user=>user.email===user?.user?.email)));
            // }
       
    }, [user?.userDetails]);
    return (
        <div>
            <UserDetails/>
          {openSignIn && <Login/>}
          {openSignUp && <SignUp/>}
        </div>
    )
}



export default HomePage
