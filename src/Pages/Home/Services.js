import React from 'react';
import cavity from '../../assets/images/cavity.png';
import fluoride from '../../assets/images/fluoride.png';
import whitening from '../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel harum rerum molestiae molestias voluptas eligendi placeat. Id quibusdam iusto nisi!',
            img: fluoride
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque magni repellat libero expedita perspiciatis distinctio natus velit officia, cumque asperiores',
            img: cavity
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dicta, labore neque rem pariatur ea officiis recusandae nam odio odit.',
            img: whitening
        },


    ];
    return (
        <div className='my-28'>
            <div className='text-center'>
                <h2 className='text-2xl font-bold uppercase text-primary'>Our Services</h2>
                <h2 className='text-4xl'>Services We Provide</h2>
            </div>
            <div className='grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}

                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;