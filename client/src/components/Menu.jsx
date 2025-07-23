import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <div className="menu-container w-full max-w-screen[1440px] h-[868px] mx-auto mt-0 lg:mt-[140px] mb-0 lg:mb-[140px] bg-gray-100 bg-footerImg bg-no-repeat bg-cover bg-center">

            <div className='w-full max-w-[1200px] mx-auto text-center flex '>

                {/* menu1 */}
                <NavLink to='/bangladeshi' className='w-full max-w-[300px]'>
                    <div className='bg-m1 h-[868px]'>
                    <p className="text-white text-[28px] pt-[710px]">Bangladeshi</p>
                    </div>
                </NavLink>
                {/* menu2 */}
                <NavLink to='/chinese' className='w-full max-w-[300px]'>
                    <div className='bg-m2 h-[868px] '>
                    <p className="text-white text-[28px] pt-[710px]">Chinese & Thai</p>
                    </div>
                </NavLink>
                {/* menu3 */}
                <NavLink to='/fastFood' className='w-full max-w-[300px]'>
                    <div className='bg-m3 h-[868px]'>
                    <p className="text-white text-[28px] pt-[710px]">Fast Food</p>
                    </div>
                </NavLink>
                {/* menu4 */}
                <NavLink to='/dessert' className='w-full max-w-[300px]'>
                    <div className='bg-m4 h-[868px]'>
                    <p className="text-white text-[28px] pt-[710px]">Dessert</p>
                    </div>
                </NavLink>

               





                
            </div>
            
        </div>
    );
};

export default Menu;