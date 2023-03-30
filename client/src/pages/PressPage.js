import React from 'react';
import PressCard from '../components/PressCard';
import './PressPage.css'

const PressPage = () => {
  return (
    <div>
      <p className="heading-text">As seen in ...</p>
      <div className="container">
        <ul className="image-gallery">
          <PressCard imgUrl="https://www.teenvogue.com/story/body-acne-treatment-flo-and-theo-activated-charcoal-soap" imgSrc={require("../images/teenvogue.jpg")}imgAlt="Teen Vogue"/>
          <PressCard imgUrl="http://wellandgood.com/2014/05/19/artisan-beauty-products-made-in-new-york/#made-in-new-york-local-beauty-products-we-love-5" imgSrc={require("../images/logo-well-good.png")}imgAlt="Well and Good"/>
          <PressCard imgUrl="https://www.buzzfeed.com/whitneyjefferson/vegan-beauty-products-you-can-buy-on-amazon?utm_term=.oxZBjqpVZ#.oqnrV5wRp" imgSrc={require("../images/buzzfeed.jpg")}imgAlt="BuzzFeed"/>
          <PressCard imgUrl="https://www.bustle.com/articles/132700-9-vegan-skin-care-products-that-you-need-in-your-life" imgSrc={require("../images/bustle.jpg")}imgAlt="Bustle"/>
          <PressCard imgUrl="http://www.blackenterprise.com/5-last-minute-valentines-day-gifts-for-the-modern-day-gentleman/" imgSrc={require("../images/blackenterprise.jpg")}imgAlt="Black Enterprise"/>
          <PressCard imgUrl="https://images.squarespace-cdn.com/content/v1/52594417e4b030e5f06cf43c/1426095169053-X85SJE39P0OOJOGYRCMI/image-asset.gif?format=1000w" imgSrc={require("../images/fashion.gif")}imgAlt="Fashion"/>
          <PressCard imgUrl="http://www.refinery29.com/vegetarian-friendly-beauty-products#slide-7" imgSrc={require("../images/refinery29.png")}imgAlt="Refinery 29"/>
          <PressCard imgUrl="http://thezoereport.com/beauty/our-favorite-made-in-new-york-beauty-products/" imgSrc={require("../images/zoe.jpeg")}imgAlt="The Zoe Report"/>
          <PressCard imgUrl="http://www.floandtheo.com/blog/so-glamourous" imgSrc={require("../images/Glamour_Logo_XL.png")}imgAlt="Glamour"/>
          <PressCard imgUrl="http://www.noveaux-mag.com/" imgSrc={require("../images/nouveuz.jpeg")}imgAlt="Nouveaux"/>
          <PressCard imgUrl="https://mailchimp.com/viceland/flo-and-theo/" imgSrc={require("../images/mailchimp.jpg")}imgAlt="Mailchimp"/>
        </ul>
      </div>
    </div>
  );
};

export default PressPage;
