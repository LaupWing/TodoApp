import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router';
import Home from './views/Home/Home'
import Auth from './views/Auth/Auth'

function App() {
  return (
        <div className="App">
            <Switch>
                <Route path="/auth" component={Auth}/>
                <Route path="/" component={Home}/>
            </Switch>
        </div>
  );
}

export default App;
