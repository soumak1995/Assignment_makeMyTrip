import { BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Header from './components/Header';
import {ContextProvider} from "./contextApi/context";
import Villas from "./Pages/index";
function App() {
  return (
  <ContextProvider>
        <Router>
          <Header/>
          <div className="App">
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/Villas' component={Villas}/>
            </Switch>
          </div>
        </Router>
  </ContextProvider>
  );
}

export default App;

