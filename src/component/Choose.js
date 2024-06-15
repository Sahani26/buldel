import React from 'react'
import '../style/choose.css'
import fam from '../asset/buldel-family.png'
import star from '../asset/buldel-ratting.png'
import life from '../asset/buldel-lifetime-limited-labor-warranty.png'
import best from '../asset/buldel-best-in.png'

export default function Choose() {
    return (
        <div className="container">
            <div className="container">



                <div className="grid-containerc">
                    <div className="item1">
                        <h1>Surat Electricians - Why Choose Buldel?</h1>

                    </div>



                </div>
               
            </div>

            <div className="grid-containerc2">
                <div className="grid-itemc">
                    <div className="famimg">

                        <img src={fam} className="famfig" alt="..." />

                        <div className="f">
                            <h2>  FAMILY OWNED</h2>
                            <h4>  OPERATED</h4>
                        </div>
                    </div>
                </div>

                <div className="grid-itemc">
                    <div className="famimg">

                        <img src={star} className="famfig" alt="..." />

                        <div className="f">
                            <h2>  TOP RATED</h2>
                            <h4>  SERVICES</h4>
                        </div>
                    </div>
                </div>
                <div className="grid-itemc">
                    <div className="famimg">

                        <img src={life} className="famfig" alt="..." />

                        <div className="f">
                            <h2> LIMITED LIFETIME</h2>
                            <h4>  WARRANTY</h4>
                        </div>
                    </div>
                </div>
                <div className="grid-itemc">
                    <div className="famimg">

                        <img src={best} className="famfig" alt="..." />

                        <div className="f">
                            <h2> UPFRONT</h2>
                            <h4>  COMPETITIVE PRICING</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
