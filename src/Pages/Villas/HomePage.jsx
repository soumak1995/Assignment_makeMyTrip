import React,{useContext,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import Login from '../../components/Login';
import SignUp from '../../components/SignUp';
import {Context} from '../../contextApi/context';
import {auth} from '../../firebse';
import {authUser} from '../../actions/userActions';
import{fatchVillas} from '../../actions/villasAction'
import UserDetails from '../../components/UserDetails';
import Button from '@material-ui/core/Button';
import UploadProp from '../../components/UplaodProp';
import VillaCard from '../..//components/VillaCard';
import Notification from '../../components/Notification';
import GuestNoti from '../../components/GuestNoti'
import '../../css/HomePage.css'

function HomePage() {
  const user = useSelector(state =>state.userReducer);
  const villas = useSelector(state =>state.villaReducer);
    const {
        openSignIn,
        openSignUp,
        setOpenSignIn,
        setOpenSignUp,
        uploadModal,
       setuploadModal,
    }=useContext(Context);
    const dispatch=useDispatch();
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
    },[user?.user,dispatch]);
    useEffect(() => {
        if(user?.user!==null){
            setOpenSignIn(false);
            setOpenSignUp(false);
        } 
    }, [user?.user,setOpenSignIn,setOpenSignUp]);
    const PostVillas=()=>{
      setuploadModal(true);
    }
    useEffect(() => {
      dispatch(fatchVillas());
    }, [dispatch]);
    let paymentDia=[];

    if(villas.bookingStatus.length!==0)
    paymentDia=villas.bookingStatus.filter(villa=>villa?.GuestId===user?.user?.email);
    const notiFi=paymentDia?.filter(villa=>villa?.status || villa?.cancel);
    const hostNoti=villas.bookingStatus.filter(villa=>villa?.hostId===user?.user?.email);
    console.log(hostNoti)
    return (
        <div className="HomePage">
          <section className="HomePage_left">
              {user?.userDetails?.host && <Button variant="contained" color="primary" onClick={PostVillas}>
                  Post Villas&Apts
              </Button>}
             {hostNoti && hostNoti.map((book)=> <Notification className='show' book={book}/>)}
             {
               notiFi ? notiFi.map((notiData,index)=><GuestNoti key={index} className="show" notiData={notiData}/>):''
            }
          </section>
          <section className="HomePage_right">
        
                {villas?.villas?.map((villa,index)=>
                    
                        <VillaCard villa={villa} key={index}/>
                    )}
          </section>
         { uploadModal && <UploadProp/>}
          <UserDetails/>
          {openSignIn && <Login/>}
          {openSignUp && <SignUp/>}
          
        </div>
    )
}



export default React.memo(HomePage)
