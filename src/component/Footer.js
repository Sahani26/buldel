import React from 'react'
import logoImage from '../asset/banner-bg.png'
import map from '../asset/buldel-building-electrician-logo-surat.png'
import '../style/footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import XIcon from '@mui/icons-material/X';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';
export default function Footer() {
    return (
        <>
            <div className="GetinTouch  " id="oval">
                <div className="search">
                    <div className="Touch">
                        <div className="gettouch">
                            <h1>Want to know about our offers first?</h1>
                            <span>Join Our Mailing List!</span>
                        </div>
                        <div className="subscribe">
                            <form class="d-flex">
                                <input class="form-control me-1" type="search" placeholder="Enter Email Address" aria-label="Search" />
                                <button class="btn btn-outline-success " type="submit">Subscribe</button>
                            </form>

                        </div>
                    </div>
                </div>
                <div className="details"><div className="address">
                    <div className="add">
                        <img className='photologo' src={map} alt="ASG EYE HOSPITALS Logo" />
                        <div className="addtext mt-4">
                            <p>Buldel is proud to be the go-to <br />electrical service company for the<br /> Surat region since 2007! Our mission <br />is  to provide the best quality service <br />and expertise to our residential <br />and commercial customers...</p>
                        </div>
                    </div>
                    <div className="quicklink mt-3">
                        <div>
                            <a className="nav-link active" href="#">AREAS WE SERVICE:</a>

                        </div>
                        <div className="qlink ">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ullist search-nav">
                                <li className="nav-item search-nav">
                                    <a className="nav-link active" href="#">Vesu</a>
                                </li>
                                <li className="nav-item  ">
                                    <a className="nav-link active" href="#">Adajan</a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link active" href="#">Sargampura</a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link active" href="#">Athava</a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link active" href="#">And MORE!</a>
                                </li>

                            </ul>
                        </div>

                    </div>
                    <div className="quicklink">
                        <div>
                            <a className="nav-link active mt-3" href="#">IMPORTANT LINK</a>

                        </div>
                        <div className="qlink ">
                            <ul className="navbar-nav me-auto mb-1 mb-lg-0 ullist search-nav">
                                <li className="nav-item ">
                                    <a className="nav-link active" href="#">Services Rates</a>
                                </li>
                                <li className="nav-item  ">
                                    <a className="nav-link active" href="#"> Contact Us</a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link active" href="#"> Privacy Notice</a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link active" href="#">Cookies Policy</a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link active" href="#"> Terms & Conditions</a>
                                </li>

                            </ul>
                        </div>

                    </div>
                    <div className="contactus mt-3">
                        <div>
                            <a className="nav-link active" href="#">Contact INFO!   </a>

                        </div>
                        <div className="coninfo mt-4">
                            <div className="info1">
                                <a className="nav-link active" href="#">Phone No.</a>
                                <span>+919428213314</span>
                            </div>
                            <div className="info2 mt-3">
                                <a className="nav-link active" href="#">Email</a>
                                <span>test@gmail.com</span>
                            </div>

                        </div>
                    </div>
                    <div className="location mt-3">
                        <div>
                            <a className="nav-link active" href="#">Location</a>

                        </div>
                        <div className="map mt-4">
                            <img className='photologo' src={logoImage} alt="ASG EYE HOSPITALS Logo" />

                        </div>
                    </div>
                </div></div>
                <div className="hr mt-3">
                    <hr className='hrtag ' />
                </div>
                <div className="copyright">
                    <div className="copy">
                        <p>© 2023, Buldel | All Rights Reserved.</p>
                    </div>
                    <div className="copy2">
                        <p>Buldel Kalpesh Good Services Product #: 8006 4.9 stars, based on 8006 Reviews</p>
                    </div>
                    <div className="logo">
                        <FacebookIcon /><TwitterIcon /><XIcon /><WhatsAppIcon /><PinterestIcon /><YouTubeIcon />
                    </div>
                </div>

            </div>

        </>
    )
}
