import React, {Component} from 'react';
import './style.css';
import './responsive.css'



class Home extends React.Component{
    render(){
        return(
            <div>
         
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
                    <div style={{backgroundColor: '#373A40', position: 'relative', left: '-50px'}} className="collapse navbar-collapse" id="ca-navbar">
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
        {/* ***** Wellcome Area Start ***** */}
        <section className="wellcome_area clearfix" id="home">
          <div className="container h-100">
            <div className="row h-100 align-items-center">
              <div className="col-12 col-md">
                <div className="wellcome-heading">
                  <h2>Tsuchiya Shoten</h2>
                  <h3>T</h3>
                  <p>生地の買取、販売30年の歴史と実績 絶対の自信有り</p>
                </div>
              </div>
            </div>
          </div>
          {/* Welcome thumb */}
          <div className="welcome-thumb" data-wow-delay="0.5s">
            <img style={{marginTop: '-40rem'}} src="assets/img/8.png" alt="" />
          </div>
        </section>
        {/* ***** Wellcome Area End ***** */}
        {/* ***** Special Area Start ***** */}
        <section className="special-area bg-white section_padding_100" id="about">
          <div className="container">
            <div className="row">
              <div className="col-12">
                {/* Section Heading Area */}
                <div className="section-heading text-center">
                  <h3>なぜ特別なのか</h3>
                  <div className="line-shape" />
                </div>
              </div>
            </div>
            <div className="row">
              {/* Single Special Area */}
              <div className="col-12 col-md-4">
                <div className="single-special text-center wow fadeInUp" data-wow-delay="0.2s">
                  <div className="single-icon">
                    <i className="fa fa-heart" aria-hidden="true" />
                  </div>
                  <h4><b>サステイナブル・ファブリック</b></h4>
                  <p><b>布・生地の在庫処分のお悩みを解決します。</b> </p>
                </div>
              </div>
              {/* Single Special Area */}
              <div className="col-12 col-md-4">
                <div className="single-special text-center wow fadeInUp" data-wow-delay="0.4s">
                  <div className="single-icon">
                    <i className="fa fa-gg-circle" aria-hidden="true" />
                  </div>
                  <h4><b>パワフルなデザイン</b></h4>
                  <p><b>土屋商店では、全国どこでも高価買取を行っています。</b></p>
                </div>
              </div>
              {/* Single Special Area */}
              <div className="col-12 col-md-4">
                <div className="single-special text-center wow fadeInUp" data-wow-delay="0.6s">
                  <div className="single-icon">
                    <i className="fa fa-thumbs-up" aria-hidden="true" />
                  </div>
                  <h5><b>をご覧ください</b></h5>
                  <p><b>在庫処分にお困り、お悩みの方はご相談承ります。</b></p>
                </div>
              </div>
            </div>
          </div>
          {/* Special Description Area */}
          <div className="special_description_area mt-150">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="special_description_img">
                    <img src="assets/img/11.png" alt="" />
                  </div>
                </div>
                <div className="col-lg-6 col-xl-5 ml-xl-auto">
                  <div className="special_description_content">
                    <h3>布・生地の買取専門だからこそできること</h3>
                    <h5>全国どこでもお問い合わせください。 <br />   
                      出張買取・宅配買取にて対応しています。<br /> 
                      生地を専門に取り扱っているからこそ出来る高価頁取。<br /> 
                      最小単位は衣類で利用可能な大きさから買取可能です。</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ***** Special Area End ***** */}
        {/* ***** Awesome Features Start ***** */}
        <section className="awesome-feature-area bg-white section_padding_0_50 clearfix" id="features">
          <div className="container">
            <div className="row">
              <div className="col-12">
                {/* Heading Text */}
                <div className="section-heading text-center">
                  <h3>優れた機能</h3>
                  <div className="line-shape" />
                </div>
              </div>
            </div>
            <div className="row">
              {/* Single Feature Start */}
              <div className="col-12 col-sm-6 col-lg-4">
                <div className="single-feature">
                  <i className="ti-user" aria-hidden="true" />
                  <h5>Awesome Experience</h5>
                  <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
              </div>
              {/* Single Feature Start */}
              <div className="col-12 col-sm-6 col-lg-4">
                <div className="single-feature">
                  <i className="ti-pulse" aria-hidden="true" />
                  <h5>Fast and Simple</h5>
                  <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
              </div>
              {/* Single Feature Start */}
              <div className="col-12 col-sm-6 col-lg-4">
                <div className="single-feature">
                  <i className="ti-dashboard" aria-hidden="true" />
                  <h5>Clean Code</h5>
                  <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
              </div>
              {/* Single Feature Start */}
              <div className="col-12 col-sm-6 col-lg-4">
                <div className="single-feature">
                  <i className="ti-palette" aria-hidden="true" />
                  <h5>Perfect Design</h5>
                  <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
              </div>
              {/* Single Feature Start */}
              <div className="col-12 col-sm-6 col-lg-4">
                <div className="single-feature">
                  <i className="ti-crown" aria-hidden="true" />
                  <h5>Best Industry Leader</h5>
                  <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
              </div>
              {/* Single Feature Start */}
              <div className="col-12 col-sm-6 col-lg-4">
                <div className="single-feature">
                  <i className="ti-headphone" aria-hidden="true" />
                  <h5>24/7 Online Support</h5>
                  <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ***** Awesome Features End ***** */}
        <section className="clients-feedback-area bg-white section_padding_100 clearfix" id>
          <div className="container">
            <center>
              <h4>大量在庫処分品、過剰在庫品、決算処分品、縫製工場の残反品などの買取を承っております。 <br /> 処分や在庫にお困りの商品がございましたら、是非お気軽にご相談ください。</h4>
            </center><br /><br />
            <div style={{borderColor: '#dddddd', borderStyle: 'solid', marginBottom: '0.9rem'}}>
              <div className="row">
                <div className="col-3 col-md-3">
                </div>
                <div className="col-2 col-md-2">
                  <br />
                  <center><img src="assets/img/t/10.jpg" height="50px" /></center><br />
                </div>
                <div className="col-7 col-md-7">
                  <br />
                  <h4><b>縛肌できるもの </b></h4><br />
                </div>
              </div>
            </div>
            <br />
            <center><h4>デニム生地、レース生地、ブリント生地、麻生地  <br /><br />
                ウール生地、合維生地、綿生地、その他生地 </h4></center>
            <br />
            <div className="row">
              <div className="col-6 col-md-6">
                <img src="assets/img/t/50.PNG" width="100%" height="100%" /> <br /><br />
              </div>
              <div className="col-6  col-md-6">
                <img src="assets/img/t/51.png" width="100%" height="100%" />
              </div>
            </div><br />
            <br />
            <div style={{borderColor: '#dddddd', borderStyle: 'solid', padding: '5px', marginBottom: '0.9rem'}}>
              <div className="row">
                <div className="col-3 col-md-3">
                </div>
                <div className="col-2 col-md-2">
                  <br />
                  <center><img src="assets/img/t/11.jpg" height="40px" /></center>
                </div>
                <div className="col-7 col-md-7">
                  <br />
                  <h4><b>卿買取できないもの</b></h4><br />
                </div>
              </div>
            </div>
            <br />
            <center><h3>汚れた生地、経年劣化した生地、1m以下のノAギレ、BC反物</h3></center>
            <br /><br />
            <center><h3><b>高価買取のポイントはどんなもの？</b></h3></center>
            <hr /><h4><br />
              ・汚れやキスかなく、しわなどがないもの <br />
              ・人気のテキスタイルフランド <br />
              ・流行りの柄 <br />
              ・未使用品</h4><br />
            <img src="assets/img/t/21.jpg" width="100%" />
            <br /><br />
            <center>
              <h3>出張買取、宅配買取にて全国対応中 </h3> <hr />
            </center>
          </div>
        </section>
        {/* ***** Client Feedback Area Start ***** */}
       
            <div className="container mt-5">
          <div id="testimonial_095" className="carousel slide testimonial_095_indicators testimonial_095_control_button thumb_scroll_x swipe_x ps_easeOutSine" data-ride="carousel" data-pause="hover" data-interval={5000} data-duration={2000}>
          <div className="row">
              <div className="col-12 text-center">
                {/* Heading Text  */}
                <div className="section-heading">
                  <h3>What people say</h3>
                  <div className="line-shape" />
                </div>
              </div>
            </div>
            {/* Indicators */}
            <ol className="carousel-indicators">
              <li data-target="#testimonial_095" data-slide-to={0} className="active" />
              <li data-target="#testimonial_095" data-slide-to={1} />
              <li data-target="#testimonial_095" data-slide-to={2} />
            </ol> {/* Wrapper For Slides */}
            <div className="carousel-inner" role="listbox">
              {/* First Slide */}
              <div className="carousel-item active">
                {/* Text Layer */}
                <div className="testimonial_095_slide"> <a href="#"><span className="fa fa-quote-left" /></a>
                  <p>Lorem ipsum dolor sit amet adipiscing elit am nibh unc varius facilisis eros ed erat in in velit quis arcu ornare laoreet urabitur.</p>
                  <div class="star-icon text-center">
                                <i class="ion-ios-star"></i>
                                <i class="ion-ios-star"></i>
                                <i class="ion-ios-star"></i>
                                <i class="ion-ios-star"></i>
                                <i class="ion-ios-star"></i>
                    </div>
                  <h5><a href="#">name of consumer</a></h5>
                </div> {/* /Text Layer */}
              </div> {/* /item */}
              {/* End of First Slide */}
              {/* Second Slide */}
              <div className="carousel-item">
                {/* Text Layer */}
                <div className="testimonial_095_slide"> <a href="#"><span className="fa fa-quote-left" /></a>
                  <p>Lorem ipsum dolor sit amet  adipiscing elit am nibh unc varius facilisis eros ed erat in in velit quis arcu ornare laoreet urabitur.</p>
                  <div class="star-icon text-center">
                                <i class="ion-ios-star"></i>
                                <i class="ion-ios-star"></i>
                                <i class="ion-ios-star"></i>
                                <i class="ion-ios-star"></i>
                                <i class="ion-ios-star"></i>
                    </div>
                  <h5><a href="#">name of consumer</a></h5>
                </div> {/* /Text Layer */}
              </div> {/* /item */}
              {/* End of Second Slide */}
              {/* Third Slide */}
              <div className="carousel-item">
                {/* Text Layer */}
                <div className="testimonial_095_slide"> <a href="#"><span className="fa fa-quote-left" /></a>
                  <p>Lorem ipsum dolor sit amet  adipiscing elit am nibh unc varius facilisis eros ed erat in in velit quis arcu ornare laoreet urabitur.</p>
                  <div class="star-icon text-center">
                                <i class="ion-ios-star"></i>
                                <i class="ion-ios-star"></i>
                                <i class="ion-ios-star"></i>
                                <i class="ion-ios-star"></i>
                                <i class="ion-ios-star"></i>
                    </div>
                  <h5><a href="#">name of consumer</a></h5>
                </div> {/* /Text Layer */}
              </div> {/* /item */}
              {/* End of Third Slide */}
            </div> {/* End of Wrapper For Slides */}
            {/* Left Control */} <a className="carousel-control-prev" href="#testimonial_095" data-slide="prev"> <span className="fa fa-chevron-left" /> </a> {/* Right Control */} <a className="carousel-control-next" href="#testimonial_095" data-slide="next"> <span className="fa fa-chevron-right" /> </a>
          </div> {/* End Paradise Slider */}
        </div>

        {/* ***** Client Feedback Area End ***** */}
        {/* ***** Our Team Area Start ***** */}
        <section className="our-Team-area bg-white section_padding_100_50 clearfix" id="team">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                {/* Heading Text  */}
                <div className="section-heading">
                  <h3>Our Team</h3>
                  <div className="line-shape" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6 col-lg-3">
                <div className="single-team-member">
                  <div className="member-image">
                    <img src="assets/img/team-img/team-1.jpg" alt="" />
                    <div className="team-hover-effects">
                      <div className="team-social-icon">
                        <a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a>
                        <a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a>
                        <a href="#"><i className="fa fa-google-plus" aria-hidden="true" /></a>
                        <a href="#"> <i className="fa fa-instagram" aria-hidden="true" /></a>
                      </div>
                    </div>
                  </div>
                  <div className="member-text">
                    <h4>Jackson Nash</h4>
                    <p>Tax Advice</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <div className="single-team-member">
                  <div className="member-image">
                    <img src="assets/img/team-img/team-2.jpg" alt="" />
                    <div className="team-hover-effects">
                      <div className="team-social-icon">
                        <a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a>
                        <a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a>
                        <a href="#"><i className="fa fa-google-plus" aria-hidden="true" /></a>
                        <a href="#"> <i className="fa fa-instagram" aria-hidden="true" /></a>
                      </div>
                    </div>
                  </div>
                  <div className="member-text">
                    <h4>Alex Manning</h4>
                    <p>CEO-Founder</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <div className="single-team-member">
                  <div className="member-image">
                    <img src="assets/img/team-img/team-3.jpg" alt="" />
                    <div className="team-hover-effects">
                      <div className="team-social-icon">
                        <a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a>
                        <a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a>
                        <a href="#"><i className="fa fa-google-plus" aria-hidden="true" /></a>
                        <a href="#"> <i className="fa fa-instagram" aria-hidden="true" /></a>
                      </div>
                    </div>
                  </div>
                  <div className="member-text">
                    <h4>Ollie Schneider</h4>
                    <p>Business Planner</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <div className="single-team-member">
                  <div className="member-image">
                    <img src="assets/img/team-img/team-4.jpg" alt="" />
                    <div className="team-hover-effects">
                      <div className="team-social-icon">
                        <a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a>
                        <a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a>
                        <a href="#"><i className="fa fa-google-plus" aria-hidden="true" /></a>
                        <a href="#"> <i className="fa fa-instagram" aria-hidden="true" /></a>
                      </div>
                    </div>
                  </div>
                  <div className="member-text">
                    <h4>Roger West</h4>
                    <p>Financer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ***** Our Team Area End ***** */}
        {/* ***** Contact Us Area Start ***** */}
        <section className="footer-contact-area section_padding_100 clearfix" id="contact">
          <div>
            <div style={{paddingLeft: '10px', paddingRight: '10px'}}>
              <div className="container">
                <br /><br />
                <center><h2 style={{fontSize: '35px', marginTop: '-1rem', color: '#507f30'}}><i className="fa fa-phone" aria-hidden="true" /> 058-215-6300</h2></center>
                <br />
                <center><h4>営業日：月～金（土日祝日はお休み）    営業時間：9:00-17:00</h4></center>
                <br />
                <div className="row">
                  <div className="col-6 col-md-6" style={{borderRadius: '14px', backgroundColor: '#fad586', marginTop: '0.9rem'}}>
                    <br />
                    <div className="row">
                      <div className="col-4 col-md-4">
                        <center><img src="assets/img/t/5.png" height="40px" /></center>
                      </div>
                      <div className="col-8 col-md-8">
                        <h5>LINEでクイック査定</h5><br />
                      </div>
                    </div>
                    <center><img src="assets/img/t/6.jpg" height="200px" style={{paddingRight: '30px', paddingLeft: '30px'}} /></center><br />
                  </div>
                  <div className="col-6 col-md-6"><br />
                    <h4>1.QRを読み込んで友だち登録 <br /><br />
                      2.LINEで土屋商店に画像送信 <br /><br />
                      3.査定結果（買取可否）のお知らせ 
                    </h4>
                  </div>
                </div><br />
                <div className="row">
                  <div className="col-6 col-md-6" style={{borderRadius: '14px', backgroundColor: '#d6efc7', marginBottom: '0.9rem'}}>
                    <div className="row">
                      <div className="col-4 col-md-4">
                        <br />
                        <center><img src="assets/img/t/31.png" height="40px" /></center>
                      </div>
                      <div className="col-8 col-md-8"><br />
                        <h5>メールでクイック査定</h5>  
                      </div>
                    </div>
                    <br />
                    <center>
                      <div style={{backgroundColor: '#f88f01', padding: '40px', width: '200px', borderRadius: '15px', color: 'white'}}>
                        <center>
                          <br />
                          お問い合わせ <br />
                          フォームへ
                          <br /><br />
                        </center>
                      </div>
                    </center>
                    <br />
                  </div>
                  <div className="col-6 col-md-6">
                    <br />
                    <h4>1. 下記のお問い合わせフォームより必要情報入力  <br /><br />
                      2. フォームに画像を添付  <br /><br />
                      3.査定結果（買取可否）のお知らせ
                    </h4>
                  </div>
                </div>
                <br />
              </div>
            </div>
          </div>
          <center>
            <div className="section-heading">
              <br /><br />
              <h3>私たちの場所</h3>
              <div className="line-shape" />
            </div>
          </center>
          <div className="container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3252.339532487329!2d136.71089091520795!3d35.39683368026162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6003ae8be66f33c5%3A0xa03fcdc35f004fca!2s1-ch%C5%8Dme-5-17%20Yabutanishi%2C%20Gifu%2C%20500-8386%2C%20Japan!5e0!3m2!1sen!2sbt!4v1614914985180!5m2!1sen!2sbt" width="100%" height={350} style={{border: 0, marginTop: '0.9rem'}} allowFullScreen loading="lazy" />
          </div>
        </section>
        {/* ***** Contact Us Area End ***** */}
        <section className="footer-contact-area section_padding_100 clearfix" id="contact">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                {/* Heading Text  */}
                <div className="section-heading">
                  <h3 style={{fontSize: '30px'}}>問い合わせフォーム</h3>
                  <div className="line-shape" />
                </div>
                <h5>土屋商店 <br /><br />
                  〒500-8386 岐阜県岐阜市薮田西　1-5-17<br /><br />
                  zeena2011@live.jp</h5><br />
              </div>
              <div className="col-md-6">
                {/* Form Start*/}
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdX8I7cLqeH-kfT1pXjURzaaYHaaWiLLz59Rin8oETjTYkX0Q/viewform?embedded=true" width={640} height={400} frameBorder={0} marginHeight={0} marginWidth={0}>Loading…</iframe>
              </div>
            </div>
          </div>
        </section>

            </div>
        )
    }
}
export default Home;