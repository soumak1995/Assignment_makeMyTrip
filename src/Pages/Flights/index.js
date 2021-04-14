import React from 'react'
import { Route, Switch,withRouter} from 'react-router-dom';
import Flights from '../Flights/Flights'
function FilghtsRoot(props) {
  const { path } = props.match;

  return (
          <Switch>
              <Route 
                  exact
                  path={`${path}/`}
                  component={Flights}
              />
            
         </Switch>
  );
}
export default withRouter(FilghtsRoot);