import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { InfoContainer, InfoWrapper, } from "./infoSection/InfoElements";
import { getNews } from "../services/firebase";
// import { ButtonBasic } from "../ButtonElements";

function Cards() {
    const [hover, setHover] = useState(false);
    const [info, setInfo] = useState(null)
    const onHover = () => {
        setHover(!hover);
    };
    useEffect(() => {
        console.log('jjsjsjsjsj')
        getNews(reciever)
    }, [])

    const reciever = (data) => {
        setInfo(data)

    }
    return (
        <>
            <InfoContainer id='45' className="bg-white">
                <InfoWrapper>
                    <div className="d-flex align-items-center row expand-row gx-10 ">
                        <div className={hover ? 'flex-row  col-lg-4 col-sm-12 text-success  primary-bg mx-2 mb-5 shadow' : 'flex-row  col-lg-4 col-sm-12 text-light  primary-bg mx-2 mb-5 shadow'} onMouseEnter={onHover} onMouseLeave={onHover}>
                            <h2 className="text-center mt-5 mb-5">{info && info[0].title}</h2>
                            <div className='text-center'>
                                <div className='mb-3 text-weight-bold'>{info && info[0].date}</div>
                            </div>
                            <h3 className="text-center text-dark mb-5 ">Highlight 1</h3>
                        </div>
                        <div className={hover ? 'flex-row  col-lg-3 col-sm-12 text-success bg-green mb-5 shadow' : 'flex-row  col-lg-3 col-sm-12 text-black bg-green mb-5 shadow'} onMouseEnter={onHover} onMouseLeave={onHover} >
                            <h2 className="text-center mt-5 mb-5">{info && info[1].title}</h2>
                            <div className='text-center'>
                                <div className='mb-3 text-weight-bold'>{info && info[1].date}</div>
                            </div>
                            <h3 className="text-center text-dark mb-5 ">Highlight 2</h3>
                        </div>
                        <div className={hover ? 'flex-row  col-lg-4 col-sm-12 text-success primary-bg mx-2 mb-5 shadow' : 'flex-row  col-lg-4 col-sm-12 text-light primary-bg mx-2 mb-5 shadow'} onMouseEnter={onHover} onMouseLeave={onHover} >
                            <h2 className="text-center mt-5 mb-5">{info && info[2].title}</h2>
                            <div className='text-center'>
                                <div className=' mb-3 text-weight-bold'>{info && info[2].date}</div>
                            </div>
                            <h3 className="text-center text-dark mb-5 ">Highlight 3</h3>
                        </div>


                        <div className={hover ? 'flex-row  col-lg-4 col-sm-12 text-success bg-green mx-2 mb-5 shadow' : 'flex-row  col-lg-4 col-sm-12 text-black bg-green mx-2 mb-5 shadow'} onMouseEnter={onHover} onMouseLeave={onHover} >
                            <h2 className="text-center  mt-5 mb-5">{info && info[3].title}</h2>
                            <div className='text-center'>
                                <div className=' mb-3 text-weight-bold'>{info && info[3].date}</div>
                            </div>
                            <h3 className="text-center text-dark mb-5 ">Highlight 4</h3>
                        </div>
                        <div className={hover ? 'flex-row  col-lg-3 col-sm-12 text-success primary-bg mb-5 shadow' : 'flex-row  col-lg-3 col-sm-12 text-light primary-bg mb-5 shadow'} onMouseEnter={onHover} onMouseLeave={onHover} >
                            <h2 className="text-center  mt-5 mb-5">{info && info[4].title}</h2>
                            <div className='text-center'>
                                <div className=' mb-3 text-weight-bold'>{info && info[4].date}</div>
                            </div>
                            <h3 className="text-center text-dark mb-5 ">Highlight 5</h3>
                        </div>
                        <div className={hover ? 'flex-row  col-lg-4 col-sm-12 bg-green mx-2 mb-5 shadow text-success' : 'flex-row  col-lg-4 col-sm-12 text-black bg-green mx-2 mb-5 shadow'} onMouseEnter={onHover} onMouseLeave={onHover} >
                            <h2 className="text-center mt-5 mb-5">{info && info[5].title}</h2>
                            <div className='text-center'>
                                <div className=' mb-3 text-weight-bold'>{info && info[5].date}</div>
                            </div>
                            <h3 className="text-center text-dark mb-5 ">Highlight 6</h3>
                        </div>
                    </div>

                </InfoWrapper>
            </InfoContainer>
        </>
    );
};

export default Cards;
