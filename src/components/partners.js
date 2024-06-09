import React from "react";

import amazon from "../assets/images/client/amazon.svg"
import google from "../assets/images/client/google.svg"
import lenovo from "../assets/images/client/lenovo.svg"
import paypal from "../assets/images/client/paypal.svg"
import shopify from "../assets/images/client/shopify.svg"
import spotify from "../assets/images/client/spotify.svg"

export default function Partners(){
    const dataImg = [amazon, google, lenovo, paypal, shopify, spotify]
    return(
        <div className="row justify-content-center">
            {dataImg.map((item, index)=>{
                return(
                    <div className="col-lg-2 col-md-2 col-6 text-center mt-4 pt-2" key={index}>
                        <img src={item} className="avatar avatar-ex-sm" alt=""/>
                    </div>
                )
            })}
        </div>
    )
}