import React,{useContext} from 'react';
import { Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Context} from '../contextApi/context';
export default function PaymentDialog() {
  const {
    open,
    handleClose
}=useContext(Context);
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Payment Status" }</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Payment Has been successfully done pending for approval
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        <Link to='/'>
          <Button onClick={handleClose} color="primary" autoFocus>
                 close
          </Button>
          </Link>
        </DialogActions>
      </Dialog>
    </div>
  );
}
