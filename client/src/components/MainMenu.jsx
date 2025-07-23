import menu1 from '../assets/m1.png';
import menu2 from '../assets/m2.png';
import menu3 from '../assets/m3.png';
import menu4 from '../assets/m4.png';
import { NavLink } from 'react-router-dom';

const MainMenu = () => {
    return (
        <div className='w-full max-w-screen-[1440px] mx-auto flex flex-col items-center gap-20 justify-center'>
            {/* menu1 */}
            <NavLink to="main_dishes" className="w-full max-w-screen-[374px] h-[160px]">
                <div className="relative overflow-hidden">
                    <img
                        className=' w-full h-full object-cover transition-transform duration-300 hover:scale-105 rounded-xl'
                        src={menu1}
                        alt="Main Dishes"
                    />
                    <h1 className='absolute bottom-4 left-1/2 transform -translate-x-1/2 text-3xl font-pacifico text-[#E9C94B]'>
                        Main Dishes
                    </h1>
                </div>
            </NavLink>

            {/* menu2 */}
            <NavLink to="fast_food" className="w-full max-w-screen-[374px] h-[160px]">
                <div className="relative overflow-hidden">
                    <img
                        className=' w-full h-full object-cover transition-transform duration-300 hover:scale-105 rounded-xl'
                        src={menu4}
                        alt="Fast Food"
                    />
                    <h1 className='absolute bottom-4 left-1/2 transform -translate-x-1/2 text-3xl font-pacifico text-[#E9C94B]'>
                        Fast Food
                    </h1>
                </div>
            </NavLink>

            {/* menu3 */}
            <NavLink to="rice_dish" className="w-full max-w-screen-[374px] h-[160px]">
                <div className="relative overflow-hidden">
                    <img
                        className=' w-full h-full object-cover transition-transform duration-300 hover:scale-105 rounded-xl'
                        src={menu3}
                        alt="Rice Dish"
                    />
                    <h1 className='absolute bottom-4 left-1/2 transform -translate-x-1/2 text-3xl font-pacifico text-[#E9C94B]'>
                        Rice Dish
                    </h1>
                </div>
            </NavLink>

            {/* menu4 */}
            <NavLink to="thai" className="w-full max-w-screen-[374px] h-[160px]">
                <div className="relative overflow-hidden">
                    <img
                        className=' w-full h-full object-cover transition-transform duration-300 hover:scale-105 rounded-xl'
                        src={menu2}
                        alt="Thai & Chinese"
                    />
                    <h1 className='absolute pl-8 bottom-4 left-1/2 transform -translate-x-1/2 text-3xl font-pacifico text-[#E9C94B]'>
                        Thai & Chinese
                    </h1>
                </div>
            </NavLink>
        </div>
    );
};

export default MainMenu;
