import React, { useEffect } from 'react';

import { Link } from "react-router-dom";
import Select from 'react-select'

import Navbar from "../components/navbar/navbar";
import FooterFive from "../components/footer/footerFive";
import PaginationControls from "../components/paginationControls";

import { Parallax } from "react-parallax";

import {BiBriefcaseAlt2,AiOutlineStar,AiOutlineClockCircle} from "../assets/icons/vander"
import ScrollTop from "../components/scrollTop";
// import {MdArrowForward,MdOutlineArrowBack} from "../assets/icons/vander"

// import { getList } from "../services/api";
import axios from "axios";
const API = process.env.REACT_APP_API_URL

export default function Job(){
    const country = [
        { value: 'hot_and_new', label: 'Hot And New' },
        { value: 'request_a_quote', label: 'Request A Quote' },
        { value: 'reservation', label: 'Reservation' },
        { value: 'waitlist_reservation', label: 'Waitlist Resrvation' },
        { value: 'deals', label: 'Deals' },
        { value: 'gender_neutral_restrooms', label: 'Gender Neutral Restrooms' },
        { value: 'open_to_all', label: 'Open To All' },
        { value: 'wheelchair_accessible', label: 'Wheelchair Access' }
    ]
    const [selectedOptions, setSelectedOptions] = React.useState([]);
    const [dataSearch, setSearch] = React.useState("");
    
    const [listData, setListData] = React.useState([]);
    const [currentPage, setCurrentPage] = React.useState(1); // store the current page number
    const [totalPages, setTotalPages] = React.useState(0); // store the total number of pages
    const itemsPerPage = 50; // store the number of items per page
    const [getItems, setItems] = React.useState({
        method: 'GET',
        url: API+'/businesses-api',
        params: {
            location: 'Ny', 
            sort_by: 'best_match', 
            limit: '50',
            offset: 1,
            attributes: []
        },
        headers: {
        accept: 'application/json',
        }
    })
    
    const getLists = async () => {
        console.log('API', API)
        const { data } = await axios.request(getItems)
        setTotalPages(Math.ceil(1000 / itemsPerPage));
        setListData(data)
        
    }

    useEffect(() => {
        getLists()
    }, [])

    useEffect(() => {
    }, [listData, totalPages])

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        getItems['params']['offset'] = pageNumber
        setItems(getItems)
        getLists()
    };
    
    const handleSearch = (e) => {
        const { value } = e.target;
        setSearch(value)
    }

    const handleSelectChange = (selectedOptions) => {
        setSelectedOptions(selectedOptions);
    };

    const handleClick = (e) => {
        var arrSelect = [];
        if(selectedOptions.length > 0){
            selectedOptions.forEach(function(v, k){
                arrSelect.push(v.value)
            })
        }
        getItems['params']['location'] = dataSearch
        getItems['params']['attributes'] = arrSelect
        setItems(getItems)
        getLists()
    }

    return(
        <>
        <Navbar/>
        <section className=" d-table w-100  position-relative ">
            <Parallax
                blur={{ min: 0, max: 0}}
                bgImageAlt=""
                strength={500}
                bgportfolioImageize="100%"
                bgStyle={{with:"auto", height:"100%" }}
                style={{position:"absolute", width:"100%" , height:"100%"}}
            >
            </Parallax>
            <div className="bg-overlay bg-gradient-overlay-2"></div>
            <div className="bg-half-170">
                <div className="container">
                    <div className="row mt-5 justify-content-center">
                        <div className="col-12">
                            <div className="title-heading text-center">
                                <h5 className="heading fw-semibold mb-0 sub-heading text-white title-dark">List Business</h5>
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
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="features-absolute">
                            <div className="row justify-content-center" id="reserve-form">
                                <div className="col-lg-12 mt-lg-5">
                                    <div className="card feature-top border-0 shadow rounded p-3">
                                        <form action="#">
                                            <div className="registration-form text-dark text-start">
                                                <div className="row g-lg-0">
                                                    <div className="col-lg-4 col-md-6">
                                                        <div className="filter-search-form position-relative filter-border bg-light">
                                                            <BiBriefcaseAlt2 className="icons"/>
                                                            <input name="name" onChange={handleSearch} value={dataSearch} type="text" id="job-keyword" className="form-control filter-input-box bg-light border-0" placeholder="Search By Location" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="filter-search-form position-relative filter-border bg-light">
                                                            <BiBriefcaseAlt2 className="icons"/>
                                                            <Select className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0 basic-multi-select" 
                                                                isMulti="true" value={selectedOptions} placeholder="Select Multiple Filter Data"
                                                                onChange={handleSelectChange} options={country} />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-2 col-md-6 mt-3 mt-lg-0">
                                                        <input type="button" onClick={handleClick} id="search" name="search" style={{height:"60px"}} className="btn btn-primary searchbtn submit-btn w-100" value="Search"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row g-4 mt-4 mt-lg-0">
                            {listData?.businesses ? 
                                listData?.businesses.map((item,index) =>{
                                    return(
                                        <div className="col-lg-4 col-md-6" key={index}>
                                            <div className="card features feature-primary rounded shadow">
                                                <div className="card-body content">
                                                    <Link to={`/detail/${item.id}`} className="h5 mb-1 d-block title text-dark">{item.name}</Link>
                                                    <p className="text-muted"><AiOutlineClockCircle className="me-1"/>{item.is_closed === false ? 'Open' : 'Closed'} </p>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <span className="badge rounded bg-soft">Phone: {item.display_phone}</span>
                                                        <div>
                                                            <AiOutlineStar className="link me-1"/>
                                                            <span className="text-muted mt-1">{item.rating}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center p-4 border-top">
                                                    <img src={item.image_url} className="avatar avatar-md-sm shadow-md rounded-md p-2 bg-white" alt=""/>

                                                    <div className="ms-3">
                                                        <h6 className="mb-0">{item.name}</h6>
                                                        <small className="text-muted">{item.location.address1} {item.location.address2} {item.location.city} {item.location.country}</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                                : ''
                            }
                            <PaginationControls
                                currentPage={currentPage}
                                totalPages={totalPages}
                                handlePageChange={handlePageChange}
                            />
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