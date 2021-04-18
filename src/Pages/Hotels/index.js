import React from 'react'
import { Route, Switch,withRouter} from 'react-router-dom';
import Hotels from '../Hotels/Hotels'
function HotelsRoot(props) {
  const { path } = props.match;

  return (
          <Switch>
              <Route 
                  exact
                  path={`${path}/`}
                  component={Hotels}
              />
            
         </Switch>
  );
}
export default withRouter(HotelsRoot);

