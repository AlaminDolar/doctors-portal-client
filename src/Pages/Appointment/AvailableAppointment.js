import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointment = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='my-28'>
            <h1 className='text-xl font-bold text-center text-secondary'>Available Services on {format(date, 'PP')}</h1>


            <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mt-11'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            {treatment && <BookingModal
                treatment={treatment}
                date={date}
                setTreatment={setTreatment}
            ></BookingModal>}
        </div>



    );
};

export default AvailableAppointment;