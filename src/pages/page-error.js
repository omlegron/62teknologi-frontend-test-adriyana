import React from "react";
import { Link } from "react-router-dom";
import erroe from "../assets/images/error.png"
export default function Error(){
    return(
        <section className="position-relative bg-soft-primary">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 p-0">
                        <div className="d-flex flex-column min-vh-100 justify-content-center px-md-5 py-5 px-4">
                            
                            <div className="title-heading text-center my-auto">
                                <img src={erroe} className="img-fluid" alt=""/>
                                <h1 className="mb-3 mt-5 text-dark">Page Not Found?</h1>
                                <p className="text-muted">Whoops, this is embarassing. <br/> Looks like the page you were looking for wasn't found.</p>
                                
                                <div className="mt-4">
                                    <Link to="/" className="btn btn-primary">Back to Home</Link>
                                </div>
                            </div>
                            <div className="text-center">
                                <p className="mb-0 text-muted"> <i className="mdi mdi-heart text-danger"></i> </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}