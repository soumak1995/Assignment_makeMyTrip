import React,{useEffect} from 'react'
import {useDispatch} from 'react-redux'
import { Route, Switch, Redirect, withRouter} from 'react-router-dom';
import VillasPage from './VillasPage';
import {fatchVillas} from '../actions/villasAction';
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
              component={VillasPage}
          />
         </Switch>
  );
}
export default withRouter(Villas);

