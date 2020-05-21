import React from 'react';

import Navbar from './components/Navbar'
import Stations from './components/Stations'
import Test from './components/Test'
import Trips from './components/Trips'

import {BrowserRouter, Route, Switch} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Switch>
            <Route path="/" exact component = {Test}/>
            <Route path="/stations" exact component={Stations}/>
            <Route path="/trips" exact component={Trips}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
