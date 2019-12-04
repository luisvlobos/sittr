import React from 'react';
import Landing from './components/Landing';
import Login from './components/Login';
import Join from './components/Join';
import Caretakers from './components/Caretakers';
import Parents from './components/Parents';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/join" component={Join} />
          <Route exact path="/caretakers" component={Caretakers} />
          <Route exact path="/parents" component={Parents} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
