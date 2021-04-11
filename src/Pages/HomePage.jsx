import React,{useContext,useEffect} from 'react';
import { connect,useDispatch,useSelector } from 'react-redux';
import {count_increment, count_decrement} from '../actions/demoActions';
import Login from '../components/Login'
import SignUp from '../components/SignUp';
import {Context} from '../contextApi/context';
import {auth} from '../firebse';
import {authUser} from '../actions/userActions';
function HomePage() {
  const user = useSelector(state =>state.userReducer);
    const {
        openSignIn,
        openSignUp,
        setOpenSignIn,
        setOpenSignUp
    }=useContext(Context);
    const dispatch=useDispatch();
    console.log(openSignIn,openSignUp);
    useEffect(()=>{
        setOpenSignIn(false);
        setOpenSignUp(false);
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
    },[user.user]);
    return (
        <div>
          {openSignIn && <Login/>}
          {openSignUp && <SignUp/>}
        </div>
    )
}

const mapStateToProps = (state) => ({
    count:state.countReducer.count,
})


export default connect(mapStateToProps,{ count_increment, count_decrement })(HomePage)
