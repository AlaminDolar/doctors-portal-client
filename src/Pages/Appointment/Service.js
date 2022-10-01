import React from 'react';

const Service = ({ service }) => {
    const { name, slots } = service;
    return (
        <div className="card  h-[230px] w-[425px] bg-base-100 shadow-xl">
            <div className="card-body ">
                <h2 className="card-title justify-center text-secondary font-bold">{name}</h2>

                <p className='text-center'>{
                    slots.length > 0
                        ? <span>{slots[0]}</span>
                        : <span className='text-red-500'>No Slot Available</span>
                }
                </p>
                <p className='text-center'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available </p>

                <div className="card-actions justify-center">
                    <button className="btn btn-primary uppercase">book appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Service;