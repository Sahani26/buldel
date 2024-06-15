import React from 'react'
import '../style/home.css'
import callimg from '../asset/buldel-cta-phone-icon.png'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import user from '../asset/buldel-slider-img1.png'
import Choose from './Choose'
import SpecialOffers from './SpecialOffers';
import Footer from './Footer';
import Featured from './Featured';

export default function Home() {
  return (
    <>
      <div className="homepage">
        <div className="container">
          {/* ************** */}


          <div class="grid-container1">
            <div class="item1">
              <h1   className="w3-animate-left">Welcome To <br /><span className='span'>Best Electrical Contractor</span></h1>

              <p data-animation="animated bounceInLeft" className="userinfo"> Govt Approved <strong>A Class</strong> Electrical Contractor Doing all Electric Work for <span>Residential, Commercial, Industrial Projects.</span> </p>
              <div class="outer">
                <div class="button">
                  <div class="text">Contact Us</div>
                </div>
              </div>
            </div>

            <div class="item2">
              <div className="container user">
                <img src={user} alt="user photo" />
              </div>
            </div>

          </div>
          {/* ************* */}
        </div>

        <div className="grid-container">
          <div className="grid-item">
            <h2 className="text-family  grid-text" style={{ whiteSpace: 'pre-line' }}>
              Family Owned {'\n'}
              Operated For 13 Years
            </h2>
            <hr className="vertical-line" />
          </div>

          <div className="grid-item">
            <img src={callimg} alt="Phone Icon" />
            <h3 className="text-family  " >
              <span className='grid-text'>   Call Us Now</span>
              <br />
              & Consider It Fixed!
            </h3>
            <hr className="vertical-line" />

          </div>
          <div className="grid-item">
            <div className="">
              <button className="btn btn-primary btn-arrow">Call Us Now <ArrowForwardIcon /></button>

            </div>
          </div>
        </div>
      </div>

      {/* **********Choose*********** */}
      <Choose/>

      {/* *************Special Offers************ */}
      <Featured/>


      <SpecialOffers/>

      {/* ***********footer********** */}
      <Footer/>

      {/* ************* */}
    
    </>
  )
}
