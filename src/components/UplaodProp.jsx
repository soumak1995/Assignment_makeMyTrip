import React,{useState,useContext,} from 'react';
import {Context} from '../contextApi/context';
import firebase from 'firebase';
import {useDispatch,useSelector} from 'react-redux';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { Button,Input } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import {storage,db} from '../firebse';
import {fatchVillas} from '../actions/villasAction'
import MyModal from "./MyModal";

function UplaodProp() {
    const {
        uploadModal,
        setuploadModal
    }=useContext(Context);
    const [NameOfVilla,setNameOfVilla]=useState('');
    const [location,setLocation]=useState('');
    const [CoupleFrnd,setCoupleFrnd]=useState(false);
    const[image,setImage]=useState(null);
    const [progress,setProgress]=useState(0);
    const [amount,setAmount]=useState('');
    const [feachers, setFeachers] =useState({
        LivingRoom: true,
        DocOnCall: false,
        PowerBkp: false,
        freeWifi: false
      });
      const dispatch = useDispatch();
      const user = useSelector(state =>state.userReducer);
      const handleChange = (event) => {
        setFeachers({ ...feachers, [event.target.name]: event.target.checked });
      };
      const handleSwitch=()=>{
          setCoupleFrnd(prevState=>!prevState);
      }
      const handleUpload=(e)=>{
        if(e.target.files[0]){
            setImage(e.target.files[0]);
        }
      }
      const handleSubmit=()=>{
        const uploadtask=storage.ref(`images/${image?.name}`).put(image)
        uploadtask.on(
            "state_changed",
            (snapshot)=>{
                const progress=Math.round(
                    (snapshot.bytesTransferred/snapshot.totalBytes)*100
                )
                setProgress(progress);
            },
            error=>{
                console.log(error)
                alert(error.message)
            },
            ()=>{
                storage
                .ref("images")
                .child(image.name)
                .getDownloadURL()
                .then((url)=>{
                  db.collection("Villas").add({
                      timestamp:firebase.firestore.FieldValue.serverTimestamp(),
                      imageUrl:url,
                      NameOfVilla,
                      location,
                      CoupleFrnd,
                      feachers,
                      amount,
                      HostName:user.user.displayName,
                      email:user.user.email,
                  }).then(res=>{
                    setuploadModal(false);
                    dispatch(fatchVillas());
                  }).catch((err)=>{
                      console.log(err)
                  })
                  setProgress(0);
                  setImage(null)
                });
            }
            

        )
  }
    return (
        <div>
             <MyModal open={uploadModal} handleClose={setuploadModal}>
                <form className="uploadProp_form">
                   <center>
                    <img 
                    className="header_Image" 
                    src="https://imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/header/logo@2x.png"  
                    alt="logo"/>
                        </center>
                    <Input placeholder="Villa Name"
                    type="text"
                    value={NameOfVilla}
                    onChange={e=>setNameOfVilla(e.target.value)}
                    />
                    <br/>
                    <Input placeholder="Location"
                    type="text"
                    value={location}
                    onChange={e=>setLocation(e.target.value)}
                    />
                    <Input placeholder="Amount"
                        type="text"
                        value={amount}
                        onChange={e=>setAmount(e.target.value)}
                        />
                     <FormControlLabel
                            control={<Checkbox checked={feachers.LivingRoom} onChange={handleChange} name="LivingRoom" />}
                            label="Living Room"
                    />
                     <FormControlLabel
                            control={<Checkbox checked={feachers.DocOnCall} onChange={handleChange} name="DocOnCall" />}
                            label="Doctor On Call"
                    />
                    <FormControlLabel
                            control={<Checkbox checked={feachers.PowerBkp} onChange={handleChange} name="PowerBkp" />}
                            label="Power Backup"
                    />
                     <FormControlLabel
                            control={<Checkbox checked={feachers.freeWifi} onChange={handleChange} name="freeWifi" />}
                            label="Free Wifi"
                    />
                     <FormControlLabel

                            control={<Switch
                                checked={CoupleFrnd}
                                onChange={handleSwitch}
                                name="checkedA"
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                            />} 
                            label="Couple Friendly "
                            />
                      <label className="file">
                        <span className="input_label">Upload Photo</span>
                        <input type="file"  id="file"
                        onChange={handleUpload}
                         aria-label="choose photo"/>
                      </label>
                      <progress
                        className="imageUpload__progress" 
                        value={progress}
                        max="100"
                        />
                    <Button onClick={handleSubmit}>Submit</Button>
                </form>
          </MyModal>
        </div>
    )
}

export default UplaodProp
