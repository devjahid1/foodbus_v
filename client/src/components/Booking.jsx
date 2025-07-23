import { useState } from 'react';
import Swal from 'sweetalert2';
import Nav from './Nav';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    reason: '',
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, date, reason } = formData;
    const newBooking = { name, email, phone, date, reason };

    // Save to localStorage
    const pendingBookings = JSON.parse(localStorage.getItem('pendingBookings')) || [];
    pendingBookings.push(newBooking);
    localStorage.setItem('pendingBookings', JSON.stringify(pendingBookings));

    Swal.fire({
      icon: 'info',
      title: 'Booking Pending!',
      text: 'We are contacting you soon',
      confirmButtonColor: '#d33',
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      reason: '',
      agree: false,
    });
  };

  return (
    <div>
            <div className='shadow text-black w-full max-w-screen[1440px] mx-auto h-[300px] bg-banner bg-cover bg-center bg-no-repeat bg-fixed'>
                <div className="absolute h-[300px] inset-0 bg-gradient-to-b from-black/60 to-gray/90 z-0"></div>
        <section className="relative z-10">
          <Nav />
        </section>
      </div>
    <div className="max-w-xl mx-auto mt-12 px-6 py-8 bg-white rounded-2xl shadow-lg border border-gray-200">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Party Center Booking
      </h2>

      <form className="space-y-5" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
          required
        />

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
          required
        />

        <select
          name="reason"
          value={formData.reason}
          onChange={handleChange}
          className="w-full px-4 py-3 border rounded-lg text-gray-500 focus:outline-none focus:ring-2 focus:ring-red-400"
          required
        >
          <option value="">Select Booking Reason</option>
          <option value="Wedding">Wedding</option>
          <option value="Meeting">Meeting</option>
          <option value="Birthday">Birthday</option>
        </select>

        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            className="mt-1"
            required
          />
          <label htmlFor="agree" className="text-gray-600 text-sm">
            I agree to the <span className="text-red-500 font-semibold">terms and conditions</span>.
          </label>
        </div>

        <input
          value="Submit Booking"
          type="submit"
          className="w-full cursor-pointer bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition duration-300"
        />
      </form>
    </div>
    </div>
  );
};

export default BookingForm;
