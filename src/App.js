import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/App.css'
// import Login from "./components/pages/Login";
import NavbarComp from "./components/pages/NavbarComp";
import Add from "./components/pages/Add";
import View from "./components/pages/View";
import Interviewed from "./components/pages/Interviewed";
import Home from "./components/pages/Home";
import Details from "./components/pages/Details";
import Addinterviewed from "./components/pages/Addinterviewed"
import editcadidate from "./components/pages/Editcandidate";
import {BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import Editcandidate from "./components/pages/Editcandidate";

function App(){
  // const [token, setToken] = useState();

  // if(!token) {
  //   return <Login setToken={setToken} />
  // }
  return (
    <Router>
    <div className="App">
      <NavbarComp/>
      <Route path="/" exact component={Home}/>
      <Route path="/Add" component={Add}/>
      <Route path="/View" component={View}/>
      <Route path="/Details" component={Details}/>
      <Route path="/Interviewed" component={Interviewed}/>
      <Route path="/Addinterviewed" component={Addinterviewed}/>
      <Route path="/Editcandidate" component={Editcandidate}/>
    </div>
    </Router>
  );
}

export default App;