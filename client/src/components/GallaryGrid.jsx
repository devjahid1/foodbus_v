import React, { useState } from 'react';

// Import images from assets folder
import img1 from '../assets/Rectangle 19.png';
import img2 from '../assets/Rectangle 23.png';
import img3 from '../assets/Rectangle 27.png';
import img4 from '../assets/Rectangle 20.png';
import img5 from '../assets/Rectangle 24.png';
import img6 from '../assets/Rectangle 28.png';
import img7 from '../assets/Rectangle 21.png';
import img8 from '../assets/Rectangle 25.png';
import img9 from '../assets/Rectangle 29.png';
import img10 from '../assets/Rectangle 22.png';
import img11 from '../assets/Rectangle 26.png';
import img12 from '../assets/Rectangle 30.png';

const GallaryGrid = () => {
    const images = [
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        img8,
        img9,
        img10,
        img11,
        img12,
    ];

    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openLightbox = (index) => {
        setCurrentIndex(index);
        setLightboxOpen(true);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const nextImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className='mb-28'>
            <div className='text-[16px] text-center pt-20 mb-10'>
                <h2>Gallery</h2>
                <h3 className='text-[20px] lg:text-[42px] font-pacifico'>
                    A Glimpse Into the <span className='text-red-500'>Experience</span>
                </h3>
            </div>

            <div className="w-3/4 mx-auto columns-1 sm:columns-2 lg:columns-4 gap-4 p-6 space-y-4">
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`gallery-${index}`}
                        className="w-full mb-4 rounded-lg shadow-md break-inside-avoid cursor-pointer hover:scale-105 transition-transform duration-300"
                        onClick={() => openLightbox(index)}
                    />
                ))}
            </div>

            {lightboxOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
                    <button
                        onClick={() => setLightboxOpen(false)}
                        className="absolute top-4 right-4 text-white text-4xl font-bold z-10"
                    >
                        &times;
                    </button>

                    <button
                        onClick={prevImage}
                        className="absolute left-4 text-white text-5xl font-bold z-10 hover:scale-125 transition"
                    >
                        &#8592;
                    </button>

                    <img
                        src={images[currentIndex]}
                        alt="Zoomed"
                        className="w-full h-auto max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
                    />

                    <button
                        onClick={nextImage}
                        className="absolute right-4 text-white text-5xl font-bold z-10 hover:scale-125 transition"
                    >
                        &#8594;
                    </button>
                </div>
            )}
        </div>
    );
};

export default GallaryGrid;
