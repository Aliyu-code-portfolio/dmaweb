import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { InfoContainer, InfoWrapper, } from "./infoSection/InfoElements";
import employ from '../images/employ.jpg'
import educate from '../images/educate.jpg'
import health from '../images/health.jpg'
import leader from '../images/leader.jpg'

function Issues() {

    return (
        <>
            <InfoContainer id='45' className="bg-white">
                <InfoWrapper>
                    <div className="d-flex align-items-center row expand-row gx-10 ">
                        <div className="col-lg-3 col-sm-12 img-wrap">
                            <img src={employ} alt="employ" className="thumbnail img-fluid"></img>
                        </div>
                        <div className='flex-row  col-lg-3 col-sm-12 text-light bg-black mb-5 shadow' >
                            <h2 className="text-center mt-5 mb-5">Employment</h2>
                            <div className='text-center'>
                                <div className='mb-3 text-weight-bold text-dark'>Key Policy</div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-12 img-wrap">
                            <img src={educate} alt="education" className="thumbnail img-fluid"></img>
                        </div>
                        <div className='flex-row  col-lg-3 col-sm-12 text-light bg-black mb-5 shadow'>
                            <h2 className="text-center  mt-5 mb-5">Education</h2>
                            <div className='text-center'>
                                <div className=' mb-3 text-weight-bold text-dark'>For a Better Future</div>
                            </div>
                        </div>


                        <div className="col-lg-3 col-sm-12 img-wrap">
                            <img src={health} alt="health care" className="thumbnail img-fluid"></img>
                        </div>
                        <div className='flex-row  col-lg-3 col-sm-12 text-light bg-black mb-5 shadow' >
                            <h2 className="text-center mt-5 mb-5">Better health care</h2>
                            <div className='text-center'>
                                <div className='mb-3 text-weight-bold text-dark'>The Stakes are High</div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-12 img-wrap">
                            <img src={leader} alt="leadership" className="thumbnail img-fluid"></img>
                        </div>
                        <div className='flex-row  col-lg-3 col-sm-12 text-light bg-black mb-5 shadow'>
                            <h2 className="text-center  mt-5 mb-5">Good representation</h2>
                            <div className='text-center'>
                                <div className=' mb-3 text-weight-bold text-dark'>Essential</div>
                            </div>
                        </div>

                    </div>

                </InfoWrapper>
            </InfoContainer>
        </>
    );
};

export default Issues;
