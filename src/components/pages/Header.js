import React, { Component } from 'react';
import './style.css';
import './responsive.css'


class Header extends React.Component{
    render(){
        return(
        <div className="nav">
             {/* ***** Header Area Start ***** */}
        <header style={{backgroundColor: '#373A40', zIndex: '600px'}} className="header_area animated">
          <div className="container-fluid">
            <div className="row align-items-center">
              {/* Menu Area Start */}
              <div className="col-12 col-lg-10">
                <div className="menu_area">
                  <nav className="navbar navbar-expand-lg navbar-light">
                    {/* Logo */}
                    <a className="navbar-brand"> <img src="assets/img/1.png" alt="" /><img style={{width: '50%', marginLeft: '2rem'}} src="assets/img/word.png" alt="" /> </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ca-navbar" aria-controls="ca-navbar" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
                    {/* Menu Area */}
                    <div style={{backgroundColor: '#373A40', position: 'relative', left: '-20px'}} className="collapse navbar-collapse" id="ca-navbar">
                      <ul className="navbar-nav ml-auto" id="nav">
                        <li className="nav-item active"><a className="nav-link" href="#home">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                        <li className="nav-item"><a className="nav-link" href="#features">Features</a></li>
                        <li className="nav-item"><a className="nav-link" href="#testimonials">Testimonials</a></li>
                        <li className="nav-item"><a className="nav-link" href="#team">Team</a></li>
                        <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* ***** Header Area End ***** */}
        </div>
        )    
}
}
export default Header;