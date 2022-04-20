import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { MdMarkAsUnread, MdQuestionAnswer } from "react-icons/md"
import { InfoContainer, InfoWrapper, } from "./infoSection/InfoElements";
import { ButtonBasicInv } from './button'

export const Info = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };

    return (
        <>
            <InfoContainer id='56' className="bg-white">
                <InfoWrapper>
                    <div className="row flex-column m-1">
                        <h2 className="text-dark text-center font-weight-bold ">Meet DR. Musa</h2>
                        <div className="text-center pb-3 text-muted font-size-1">Doctor of Philosophy, Sarkin Matasan Obi, Durbin Asakyo.</div>
                        <p className="text-center">
                            Dr. Musa Adamu is a Doctor of Philosophy,
                            a mentor to thousands of young and bright youths, a philanthropist,
                            a sponsor to many graduate students in Nasarawa state, a successful entrepreneur,
                            a businessman, an admirable and proven leader. Despite all his achievements,
                            the first thing his friends and family will tell you is that he has never forgotten where he came from or who he have been fighting for.
                            Committed to positive change in our state, Dr Musa has set his standards high, and will not stop his good work until proper representation has been achieved.
                            To learn more about Dr. Musa, please explore the site and feel free to reach out if you have any questions or suggestions.
                                </p>

                        <ButtonBasicInv href="mailto:info@organizerfoundation.com" onMouseEnter={onHover} onMouseLeave={onHover} primary="false" dark="true" className="mx-auto">
                            {hover ? <MdMarkAsUnread /> : <><MdQuestionAnswer size={20} /> Contact us</>}
                        </ButtonBasicInv>
                    </div>

                </InfoWrapper>
            </InfoContainer>
        </>
    );
};
