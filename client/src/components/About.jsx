import { Link, NavLink } from 'react-router-dom';
import image from '../assets/about.png';

const About = () => {
    return (
        <div className='w-full max-w-screen-[1440px] mx-auto mt-[10px] lg:mt-[140px] lg:flex lg:item-center lg:justify-around lg:px-5'>
            <div className=" w-full max-w-[532px] h-[465px] md:mb-10 md:mx-auto">
              <img src={image} alt="" />
            </div>
            <div className=" w-full max-w-[607px] mx-auto lg:px-7 ">
                <h2 className='text-16px text-center lg:text-left'>ABOUT US</h2>
                <h1 className='font-pacifico text-[30px] text-center lg:text-left lg:text-[42px] leading-relaxed'>Bringing People Together <br />Through Food & <span className='text-[#FE2833]'>Festivities</span></h1>
                <p className='pt-[32px] lg:w-[607px] text-center lg:text-left  text-[20px] text-[#181111b3] mb-10'>At Food Bus Restaurant and Party Center, we blend flavorful <br /> cuisine with unforgettable celebrations. Whether you're <br />stopping by for a casual meal or hosting a grand event, we <br /> offer the perfect setting with warm hospitality, delicious <br /> dishes, and a vibrant atmosphere.</p>
                <NavLink to='/about' className='py-3 px-7 border-[1px] rounded-xl mt-5 hover:bg-gray-200 border border-black hover:border-none ml-[130px] lg:ml-0'>Read More</NavLink>
            </div>
        </div>
    );
};

export default About;