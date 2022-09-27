import React from 'react';

const ReviewCard = ({ data }) => {
    return (
        <div className="shadow-xl card w-96 bg-base-100">
            <div className="card-body">
                <p>{data.description}</p>
                <div className='flex items-center '>
                    <div className="m-2 avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={data.img} />
                        </div>
                    </div>
                    <div className='ml-2'>
                        <h1 className='text-xl font-bold text-accent'>{data.title}</h1>
                        <p>{data.area}</p>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default ReviewCard;