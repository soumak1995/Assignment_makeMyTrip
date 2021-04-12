import React from 'react';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

function getModalStyle() {
    const top = 50 
    const left = 50
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      outline:'none',
      borderStyle:'none'
    },
  }));
function MyModal(props) {
  
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    
    return (
        <div>
             <Modal
                    open={props.open}
                    onClose={props.handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    //disableBackdropClick
                >
                 <div style={modalStyle} className={classes.paper}>
                    {props.children}
                 </div>
                </Modal>
        </div>
    )
}

export default MyModal
