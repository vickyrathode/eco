import React, { useContext } from 'react';
import Loyout from '../../components/layout/Layout.js';
import HeroSection from '../../components/heroSection/HeroSection.js';
import Category from '../../components/category/Category.js';
import HomePageProductCard from '../../components/homePageProductCard/HomePageProductCard.js';
import Track from '../../components/track/Track.js';
import Testimonial from '../../components/testimonial/Testimonial.js';
import Loader from '../../components/loader/Loader.js';

function Homepage() {
 
  return (
    <Loyout>
      <HeroSection/>
      <Category/>
      <HomePageProductCard/>
      <Track/>
      <Testimonial/>
      <Loader/>
    </Loyout>
  )
}

export default Homepage
