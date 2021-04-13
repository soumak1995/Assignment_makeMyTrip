import { BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import {ContextProvider} from "./contextApi/context";
import Villas from "./Pages/Villas/index";
function App() {
  return (
  <ContextProvider>
        <Router>
          <Header/>
          <div className="App">
            <Switch>
              <Route path='/Villas' component={Villas} />
             <Redirect 
               exact
              from={`/`} to={"/Villas"}
              />
            </Switch>
          </div>
        </Router>
  </ContextProvider>
  );
}

export default App;

