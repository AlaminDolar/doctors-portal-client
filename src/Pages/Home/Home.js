import React from 'react';
import Footer from '../Shared/Footer';
import Appointment from './Appointment';
import Banner from './Banner';
import Contacts from './Contacts';
import Hero from './Hero';
import Info from './Info';
import ReviewSection from './ReviewSection';
import Services from './Services';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Hero></Hero>
            <Appointment></Appointment>
            <ReviewSection></ReviewSection>
            <Contacts></Contacts>
            <Footer></Footer>
        </div>
    );
};

export default Home;