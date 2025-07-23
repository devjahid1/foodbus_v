import { FaLocationDot } from 'react-icons/fa6';
import icon from '../assets/carbon_diamond-solid.png'
import { FaPhoneAlt } from 'react-icons/fa';
import { MdOutlineAccessTimeFilled } from 'react-icons/md';
import logo from '../assets/Mask group.png';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
      <div className='bg-footerImg bg-cover bg-no-repeat bg-center'>
        <div className="footer sm:footer-horizontal text-base-content  max-w-screen-[1440px] mx-auto p-10  text-white h-[850px] lg:h-[500px] lg:flex lg:justify-around lg:items-center">
  <aside>

    <img className='mb-10' src={logo} alt="" />
    
    <p className='text-[18px] text-white font-plusjakarta leading-10'>
      From mouthwatering meals to
      <br />
      full-on party setups
    </p>
  </aside>
  <div>

    <div className='flex items-center gap-4 font-pacifico text-[24px] mb-10'>
        <img src={icon} alt="" />
        <h1 className="text-white">Get In Touch</h1>
    </div>

    <div className='ml-5 flex flex-col gap-5'>

        <div className='flex items-center gap-4 mb-5'>
            <FaLocationDot className='text-gray-500 text-[20px]' />
            <h1 className='text-white'>East Mirabazar Dadapir Mazar Road, Sylhet</h1>
        </div>
        <div className='flex items-center gap-4 mb-5'>
            <FaPhoneAlt className='text-gray-500 text-[20px]' />
            <h1 className='text-white'>+880-1714-974-833</h1>
        </div>
        <div className='flex items-center gap-4 mb-5'>
            <MdOutlineAccessTimeFilled className='text-gray-500 text-[20px]' />
            <h1 className='text-white'>9 AM - 11 PM</h1>
        </div>

    </div>

  </div>
  <nav>

    <div className='flex items-center gap-4 font-pacifico text-[24px] mb-10 text-white'>
        <img src={icon} alt="" />
        <h1>Pages</h1>
    </div>

    <div className='flex flex-col gap-5 ml-5 text-white'>
        <Link to='/about' className="link link-hover">About us</Link>
    <Link to='/menu' className="link link-hover">Our Menu</Link>
    <Link to='/gallery' className="link link-hover">Gallery</Link>
    </div>
  </nav>
</div>

  <p className="text-sm text-white text-center pb-3">
    &copy; {new Date().getFullYear()} All rights reserved. Developed by{" "}
    <a
      href="https://jahid.me"
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold hover:text-blue-400 transition-colors"
    >
      <span className='text-[#F84C4C]'>Jahid</span>
    </a>
  </p>
</div>
    );
};

export default Footer;