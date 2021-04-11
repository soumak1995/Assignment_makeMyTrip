import React from 'react'
import { Route, Switch, Redirect, withRouter} from 'react-router-dom';
import HomePage from './HomePage'
function Villas() {
  return (
        <Switch>
           <Route exact path='/' component={HomePage} />
        </Switch>
  );
}
export default withRouter(Villas);

