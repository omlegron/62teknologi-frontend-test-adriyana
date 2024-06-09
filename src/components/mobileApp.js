import React from "react";
import { Link } from "react-router-dom";
import envelope from "../assets/images/svg/envelope.svg"
import app from "../assets/images/app/app.png"
import playstore from "../assets/images/app/playstore.png"
import {FiSmartphone, MdKeyboardArrowRight} from "../assets/icons/vander"

export default function Mobileapp(){
    return(
        <div className="container mt-100 mt-60" id="apps">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-5 col-12">
                        <img src={envelope} className="img-fluid mx-auto d-block" alt=""/>
                    </div>

                    <div className="col-lg-7 col-md-7 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div className="section-title">
                            <span className="badge bg-soft-primary rounded-pill mb-2">Mobile Apps</span>
                            <h4 className="title mb-4">Available for your <br/> Smartphones</h4>
                            <p className="text-muted para-desc mb-0">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
                            <div className="my-4">
                                <Link to="#">
                                    <img src={app} className="m-1" height="50" alt=""/>
                                </Link>

                                <Link to="#">
                                    <img src={playstore} className="m-1" height="50" alt=""/>
                                </Link>
                            </div>

                            <div className="d-inline-block">
                                <div className="pt-4 d-flex align-items-center border-top">
                                    <FiSmartphone className="fea icon-md me-2 text-primary"/>
                                    <div className="content">
                                        <h6 className="mb-0 fw-normal">Install app now on your cellphones</h6>
                                        <Link to="#" className="text-primary">Learn More <MdKeyboardArrowRight/></Link>  
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}