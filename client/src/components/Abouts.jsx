import { NavLink } from 'react-router-dom';
import Nav from '../components/Nav'

const Abouts = () => {
    return (
                 <div className="relative w-full max-w-screen-[1440px] mx-auto h-[1000px] bg-banner bg-cover bg-center bg-no-repeat bg-fixed">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-gray/90 z-0"></div>

      {/* Navbar section */}
      <section className="relative z-10">
        <Nav />
      </section>

      {/* Hero text section */}
      <section className="relative w-full max-w-[1440px] mx-auto pt-32 lg:pt-20">
        <div className="w-full max-w-[1440px] mx-auto text-center text-white">
          <p className="text-[32px] lg:text-[60px] font-bold text-center">ABOUT US</p>
          <p className="w-full max-w-[568px] mx-auto text-[20px] pt-[36px] font-plusjakarta text-center">
            Creating Flavorful Experiences, One Celebration at a Time
          </p>

          <div className="py-[8px] px-[10px] pt-14 lg:pt-[61px]">
            <NavLink to='/contact' className="py-[25px] px-[20px] btn  bg-[#E30814] text-white border-none shadow-none hover:bg-white hover:text-black text-[20px] font-plusjakarta">
              Book Now
            </NavLink>
          </div>
        </div>
      </section>
    </div>
    );
};

export default Abouts;