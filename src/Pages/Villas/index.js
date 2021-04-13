import React,{useEffect} from 'react'
import {useDispatch} from 'react-redux'
import { Route, Switch, Redirect, withRouter} from 'react-router-dom';
import {fatchVillas} from '../../actions/villasAction';
import HomePage from './HomePage';
import PaymentPage from '../PaymentPage'
function Villas(props) {
  const { path } = props.match;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fatchVillas());
  }, []);
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

