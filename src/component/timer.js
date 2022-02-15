import React, { useState, useEffect } from 'react';
import './timer.css';
import { BsClock } from "react-icons/bs";
import moment from 'moment';
import Media from 'react-media';


export const Timer = () => {
    const [text, setText] = useState(null)
    //given below must be a day before your set event date
    var given = moment('22/02/2023', "DD/MM/YYYY");
    var current = moment().startOf('day');
    var time = new Date()
    const [hours, setHours] = useState(23 - (time.getHours()))
    const [minutes, setMinutes] = useState(59 - (time.getMinutes()))
    var seconds = 59 - (time.getSeconds())
    const [second, setSecond] = useState(seconds)


    useEffect(() => {
        const timer = setTimeout(() => {
            //setTimeLeft(calculateTimeLeft());
            if (days === -1) {
                setText('Please make sure you vote for APC and Dr. Musa Adamu today ')

            }
            else if (days < -1) {
                setText('Thank you for all your votes')
            }
            setSecond(second - 1)
            if (second === 0) {
                setSecond(59)
                setMinutes(minutes - 1)
                if (minutes === 1) {
                    setMinutes(60)
                    setHours(hours - 1)
                    if (hours === 1) {
                        if (days >= 1) {
                            setHours(24)
                            setDays(days - 1)
                        }
                    }
                }
            }
        }, 1000);

        return () => clearTimeout(timer);
    });


    const [days, setDays] = useState(moment.duration(given.diff(current)).asDays());

    //console.log(seconds)

    return (
        <Media queries={{ small: { maxWidth: 599 } }}>
            {matches =>
                matches.small ? (
                    <div className='timerMobile'>
                        {text ? <div className='name'>{text}</div> :
                            // <code>&emsp;</code>
                            <><div className='name'>Election countdown</div>
                                <div className='time'> {days} days {hours} hours {minutes} minutes and {second} seconds.</div></>}
                    </div>
                ) : (
                    <div className='timer'>
                        {text ? <div className='name'>{text}</div> :
                            <><div className='name'>Election Countdown:<code>&emsp;&emsp;</code></div>
                                <div className='container'><BsClock /></div><code>&emsp;</code>
                                <div className='time'> {days} days, {hours} hours, {minutes} minutes and {second} seconds.</div></>}
                    </div>
                )
            }
        </Media>

    )
}
