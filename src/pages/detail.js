import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { Parallax } from 'react-parallax';


import Navbar from "../components/navbar/navbar";
import FooterFive from "../components/footer/footerFive";
import ScrollTop from "../components/scrollTop";

import TinySlider from "tiny-slider-react";
import '../../node_modules/tiny-slider/dist/tiny-slider.css';
import '../App.css';
import axios from "axios";

import {FiArrowRightCircle} from "../assets/icons/vander"
import { Loader } from '@googlemaps/js-api-loader';

const settings = {
    container: '.tiny-single-item',
    items: 1,
    controls: false,
    mouseDrag: true,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 3000,
    navPosition: "bottom",
    speed: 200,
    gutter: 16,
}

const API = process.env.REACT_APP_API_URL


export default function Detail({ match }){

    const { id } = useParams();
    const [getData, setData] = React.useState({});
    const [getDataReview, setDataReview] = React.useState({});
    const [_, setMap] = useState(null);
    const [marker, setMarker] = useState(null);

    const [getItems] = React.useState({
        method: 'GET',
        url: API+'/businesses-api/'+id,
        headers: {
            accept: 'application/json',
        }
    })

    const [getItemReviews] = React.useState({
        method: 'GET',
        url: API+'/businesses-api/review/'+id,
        headers: {
            accept: 'application/json',
        }
    })
    
    const getLists = async () => {
        const { data } = await axios.request(getItems)
        setData(data)
    }

    const getListReview = async () => {
        const { data } = await axios.request(getItemReviews)
        setDataReview(data)
    }

    useEffect(() => {
        getLists()
        getListReview()
    }, [])

    // Maps
    const apiOptions = {
        apiKey: 'AIzaSyC01hCsQ46I133UAz8pdjjRXlZ-o5DT1pY',
        version: 'weekly',
    };
    const loader = new Loader(apiOptions);
    useEffect(() => {
        // console.log('getData.coordinates.longitude', getData.coordinates.longitude)
        loader.load().then((google) => {
          const map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: getData.coordinates ? getData.coordinates.longitude : 0, lng: getData.coordinates ? getData.coordinates.longitude : 0 },
            zoom: 1,
          });
          setMap(map);

          const marker = new google.maps.Marker({
            position: { lat: 37.7859, lng: -122.4364 },
            map: map,
            title: getData.name ? getData.name : '-',
          });
          setMarker(marker);
        });
    }, [getData, getDataReview])

    
    

    return(
        <>
        <Navbar navClass="defaultscroll sticky" manuClass="navigation-menu nav-right nav-light" logoLight={true}/>

        <section className="position-relative overflow-hidden w-100 " >
            <Parallax
                blur={{ min: 0, max: 0}}
                bgImageAlt="the dog"
                strength={500}
                bgportfolioImageize="100%"
                bgStyle={{with:"auto", height:"100%" }}
                style={{position:"absolute", width:"100%" , height:"100%"}}
            />
            <div className="bg-overlay bg-gradient-overlay-2"></div>
            <div className="bg-half-170 w-100">
                <div className="container">
                    <div className="row mt-5 justify-content-center">
                        <div className="col-12">
                            <div className="title-heading text-center">
                                <h5 className="heading fw-semibold mb-0 sub-heading text-white title-dark mt-4">
                                    Detail Business
                                </h5>
                                
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="position-relative">
            <div className="shape overflow-hidden text-white">
                <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>
        <section className="section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="card border-0 shadow rounded overflow-hidden">
                            <div className="tiny-single-item">
                                <TinySlider settings={settings}>
                                    {getData.photos ?
                                        getData.photos.map((item, index) => (
                                            <div className="tiny-slide" key={index}>
                                                <img src={item} className="rounded-md full-width" alt=""/>
                                            </div>
                                        ))
                                        :''
                                    }
                                </TinySlider>
                            </div>
                            <div className="card-body">
                                <div className="pricing-features text-start">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <ul className="feature list-unstyled py-4 p-3 mb-0">
                                                <li className="feature-list text-muted">
                                                    <FiArrowRightCircle className="fea icon-sm text-dark me-2" />Name: {getData?.name}
                                                </li>
                                                <li className="feature-list text-muted mt-2">
                                                    <FiArrowRightCircle className="fea icon-sm text-dark me-2" />Claimed: {getData?.is_claimed === true ? 'Claimed' : 'Not Claimed'}
                                                </li>
                                                <li className="feature-list text-muted mt-2">
                                                    <FiArrowRightCircle className="fea icon-sm text-dark me-2" />Open / Closed: {getData?.is_closed === false ? 'Open' : 'Closed'} 
                                                </li>
                                                
                                            </ul>
                                        </div>
                                        <div className="col-md-6">
                                            <ul className="feature list-unstyled py-4 p-3 mb-0">
                                                <li className="feature-list text-muted mt-2">
                                                    <FiArrowRightCircle className="fea icon-sm text-dark me-2" />Phone: {getData?.display_phone}
                                                </li>
                                                <li className="feature-list text-muted mt-2">
                                                    <FiArrowRightCircle className="fea icon-sm text-dark me-2" />Review: {getData?.review_count}
                                                </li>
                                                <li className="feature-list text-muted mt-2">
                                                    <FiArrowRightCircle className="fea icon-sm text-dark me-2" />Rating: {getData?.rating}
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div id="map" style={{height: '600px' }} />
                                </div>
                                {getData.categories ?
                                    getData.categories.map((item, index) => (
                                        <Link to="#" className="badge badge-link bg-primary ms-1">{item.title}</Link>
                                    ))
                                    :''
                                }
                            </div>
                            <div className="card shadow rounded border-0 mt-4">
                                <div className="card-body">
                                    <h5 className="card-title mb-0">Reviews :</h5>

                                    <ul className="media-list list-unstyled mb-0">
                                        {getDataReview.reviews ?
                                            getDataReview.reviews.map((item,index)=>{
                                                return(
                                                    <li className="mt-4" key={index}>
                                                        <div className="d-flex justify-content-between" >
                                                            <div className="d-flex align-items-center">
                                                                <Link className="pe-3" to="#">
                                                                    <img src={item.user.image_url} className="img-fluid avatar avatar-md-sm rounded-circle shadow" alt="img"/>
                                                                </Link>
                                                                <div className="commentor-detail">
                                                                    <h6 className="mb-0"><Link to="#" className="text-dark media-heading">{item.user.name} - Rating {item.rating}</Link></h6>
                                                                    <small className="text-muted">{item.time_created}</small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="mt-3">
                                                            <p className="text-muted fst-italic p-3 bg-light rounded">{item.text}</p>
                                                        </div>
                                                    </li>
                                                )
                                            })
                                            : ''
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
        <FooterFive/>
        <ScrollTop/>
        </>
    )
}