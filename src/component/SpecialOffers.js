import React from 'react'
import '../style/choose.css'
import main from '../asset/main-panel-upgrade.png'
import frist from '../asset/first-time-customer.png'
import senior from '../asset/senior-citizen.png'
import sefty from '../asset/safety-inspection.png'

export default function SpecialOffers() {
    return (
        <div className="container">
            <div className="container">



                <div className="grid-containerc">
                    <div className="item1">
                        <h1>Save Money With Our Special Offers</h1>

                    </div>



                </div>
               
            </div>

            <div className="grid-containerc2">
                <div className="grid-itemc">
                    <div className="famimg">

                        <img src={main} className="famfig" alt="..." />

                        <div className="f">
                            <h2>  PLEASE CALL</h2>
                            <h4>  9428213314</h4>
                            <span>EXPIRES 31/12/2023</span>
                        </div>
                    </div>
                </div>

                <div className="grid-itemc">
                    <div className="famimg">

                        <img src={frist} className="famfig" alt="..." />

                        <div className="f">
                        <h2>  PLEASE CALL</h2>
                            <h4>  9428213314</h4>
                            <span>EXPIRES 31/12/2023</span>
                        </div>
                    </div>
                </div>
                <div className="grid-itemc">
                    <div className="famimg">

                        <img src={senior} className="famfig" alt="..." />

                        <div className="f">
                        <h2>  PLEASE CALL</h2>
                            <h4>  9428213314</h4>
                            <span>EXPIRES 31/12/2023</span>
                        </div>
                    </div>
                </div>
                <div className="grid-itemc">
                    <div className="famimg">

                        <img src={sefty} className="famfig" alt="..." />

                        <div className="f">
                        <h2>  PLEASE CALL</h2>
                            <h4>  9428213314</h4>
                            <span>EXPIRES 31/12/2023</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
