import React from 'react';

import Signup from './Component/pages/Signup';
import { Router, Route,Switch } from 'react-router-dom';
import history from '../src/history';
import Search from './Component/Search';
import Admin from './Component/RolePage/admin';
import SuperAdmin from './Component/RolePage/superadmin'
import Login from './Component/pages/Login';
import Edit from "./Component/RolePage/EditCitizenDetail";

function App() {
  return (
    <Router history={history}>
    <div className="App">
     <Switch>
     <Route exact path="/" component={Signup} />
    <Route exact path="/login" component={Login}/>
    <Route exact path="/searchptin" component={Search} />
    <Route exact path="/admin" component={Admin} />
    <Route exact path="superadmin" component={SuperAdmin}/>
    <Route exact path="/EditCitizenDetails" component={Edit} />
     </Switch>
    </div>
    </Router>
  );
}

export default App;


