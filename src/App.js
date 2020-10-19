import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/index.css';
import Header from "./component/Header";
import Tabledata from './component/Tabledata';
import {Provider} from 'react-redux';
import store from './Store';
import Addcontact from './component/Addcontact';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


const App = () => {
   
    return (
      <Provider store={store}>
        {/* Using Route  */}
        <BrowserRouter>
        <Header/>  
        <div className="container my-5">
        <Switch>
          <Route exact path="/" component={Tabledata}/>
          <Route exact path="/component/add" component={Addcontact}/>
        </Switch>  
        </div> 
        </BrowserRouter>

      </Provider>
    );


}

export default App;