import React from 'react';
import treatment from '../../assets/images/treatment.png';
import Buton from '../Buton/Buton';

const Hero = () => {
    return (
        <div className="min-h-screen mx-auto hero">
            <div className="grid grid-cols-1 gap-4 hero-content lg:grid-cols-2">
                <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold text-accent">Exceptional Dental Care,on Your Terms</h1>
                    <p className="py-6 mx-auto">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos eum aperiam mollitia maxime repellat suscipit natus earum, numquam odit ex ratione deserunt officia. Adipisci recusandae nulla ullam libero porro. Dolore.</p>
                    <Buton></Buton>
                </div>
            </div>
        </div>
    );
};

export default Hero;