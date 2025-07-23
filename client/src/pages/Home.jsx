
import About from '../components/About';
import Service from '../components/Service';
import Testimonials from '../components/Testimonials';
import GallaryGrid from '../components/GallaryGrid';
import Menu from '../components/Menu';
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <div className='w-full max-w-screen-[1440px] mx-auto'>
            <Navbar/>
            <Service/>
            <About/>
            <Testimonials/>
            <GallaryGrid/>
            
        </div>
    );
};

export default Home;