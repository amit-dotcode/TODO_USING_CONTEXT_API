import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/index.css';

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