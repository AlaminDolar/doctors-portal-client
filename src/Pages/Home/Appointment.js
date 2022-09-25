import React from 'react';
import doctor from '../../assets/images/doctor.png';
import Buton from '../Buton/Buton';

const Appointment = () => {
    return (
        <section className="flex my-28 items-center justify-center bg-[url('/src/assets/images/appointment.png')]" >
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="/" />
            </div>
            <div className='flex-1 '>
                <h3 className='py-2 text-xl font-bold text-primary'>Appointment</h3>
                <h4 className='py-6 text-4xl text-white'>Make an appointment Today</h4>
                <p className='py-6 text-white '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dignissimos enim culpa iusto, ab minus veniam consectetur omnis in corporis, esse nihil placeat suscipit alias molestias voluptate accusamus assumenda ipsa.</p>
                <Buton></Buton>
            </div>
        </section >
    );
};

export default Appointment;