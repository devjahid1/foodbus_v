import React from 'react';

const FastFoods = ({fastFoodItem}) => {
    const { img, name, totalPiece, price } = fastFoodItem;

    return (
        <div className="w-full max-w-[1440px] rounded-lg pb-4 px-2">
            <img
                src={img}
                alt={name}
                className="w-full max-w-[200px] h-[132px] object-cover rounded-lg mb-3"
            />
            <h2 className="text-[14px] font-pacifico mb-1">{name}</h2>
            <p className="text-[12px] text-gray-600 mb-1">{totalPiece}</p>
            <p className="text-[13px] text-[#BF0A13] font-bold">{price} <span className='text-black'>৳</span></p>
        </div>
    );
};

export default FastFoods;