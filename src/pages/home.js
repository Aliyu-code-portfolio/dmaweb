import React, { useState, useEffect, } from 'react'
import '../App.css';
import { Vote } from '../component/vote';
import { getNextEvent } from '../services/firebase'
import { Spinner } from "react-activity";
import "react-activity/dist/library.css";
import Media from 'react-media';



export const Home = () => {
    const [info, setInfo] = useState(null)

    useEffect(() => {
        getNextEvent(data)
    }, [])

    const data = (pushed) => {
        setInfo(pushed)
    }

    return (

        <Media queries={{ small: { maxWidth: 599 } }}>
            {matches =>
                matches.small ? (
                    <div className='bodyMobile'>
                        <div className='cardMobile'>
                            <h2 className='title'>Upcoming Events</h2>
                            <hr />
                            <div className={info ? 'details' : 'activity'}>
                                {info ?
                                    <><div className='block'>
                                        <div className='lebel'>Event: <code>&emsp;&emsp;</code></div>
                                        <div className='event'>{info.name}</div>
                                    </div>
                                        <div className='block'>
                                            <div className='lebel'>L.G.A: <code>&emsp;&emsp;</code></div>
                                            <div className='event'>{info.lga}</div>
                                        </div>
                                        <div className='block'>
                                            <div className='lebel'>Venue: <code>&emsp;&emsp;</code></div>
                                            <div className='event'>{info.venue}</div>
                                        </div>
                                        <div className='block'>
                                            <div className='lebel'>Date: <code>&emsp;&emsp;</code></div>
                                            <div className='event'>{info.date}</div>
                                        </div>
                                        <div className='block'>
                                            <div className='lebel'>Time: <code>&emsp;&emsp;</code></div>
                                            <div className='event'>{info.time}</div>
                                        </div>
                                    </> : <div><Spinner size={25} /></div>}
                            </div>
                        </div>
                        <Vote />
                    </div>

                ) : (
                    <div className='body'>
                        <div className='card'>
                            <h2 className='title'>Upcoming Events</h2>
                            <hr />
                            <div className={info ? 'details' : 'activity'}>
                                {info ?
                                    <><div className='block'>
                                        <div className='lebel'>Event: <code>&emsp;&emsp;</code></div>
                                        <div className='event'>{info.name}</div>
                                    </div>
                                        <div className='block'>
                                            <div className='lebel'>L.G.A: <code>&emsp;&emsp;</code></div>
                                            <div className='event'>{info.lga}</div>
                                        </div>
                                        <div className='block'>
                                            <div className='lebel'>Venue: <code>&emsp;&emsp;</code></div>
                                            <div className='event'>{info.venue}</div>
                                        </div>
                                        <div className='block'>
                                            <div className='lebel'>Date: <code>&emsp;&emsp;</code></div>
                                            <div className='event'>{info.date}</div>
                                        </div>
                                        <div className='block'>
                                            <div className='lebel'>Time: <code>&emsp;&emsp;</code></div>
                                            <div className='event'>{info.time}</div>
                                        </div>
                                    </> : <div><Spinner size={25} /></div>}
                            </div>
                        </div>
                        <Vote />
                    </div>
                )
            }
        </Media>

    )
}
