import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/App.css'
import Login from "./components/pages/Login";
import NavbarComp from "./components/pages/NavbarComp";
import Addcandidate from "./components/pages/Addcandidate";
import Viewcandidate from "./components/pages/Viewcandidate";
import Viewinterview from "./components/pages/Viewinterview";
import Home from "./components/pages/Home";
import Details from "./components/pages/Details";
import Addinterviewed from "./components/pages/Addinterviewed"
import {BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import Editcandidate from "./components/pages/Editcandidate";
import Editinterview from "./components/pages/Editinterview";
import Import from "./components/pages/Import"
import Notify from "./components/pages/Notify"
import Register from "./components/pages/Register"
import axios from "axios";


function App(){

  var pathname = window.location.pathname; 
  if(pathname == "/"){
    return (
      <Router>
    <div className="App">
      <Route path="/" exact component={Login}/>
    </div>
    </Router> 
    );
  }
  else if(pathname == "/Register"){
    return (
      <Router>
    <div className="App">
      <Route path="/Register" exact component={Register}/>
    </div>
    </Router> 
    );
  }
  else{
   return (
    <Router>
    <div className="App">
      <NavbarComp/>
      <br></br>
      <Route path="https://tij6.herokuapp.com/home/" exact component={Home}/>
      <Route path="https://tij6.herokuapp.com/Addcandidate/" component={Addcandidate}/>
      <Route path="https://tij6.herokuapp.com/Editcandidate/:id/" component={Editcandidate}/>
      <Route path="https://tij6.herokuapp.com/Viewcandidate/" component={Viewcandidate}/>
      <Route path="https://tij6.herokuapp.com/Details/" component={Details}/>
      <Route path="https://tij6.herokuapp.com/Viewinterview/" component={Viewinterview}/>
      <Route path="https://tij6.herokuapp.com/Addinterviewed/" component={Addinterviewed}/>
      <Route path="https://tij6.herokuapp.com/Editinterview/:id/" component={Editinterview}/>
      <Route path="https://tij6.herokuapp.com/Import/" component={Import}/>
      <Route path="https://tij6.herokuapp.com/Notify/" component={Notify}/>
    </div>
    </Router> 
   );
  }
}

export default App;