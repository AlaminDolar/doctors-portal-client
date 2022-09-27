import React from 'react';
import Buton from '../Buton/Buton';

const Contacts = () => {
    return (
        <div className="my-28 bg-[url('/src/assets/images/appointment.png')]">
            <div className=' text-center pt-11       '>
                <h2 className='text-primary py-2 font-bold text-xl'>Contact Us</h2>
                <h4 className='text-3xl pb-6 text-white'>Stay Connected With Us</h4>
                <div className='flex flex-col items-center'>
                    <input type="text" placeholder="Email Address" className="input mb-5  input-bordered md:w-[450px] h-[48px] lg:w-[450px] h-[48px]" />
                    <input type="text" placeholder="Subject" className="input mb-5 md:w-[450px] h-[48px] input-bordered lg:w-[450px] h-[48px] " />
                    <input type="text" placeholder="Your Message" className="input mb-5 input-bordered md:w-[450px] h-[48px] lg:w-[450px] h-[136px]" />
                    <div className='m-7'>
                        <Buton ></Buton>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contacts;