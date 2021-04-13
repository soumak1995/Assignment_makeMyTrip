import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { Route, Switch, Redirect, withRouter} from 'react-router-dom';
import {fatchVillas,bookingStatus} from '../../actions/villasAction';
import HomePage from './HomePage';
import PaymentPage from '../PaymentPage';
function Villas(props) {
  const { path } = props.match;
  const user = useSelector(state =>state.userReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fatchVillas());
  }, [user]);
  useEffect(() => {
    if(user?.user?.email)
    dispatch(bookingStatus(user?.user?.email));

  }, [user])
  return (
          <Switch>
              <Route 
                  exact
                  path={`${path}/`}
                  component={HomePage}
              />
              <Route 
                  path={"/Villas/:id"}
                  component={PaymentPage}
              />
         </Switch>
  );
}
export default withRouter(Villas);

