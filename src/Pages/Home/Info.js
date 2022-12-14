import React from 'react';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';
import InfoCard from './InfoCard';

const Info = () => {
    return (
        <div className='grid grid-cols-1 gap-5 lg:grid-cols-3'>
            <InfoCard bgClass='bg-gradient-to-r from-primary to-secondary' cardTitle='Opening Hours' img={clock}></InfoCard>
            <InfoCard bgClass='bg-accent' cardTitle='Our Locations' img={marker}></InfoCard>
            <InfoCard bgClass='bg-gradient-to-r from-primary to-secondary' cardTitle='Contact Us' img={phone}></InfoCard>
        </div>
    );
};

export default Info;