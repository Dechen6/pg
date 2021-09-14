import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import Header from './components/pages/Header';
import Footer from './components/pages/Footer';
import GoTop from './components/pages/GoTop';
import './components/pages/style.css'



function App() {
  return (
    <div>
    <Header/>
    <Home/>
  <GoTop/>
    <Footer/>
  
    </div>
    
  );
}

export default App;
