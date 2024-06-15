import React from 'react';
import logo from '../asset/buldel-building-electrician-logo-surat.png';
import '../style/nav.css'
import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-sm   bg-custom">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="#">
                        <img src={logo} alt="Buldel Logo" style={{ height: '35px', marginLeft: '110px' }} />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav" style={{ marginRight: '110px',  color:'blue' }} >
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link nav-link-custom" aria-current="page" to="/">HOME</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link nav-link-custom" to="/about">ABOUTUS</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link nav-link-custom" to="/faq">FAQ</Link>
                            </li>
                            <li className="nav-item dropdown nav-link-custom">
                                <Link className="nav-link dropdown-toggle nav-link-custom" to="/service" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                                    SERVICE
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" href="#">
                                    Troubleshooting Repair</Link></li>
                                    <li><Link className="dropdown-item" href="#">Emergency Electrical</Link></li>
                                    <li><Link className="dropdown-item" href="#">Electrical Panel</Link></li>
                                    <li><Link className="dropdown-item" href="#">Ceiling Fans & Heaters</Link></li>
                                    <li><Link className="dropdown-item" href="#">
                                    Indoor Lighting</Link></li>
                                    <li><Link className="dropdown-item" href="#">Outdoor Lighting</Link></li>
                                    <li><Link className="dropdown-item" href="#">
                                    Safety Systems</Link></li>
                                    <li><Link className="dropdown-item" href="#">Dedicated Circuits</Link></li>
                                    <li><Link className="dropdown-item" href="#">Dimmers and Breakers</Link></li>
                                    <li><Link className="dropdown-item" href="#">Commercial Services</Link></li>
                                    <li><Link className="dropdown-item" href="#">
                                    Data and Telephony</Link></li>

                                    <li><Link className="dropdown-item" href="#">Attic Exhaust Fans</Link></li>
                                    <li><Link className="dropdown-item" href="#">Whole House Rewiring</Link></li>
                                    <li><Link className="dropdown-item" href="#">EV Charger</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link nav-link-custom" aria-disabled="true" to="/blog">BLOG</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link nav-link-custom" aria-disabled="true" to="contact">CONTACT</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
