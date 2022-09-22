import React from 'react';

const InfoCard = ({ img, bgClass, cardTitle }) => {
    return (
        <div className={`p-2 shadow-xl card card-side ${bgClass}`}>
            <figure className='pl-2'><img src={img} alt="Movie" /></figure>
            <div className="text-white card-body">
                <h2 className=" card-title">{cardTitle}</h2>
                <p>Click the button to watch on Jetflix app.</p>
                <div className="justify-end card-actions">

                </div>
            </div>
        </div>
    );
};

export default InfoCard;