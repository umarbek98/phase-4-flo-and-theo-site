import React from 'react';
import './ingredientsPage.css'
import Ingredient from '../components/ingredient';
// import  './src/images'

const Ingredients = () => {

  return (
    <div className='ingredients-container'>
      <p>At FLO+THEO, we pride ourselves in formulating vegan skin care products with only the finest, high potency ingredients that Mother Nature has to offer. Our all ingredients are hand-picked for their effective dermatological qualities and their ability to promote healthier and more beautiful skin.</p>
      <p className='ingredient-headline'>LIST OF INGREDIENTS</p>
      <Ingredient imgSrc={require("../images/aloe-vera.jpg")}imgAlt="ALOE VERA">
        ALOE VERA: Aloe Vera often described as a wonder-plant, produces a clear gel that has antibacterial properties.The gel also has the ability to naturally soothe, rejuvenate and heal irritated and problematic skin.
      </Ingredient>
     <Ingredient imgSrc={require("../images/wax.jpg")} imgAlt="CANDELILLA WAX">
        CANDELILLA WAX: Candelilla wax is a natural wax derived from a candelilla plant, which grows  in Mexico, in the North Central Plains and the Chihuahuan Desert. It is a hard wax and acts as a great vegan alternative to beeswax.
      </Ingredient>
      <Ingredient imgSrc={require("../images/cocoa.jpg")} imgAlt="COCOA BUTTER">
        COCOA BUTTER:  Cocoa butter has been used to achieve soft and supple skin for centuries. This ultimate moisturizer is mineral rich and filled with natural antioxidants and vitamins, promoting skin elasticity and locking in moisture.
      </Ingredient>
      <Ingredient imgSrc={require("../images/coconuts.jpg")} imgAlt="COCONUT OIL">
        COCONUT OIL:  Candelilla wax is a natural wax derived from a candelilla plant, which grows  in Mexico, in the North Central Plains and the Chihuahuan Desert. It is a hard wax and acts as a great vegan alternative to beeswax.
      </Ingredient>
      <Ingredient imgSrc={require("../images/essential-oil.jpg")} imgAlt="ESSENTIAL OILS">
        ESSENTIAL OILS: Essential oils are natural compounds that can be found in the flowers, bark, stems, roots and fruits of plants. Essentials oils  are renowned for both their aromatic and therapeutic properties.
      </Ingredient>
      <Ingredient imgSrc={require("../images/grapeseed-oil.jpg")} imgAlt="GRAPESEED OIL">
        GRAPESEED OIL: Grapeseed oil is a nutrient-rich oil extracted from the seeds of grapes. It is rich in antioxidants, contains numerous essential fatty acids, providing nourishment and moisture to the skin . It is light and absorbs well into the skin.
      </Ingredient>
      <Ingredient imgSrc={require("../images/clay.jpg")} imgAlt=" KAOLIN CLAY">
        KAOLIN CLAY: Kaolin Clay is a natural, mineral clay that helps purify and nourish the skin. It possesses oil-absorbing properties and has the ability to draw out impurities from the skin without taking away it's natural moisture.
      </Ingredient>
      <Ingredient imgSrc={require("../images/hibiscus_flower.jpg")} imgAlt="HIBISCUS POWDER">
        HIBISCUS POWDER: Hibiscus powder is derived from the crushed flower petals of the  Hibiscus  plant. Hibiscus petal powder is an ayurvedic herb has been used for centuries due to it's ability to support healthy hair and skin.
      </Ingredient>
      <Ingredient imgSrc={require("../images/lavender.jpg")} imgAlt="LAVENDER">
        LAVENDER: The use of Lavender in skin care formulations can be traced back thousands of years. This aromatic shrub has both antiseptic and anti-fungal abilities.
      </Ingredient>
      <Ingredient imgSrc={require("../images/lemongrass.jpg")} imgAlt="LEMONGRASS">
        LEMONGRASS: Lemongrass is a fragrant, tropical species of grass found mostly in India and Sri Lanka. The herb has both anti-microbial and anti-bacterial capabilities.
      </Ingredient>
      <Ingredient imgSrc={require("../images/olive-oil.jpg")} imgAlt="OLIVE OIL">
        OLIVE OIL: This is an extremely moisturizing oil, packed with powerful nutrients, vitamins, antioxidants and natural compounds. Antioxidants such as vitamins A and E, polyphenols and hydroxytyrosol help promote radiant and well-nourished skin.
      </Ingredient>
      <Ingredient imgSrc={require("../images/sugar.jpg")} imgAlt="PURE CANE SUGAR">
        PURE CANE SUGAR: Sugar is a rich source of alpha-hydroxy acid, an ingredient  with exceptional exfoliating and emollients properties.
      </Ingredient>
      <Ingredient imgSrc={require("../images/rosehip.jpg")} imgAlt="ROSEHIP POWDER">
        ROSEHIP POWDER: Rosehip is the fruit of the rose plant. The fruits of the rose has high vitamin C content and also contains vitamin E, flavonoids, beta-carotene and lycopene, all which support beautiful and glowing skin.
      </Ingredient>
      <Ingredient imgSrc={require("../images/shea-butter.jpg")} imgAlt="SHEA BUTTER">
        SHEA BUTTER:  Shea Butter is bursting with beneficial vitamins A, E and F. Vitamins A and E are helpful in dealing with sun damaged skin, preventing premature wrinkles and facial lines, whilst Vitamin F acts as a protector and rejuvenator.
      </Ingredient>
      <Ingredient imgSrc={require("../images/green-powder.jpg")} imgAlt="SPIRULINA POWDER">
        SPIRULINA POWDER: Spirulina is a blue-green freshwater algae, rich in vitamins, minerals, essential fatty acids and more than 18 amino acids. It acts as a strong antioxidant and has powerful anti-inflammatory qualities.
      </Ingredient>
      <Ingredient imgSrc={require("../images/sunflower-seeds.jpg")} imgAlt="SUNFLOWER OI">
        SUNFLOWER OIL: Sunflower oil is high in Oleic acids, vitamins A, B, D, E, minerals, lecithin and essential fatty acids. It is light, non-greasy oil that is easily absorbed and deeply nourishes and conditions the skin.
      </Ingredient>
      <Ingredient imgSrc={require("../images/almonds.jpg")} imgAlt="SWEET ALMOND OIL">
        SWEET ALMOND OIL: Sweet Almond oil is a superb emollient, that nourishes and softens the skin. This oil is rich in essential fatty acids, vitamins A, B1, B2, B6, D and E. Sweet Almond Oil does not clog pores yet has excellent penetrating qualities.
      </Ingredient>
      <Ingredient imgSrc={require("../images/vitamin-e.jpeg")} imgAlt="Vitamin E">
        Vitamin E: Through its antioxidant properties, vitamin E can help fight the signs of aging, protect from sun damage, and even potentially lower skin cancer risks.
      </Ingredient>
      <p className='ingredient-disclaimer'>At FLO+THEO, we pride ourselves in formulating vegan skin care products with only the finest, high potency ingredients that Mother Nature has to offer. Our all ingredients are hand-picked for their effective dermatological qualities and their ability to promote healthier and more beautiful skin.</p>
    </div>
  );
};

export default Ingredients;
