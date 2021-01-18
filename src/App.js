import { Component } from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import SignIn from './components/SignIn/SignIn';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
         <Route exact path="/" component={SignIn}/>
          <Route path="/dashboard" component={Dashboard}/>
          </Switch>
        </div>
      </Router>
    )
  } 
}
export default App;
