import React from "react";

export default function Newsletters(){
    return(
        <div className="container mt-100 mt-60">
            <div className="bg-soft-primary rounded shadow px-4 py-5">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center">
                            <h4 className="mb-2 text-dark">Subscribe to our newsletters</h4>
                            <p className="text-muted mb-0">Sign up and receive the latest tips via email.</p>

                            <div className="subcribe-form mt-5">
                                <form>
                                    <div className="mb-0">
                                        <input type="email" id="email" name="email" className="border bg-white rounded-pill" required placeholder="Email Address"/>
                                        <button type="submit" className="btn btn-pills btn-primary">Get Started</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}