import React from "react";
import { Link } from "react-router-dom";

import blog1 from "../assets/images/blog/1.jpg"
import blog2 from "../assets/images/blog/2.jpg"
import blog3 from "../assets/images/blog/3.jpg"

export default function DetailSidebar(){
    const recentPost = [
        {
            image:blog1,
            title:'Consultant Business',
            date:'13th March 2023'
        },
        {
            image:blog2,
            title:'Grow Your Business',
            date:'5th May 2023'
        },
        {
            image:blog3,
            title:'Look On The Glorious Balance',
            date:'19th June 2023'
        },
    ]
    return(
        <div className="col-lg-4 col-md-6 mt-4 pt-2">
            <div className="card bg-white p-4 rounded shadow sticky-bar">
                <div className="widget">
                    <h6 className="widget-title font-weight-bold pt-2 pb-2 bg-light rounded text-center">Rating</h6>
                    
                </div>

                <div className="widget mt-4 pt-2">
                    <h6 className="widget-title font-weight-bold pt-2 pb-2 bg-light rounded text-center">Recent Post</h6>
                    <div className="mt-4">
                        {recentPost.map((item,index) =>{
                            return(
                                <div className="d-flex align-items-center mt-3" key={index}>
                                    <img src={item.image} className="avatar avatar-small rounded" style={{width:'auto'}} alt=""/>
                                    <div className="flex-1 ms-3">
                                        <Link to="/blog-standard-post" className="d-block widget-post-title text-dark">{item.title}</Link>
                                        <span className="text-muted">{item.date}</span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

            </div>
        </div>
    )
}