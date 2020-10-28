import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/index.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './component/Header';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import NotFound from './component/Not_Found';
import AddUser from './component/pages/AddUser';
import EditUser from './component/pages/EditUser';
import ViewUser from './component/pages/ViewUser';

const App = () => {
   
    return (
      <>
      <BrowserRouter>
        <Header/>
        <div className="container">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/About" component={About}/>
          <Route exact path="/Contact" component={Contact}/>
          <Route exact path="/component/pages/AddUser" component={AddUser}/>
          <Route exact path="/component/pages/EditUser/:id" component={EditUser}/>
          <Route exact path="/component/pages/ViewUser/:id" component={ViewUser}/>
          <Route  component={NotFound}/>
        </Switch>
        </div>
     
      </BrowserRouter>
      </>
    );


}

export default App;