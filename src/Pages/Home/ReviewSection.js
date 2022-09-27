import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import ReviewCard from './ReviewCard';


const ReviewSection = () => {
    const datas = [
        {
            _id: 1,
            img: people1,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, quas eveniet architecto minus nostrum dolorum.',
            title: 'Wilson Hery',
            area: 'California'
        },
        {
            _id: 1,
            img: people2,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, quas eveniet architecto minus nostrum dolorum.',
            title: 'Wilson Hery',
            area: 'California'
        },
        {
            _id: 1,
            img: people3,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, quas eveniet architecto minus nostrum dolorum.',
            title: 'Wilson Hery',
            area: 'California'
        },
    ];
    return (
        <section className='my-28'>
            <div className='flex justify-between my-28'>
                <div>
                    <h2 className='text-xl font-bold text-primary'>Testimonial</h2>
                    <h3 className='text-5xl '>What Our Patients Say</h3>
                </div>
                <div className='w-24 lg:w-48'>
                    <img src={quote} alt="" />
                </div>
            </div>

            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
                {
                    datas.map(data => <ReviewCard
                        key={data._id}
                        data={data}
                    ></ReviewCard>)
                }
            </div>
        </section >
    );
};

export default ReviewSection;