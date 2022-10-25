import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, date, setTreatment }) => {
    const { name, slots, _id } = treatment;

    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(_id, name, slot);
        setTreatment(null);
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="absolute btn btn-sm btn-circle right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-secondary ">Booking for: {name} </h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-2 mt-5 justify-items-center'>
                        <input type="text" disabled value={format(date, 'PP')} className="w-full max-w-xs input input-bordered" />
                        <select name='slot' className="w-full max-w-xs select select-bordered">
                            {
                                slots.map(slot => <option value={slot}>{slot} </option>)
                            }
                        </select>
                        <input type="text" name='name' placeholder="Your Name" className="w-full max-w-xs input input-bordered" />
                        <input type="text" name='email' placeholder="Email Address" className="w-full max-w-xs input input-bordered" />
                        <input type="text" name='phone' placeholder="Phone Number" className="w-full max-w-xs input input-bordered" />
                        <input type="submit" className="w-full max-w-xs btn btn-secondary" />

                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookingModal;