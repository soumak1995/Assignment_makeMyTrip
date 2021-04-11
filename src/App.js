import { BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Header from './components/Header';
import {ContextProvider} from "./contextApi/context";
function App() {
  return (
  <ContextProvider>
        <Router>
          <Header/>
          <div className="App">
            <Switch>
              <Route exact path='/' component={HomePage} />
            </Switch>
          </div>
        </Router>
  </ContextProvider>
  );
}

export default App;

