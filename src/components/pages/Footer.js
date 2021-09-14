import React, { Component } from 'react';

import './style.css';
import './responsive.css'


class Footer extends React.Component{
    render(){
        return(
        <div>
             {/* ***** Footer Area Start ***** */}
        <footer className="footer-social-icon text-center section_padding_70 clearfix">
          {/* footer logo */}
          <div className="footer-text">
            <div className="row">
              <div className=" col-md-6"><br />
                <center><img src="assets/img/t/1.png" height="100px" /> <br />
                  <img src="assets/img/t/52.png" height="90px" /></center>
              </div>
              <div className=" col-md-6"><br />
                <h5>
                  岐阜県岐阜市薮田西　1-5-17<br /><br />
                  TEL :  058-215-6300 <br /><br />
                  FAX: 058-215-6301<br /><br />
                  MAIL : zeena2011@live.jp</h5><br />
              </div>
            </div>
          </div>
          {/* social icon*/}
          <div className="footer-social-icon">
            <a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a>
            <a href="#"><i className="active fa fa-twitter" aria-hidden="true" /></a>
            <a href="#"> <i className="fa fa-instagram" aria-hidden="true" /></a>
            <a href="#"><i className="fa fa-google-plus" aria-hidden="true" /></a>
          </div>
          <div className="footer-menu">
            <nav>
              <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Terms &amp; Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </nav>
          </div>
          {/* Foooter Text*/}
          <div className="copyright-text">
            <p>Copyright ©2021</p>
          </div>
        </footer>
        {/* ***** Footer Area end ***** */}
        
        </div>
        )    
}
}
export default Footer;