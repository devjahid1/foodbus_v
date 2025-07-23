import React from 'react';
import Nav from '../components/Nav';

const ContactBanner = () => {
    return (
                 <div className="relative w-full max-w-screen-[1440px] mx-auto h-[300px] bg-banner bg-cover bg-center bg-no-repeat bg-fixed">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-gray/90 z-0"></div>

      {/* Navbar section */}
      <section className="relative z-10">
        <Nav/>
      </section>

      {/* Hero text section */}
      <section className="relative w-full max-w-[1440px] mx-auto pt-3 lg:pt-3">
        <div className="w-full max-w-[1440px] mx-auto text-center text-white">
          <p className="text-[32px] lg:text-[60px] font-bold text-center">Contact Us</p>
        </div>
      </section>
    </div>
    );

};

export default ContactBanner;