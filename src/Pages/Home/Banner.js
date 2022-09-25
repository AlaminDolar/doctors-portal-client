import React from 'react';
import chair from '../../assets/images/chair.png';
import Buton from '../Buton/Buton';

const Banner = () => {
    return (
        <div className="min-h-screen  hero bg-[url('/src/assets/images/bg.png')] ">
            <div className="flex-col hero-content lg:flex-row-reverse">
                <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6 ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, veritatis. Quis repellat omnis vitae saepe? Molestias atque, officia laborum repudiandae dolor sit quaerat, reiciendis explicabo non dolorem, mollitia sint blanditiis!</p>
                    <Buton></Buton>
                </div>
            </div>
        </div>
    );
};

export default Banner;