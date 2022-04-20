import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import {
  InfoContainer, InfoWrapper,
  //Subtitle, Title 
}
  from "../infoSection/InfoElements";
// import { ButtonBasic } from "../ButtonElements";
import Message from './message'

function Contact({ id }) {
  return (
    <>
      <InfoContainer id={id} className="bg-black">
        <InfoWrapper>
          <div className="row expand-row gx-10 ">
            <div className="flex-column  col-lg-5 col-sm-12 mt-lg-12">
              <h1 className="text-center text-light mb-5">Contact Us</h1>
              <div className='text-sm-left'>
                <div className='text-light mb-3'>Address: Millionaire's quarters, Lafia, Nasarawa state, Nigeria</div>
                <a className='text-light mb-3' href='mailto:info@organizerfoundation.com'>Email: info@organizerfoundation.com</a>
                <div className='text-light'>Call: +234 8172119306</div>
              </div>

            </div>
            <div className="col-lg-7 col-sm-12 my-auto">
              <Message />
            </div>
          </div>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default Contact;
