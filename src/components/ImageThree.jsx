import React, { useEffect, useRef } from 'react';
import { Parallax } from 'react-parallax';
import { assets } from '../assets/assets.js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ImageThree = () => {
    const galleryRef = useRef(null);
    const cardsRef = useRef([]);
    const [selectedImage, setSelectedImage] = React.useState(null);

    // Gallery items using your images
    const galleryItems = [
        { id: 1, image: assets.heroImage, title: "Adventure Awaits", description: "Discover new horizons" },
        { id: 2, image: assets.heroImage, title: "Natural Beauty", description: "Experience the wild" },
        { id: 3, image: assets.heroImage, title: "Serene Landscapes", description: "Find your peace" },
        { id: 4, image: assets.heroImage, title: "Mountain Peaks", description: "Reach new heights" },
        { id: 5, image: assets.heroImage, title: "Ocean Views", description: "Endless possibilities" },
        { id: 6, image: assets.heroImage, title: "Hidden Gems", description: "Explore the unknown" },
    ];

    useEffect(() => {
        if (!galleryRef.current) return;

        // Animate gallery title
        gsap.from('.gallery-title', {
            opacity: 0,
            y: -50,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: galleryRef.current,
                start: 'top 80%',
            },
        });

        // Animate cards with stagger
        cardsRef.current.forEach((card, index) => {
            if (card) {
                gsap.fromTo(
                    card,
                    {
                        opacity: 0,
                        y: 80,
                        scale: 0.9,
                        rotateY: -15,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        rotateY: 0,
                        duration: 0.8,
                        ease: 'back.out(1.2)',
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 85%',
                            end: 'top 60%',
                            toggleActions: 'play none none reverse',
                        },
                        delay: index * 0.15,
                    }
                );
            }
        });
    }, []);

    return (
        <Parallax className='relative min-h-[100vh] bg-cover bg-center bg-fixed' bgImage={assets.footerImage} strength={800}>
            <div className='relative py-20 px-4 md:px-8'>
                {/* Header */}
                <div className='flex flex-col items-center justify-center mb-16 gallery-title'>
                    <h1 className='text-white text-5xl md:text-7xl font-bold mb-4 text-center'>
                        Our Gallery
                    </h1>
                    <p className='text-white/90 text-lg md:text-xl text-center max-w-2xl'>
                        Explore breathtaking destinations and unforgettable moments
                    </p>
                </div>

                {/* Gallery Grid */}
                <div 
                    ref={galleryRef}
                    className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16'
                >
                    {galleryItems.map((item, index) => (
                        <div
                            key={item.id}
                            ref={(el) => (cardsRef.current[index] = el)}
                            className='group relative overflow-hidden rounded-3xl shadow-2xl cursor-pointer transform transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]'
                            style={{ height: '350px', perspective: '1000px' }}
                            onClick={() => setSelectedImage(item)}
                        >
                            {/* Image */}
                            <img 
                                src={item.image} 
                                alt={item.title}
                                className='absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out'
                            />
                            
                            {/* Gradient Overlay */}
                            <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500' />

                            {/* Hover Border Effect */}
                            <div className='absolute inset-0 border-4 border-white/0 group-hover:border-white/30 rounded-3xl transition-all duration-500' />
                            
                            {/* Click to View Icon */}
                            <div className='absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                                <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7' />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Lightbox Modal */}
                {selectedImage && (
                    <div 
                        className='fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4'
                        onClick={() => setSelectedImage(null)}
                    >
                        {/* Close Button */}
                        <button 
                            className='absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-10'
                            onClick={() => setSelectedImage(null)}
                        >
                            <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                            </svg>
                        </button>

                        {/* Image Container */}
                        <div 
                            className='relative max-w-7xl max-h-[90vh] w-full'
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img 
                                src={selectedImage.image}
                                alt={selectedImage.title}
                                className='w-full h-full object-contain rounded-2xl shadow-2xl'
                            />
                            
                        </div>
                    </div>
                )}
            </div>
        </Parallax>
    );
};

export default ImageThree;