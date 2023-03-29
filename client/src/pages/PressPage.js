import React from 'react';
import PressCard from '../components/PressCard';
import './PressPage.css'

const PressPage = () => {
  return (
    <div>
      <p className="heading-text">As seen in ...</p>
      <div className="container">
        <ul className="image-gallery">
          <PressCard imgSrc={require("../images/teenvogue.jpg")}imgAlt="Teen Vogue"/>
          <PressCard imgSrc={require("../images/logo-well-good.png")}imgAlt="Well and Good"/>
          <PressCard imgSrc={require("../images/buzzfeed.jpg")}imgAlt="BuzzFeed"/>
          <PressCard imgSrc={require("../images/bustle.jpg")}imgAlt="Bustle"/>
          <PressCard imgSrc={require("../images/blackenterprise.jpg")}imgAlt="Black Enterprise"/>
          <PressCard imgSrc={require("../images/fashion.gif")}imgAlt="Fashion"/>
          <PressCard imgSrc={require("../images/refinery29.png")}imgAlt="Refinery 29"/>
          <PressCard imgSrc={require("../images/zoe.jpeg")}imgAlt="The Zoe Report"/>
          <PressCard imgSrc={require("../images/Glamour_Logo_XL.png")}imgAlt="Glamour"/>

        </ul>
      </div>
    </div>
  );
};

export default PressPage;
