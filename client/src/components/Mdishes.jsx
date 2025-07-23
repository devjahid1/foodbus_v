import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Maindishes from './Maindishes';

const Mdishes = () => {
    const data = useLoaderData();
    const [showAll, setShowAll] = useState(false);

    // Show first 9 or all items
    const visibleItems = showAll ? data : data.slice(0, 12);

    return (
        <div className="w-full max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                {visibleItems.map(item => (
                    <Maindishes key={item.id} mainItem={item} />
                ))}
            </div>

            {data.length > 12 && (
                <div className="flex justify-center mt-6">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="bg-[#BF0A13] hover:bg-white hover:text-[black] border-[1px] border-[#BF0A13] text-white font-semibold py-2 px-6 rounded transition"
                    >
                        {showAll ? 'Show Less' : 'Show More'}
                    </button>
                </div>
            )}
        </div>
    );
};

export default Mdishes;
