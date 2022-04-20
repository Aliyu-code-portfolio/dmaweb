import React, { useState, useEffect } from 'react';
import moment from 'moment';
import {
  FooterContainer,
  FooterH2,
  FooterLink,
  FooterWrapper,
} from "./FooterElements";
import "./../../App.css";

const Footer = () => {
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

  return (
    <FooterContainer>
      <FooterWrapper className="container py-5">
        <div className="row gx-2 px-1 gy-2">
          {/* <div className="col-lg-3 col-sm-6">
            <FooterH2>About Us</FooterH2>
            <FooterLink href="#">How it works</FooterLink>
            <FooterLink href="#">Testimonials</FooterLink>
            <FooterLink href="#">Careers</FooterLink>
            <FooterLink href="#">Investors</FooterLink>
            <FooterLink href="#">Terms of Service</FooterLink>
          </div> */}
          <div className="col-lg-3 col-sm-12">
            <FooterH2>Contact Us</FooterH2>
            <FooterLink href="#contact">Contact</FooterLink>
            <FooterLink href="#contact">Support</FooterLink>
            <FooterLink href="#contact">Our Locations</FooterLink>
          </div>
          {/* <div className="col-lg-3 col-sm-6">
            <FooterH2>Customers</FooterH2>
            <FooterLink href="#">Our Customers</FooterLink>
            <FooterLink href="#">How to reach us</FooterLink>
            <FooterLink href="#">Video Samples</FooterLink>
            <FooterLink href="#">Agency</FooterLink>
          </div> */}
          <div className="col-lg-2 col-sm-12">
            <FooterH2>Follow Us</FooterH2>
            <FooterLink href="#">Instagram</FooterLink>
            <FooterLink href="#">Youtube</FooterLink>
            <FooterLink href="#">Facebook</FooterLink>
            <FooterLink href="#">LinkedIn</FooterLink>
          </div>
          <div className="col-lg-4 col-sm-12">
            <FooterH2>Website Developers</FooterH2>
            <FooterLink >Call: +234 9037781556</FooterLink>
            <FooterLink href="mailto:tecxactincng@gmail.com">tecxactincng@gmail.com</FooterLink>
            {/* <FooterLink href="">Our Locations</FooterLink> */}
          </div>
          <div className="col-lg-3 col-sm-12 ">
            <FooterH2>Election countdown</FooterH2>
            <FooterLink > {text ? <div className='name'>{text}</div> :
              // <code>&emsp;</code>
              <>
                <div className='time'> {days} days {hours} hours {minutes} minutes and {second} seconds.</div></>}</FooterLink>

          </div>
        </div>
        <div className="row">
          <div className="col-12 mt-5 ">
            <h2 className="logo-text gray-text center-align">&copy; 2022</h2>
            <h1 className="logo-text gray-text center-align">- Organizer Foundation -</h1>
          </div>
        </div>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
