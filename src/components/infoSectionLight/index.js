import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import { InfoContainer, InfoWrapper, Subtitle, Title } from "./infoElements";
import { ButtonBasicInv } from "../ButtonElements";
import { getNextEvent } from '../../services/firebase'

export const InfoSectionLight = ({
  id,
  title,
  subtitle,
  text,
  image,
  btnText,
}) => {
  return (
    <>
      <InfoContainer id={id} className="bg-white">
        <InfoWrapper>
          <div className="row expand-row gx-5">
            <div className="col-lg-6 col-sm-12 img-wrap">
              <img src={image} alt="" className="fit-img"></img>
            </div>
            <div className="col-lg-6 col-sm-12 my-auto">
              <Subtitle>{subtitle}</Subtitle>
              <Title className="text-black mb-5">{title}</Title>
              <p className="text-black mb-4">{text}</p>
              <ButtonBasicInv to="" primary="false" dark="true" className="mx-auto">
                {btnText}
              </ButtonBasicInv>
            </div>
          </div>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};


export const InfoSectionEvent = ({
  id,
  title,
  image,
  btnText,
}) => {
  const [info, setInfo] = useState(null)

  useEffect(() => {
    getNextEvent(data)
  }, [])

  const data = (pushed) => {
    setInfo(pushed)
  }
  return (
    <>
      <InfoContainer id={id} className="bg-white">
        <InfoWrapper>
          <div className="row expand-row gx-5">
            <div className="col-lg-6 col-sm-12 img-wrap">
              <img src={image} alt="" className="fit-img"></img>
            </div>
            <div className="col-lg-6 col-sm-12 my-auto">
              <Title className="text-black mb-5">{title}</Title>
              <Subtitle>{info?.lga && info.lga} {info?.name}</Subtitle>
              <p className="text-black mb-4">{info?.desc}</p>
              <p className="text-black mb-4">Venue: {info?.venue}</p>
              <p className="text-black mb-4">Date: {info?.date}</p>
              <p className="text-black mb-4">Time: {info?.time}</p>
              <ButtonBasicInv to="" primary="false" dark="true" className="mx-auto">
                {btnText}
              </ButtonBasicInv>
            </div>
          </div>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};
