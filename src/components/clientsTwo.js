import React from "react";

import { clientsData } from "../data/data";

import TinySlider from "tiny-slider-react";
import '../../node_modules/tiny-slider/dist/tiny-slider.css';

const settings = {
    container: '.tiny-three-item',
    controls: false,
    mouseDrag: true,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 3000,
    navPosition: "bottom",
    speed: 400,
    gutter: 12,
    responsive: {
        992: {
            items: 3
        },

        767: {
            items: 2
        },

        320: {
            items: 1
        },
    },
};

export default function ClientsTwo({position}){
    return(
        <div className="row">
        <div className="col-12">
            <div className={position === false ? "" : "features-absolute"}>
                <div className="row align-items-center g-0">
                    <div className="col-12">
                        <div className="tiny-three-item">
                            <TinySlider settings={settings}>
                                {clientsData.map((item,index)=>{
                                    return(
                                        <div className="tiny-slide" key={index}>
                                            <div className="customer-testi m-1">
                                                <div className="content p-3 shadow rounded bg-white position-relative text-center">
                                                    <p className="text-muted fst-italic">{item.desc}</p>
                                                
                                                    <ul className="list-unstyled mb-0 text-warning mt-2">
                                                        <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                                        <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                                        <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                                        <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                                        <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                                    </ul>
                                                </div>
                                                <div className="text-center mt-3">
                                                    <img src={item.image} className="avatar avatar-small rounded-pill shadow" alt=""/>
                                                    <h6 className="mb-1 mt-2 fw-normal text-dark">{item.name}</h6>
                                                    <small className="text-muted d-block">{item.title}</small>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </TinySlider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}