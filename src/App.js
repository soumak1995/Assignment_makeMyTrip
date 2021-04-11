import { BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'

import { Provider } from 'react-redux';
import HomePage from './Pages/HomePage'
import Header from './components/Header'
import store from './Store/index';
function App() {
  return (
    <Provider store={store}>
    <Router>
      <Header/>
      <div className="App">
        <Switch>
           <Route exact path='/' component={HomePage} />
        </Switch>
      </div>
    </Router>
    </Provider>
  );
}

export default App;

