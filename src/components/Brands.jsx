import React from 'react';
import Section from './Section';

const brands = [
    { name: 'Apple', logo: <svg viewBox="0 0 384 512" fill="currentColor" className="w-12 h-12"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z" /></svg> },
    { name: 'Dell', logo: <svg viewBox="0 0 512 512" fill="currentColor" className="w-12 h-12"><path d="M256 0c141.4 0 256 114.6 256 256S397.4 512 256 512 0 397.4 0 256 114.6 0 256 0zm0 460c112.6 0 204-91.4 204-204S368.6 52 256 52 52 143.4 52 256s91.4 204 204 204zm-56.2-259.6c11.6 0 21.2 9.6 21.2 21.2v76.8c0 11.6-9.6 21.2-21.2 21.2h-32.4c-11.6 0-21.2-9.6-21.2-21.2v-76.8c0-11.6 9.6-21.2 21.2-21.2h32.4zm134.8 0c11.6 0 21.2 9.6 21.2 21.2v76.8c0 11.6-9.6 21.2-21.2 21.2h-32.4c-11.6 0-21.2-9.6-21.2-21.2v-76.8c0-11.6 9.6-21.2 21.2-21.2h32.4z" /></svg> }, // Simplified Placeholder for Dell
    { name: 'HP', logo: <svg viewBox="0 0 512 512" fill="currentColor" className="w-12 h-12"><path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm-35.4 332.2l8.2-39.6h-27.4c-5.8 0-10.4-4.6-10.4-10.4 0-1.2.2-2.2.6-3.2l20.4-48c1.6-3.8 5.4-6.4 9.6-6.4h21l8.2-39.6h25.8l-8.2 39.6h27.4c5.8 0 10.4 4.6 10.4 10.4 0 1.2-.2 2.2-.6 3.2l-20.4 48c-1.6 3.8-5.4 6.4-9.6 6.4h-21l-8.2 39.6h-25.8z" /></svg> }, // HP
    { name: 'Windows', logo: <svg viewBox="0 0 448 512" fill="currentColor" className="w-12 h-12"><path d="M0 93.7l183.6-25.3v177.4H0V93.7zm0 324.6l183.6 25.3V268.4H0v149.9zm203.8 28L448 480V268.4H203.8v177.9zm0-380.6v180.1H448V32L203.8 65.7z" /></svg> }, // Microsoft
    { name: 'Android', logo: <svg viewBox="0 0 576 512" fill="currentColor" className="w-12 h-12"><path d="M420.55,301.93a24,24,0,1,1,24-24,24,24,0,0,1-24,24Zm-265.1,0a24,24,0,1,1,24-24,24,24,0,0,1-24,24Zm273.7-144.48,47.94-83a10,10,0,1,0-17.27-10l-48.54,84.07a301.25,301.25,0,0,0-246.56,0L116.18,64.45a10,10,0,1,0-17.27,10l47.94,83C64.53,202.22,8.24,285.55,0,384H576C567.76,285.55,511.47,202.22,429.15,157.45Z" /></svg> }, // Generic Tech/Android
    // For other brands, using text fallback with stylized font if specific SVG not available, or reusing generic tech icons
    { name: 'Asus', logo: <span className="text-3xl font-bold tracking-tighter">ASUS</span> },
    { name: 'Lenovo', logo: <span className="text-3xl font-bold italic tracking-wider">Lenovo</span> },
    { name: 'Samsung', logo: <span className="text-3xl font-bold tracking-tight">SAMSUNG</span> },
    { name: 'Acer', logo: <span className="text-3xl font-bold tracking-tighter lowercase">acer</span> },
    { name: 'MSI', logo: <span className="text-3xl font-bold italic">MSI</span> },
    { name: 'Razer', logo: <span className="text-3xl font-bold text-green-500 uppercase">RAZER</span> },
];

const Brands = () => {
    return (
        <Section className="py-20 bg-dark/50 relative overflow-hidden">
            <div className="text-center mb-12 relative z-10 px-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Brands We <span className="text-primary">Repair</span></h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    We repair all major laptop brands with genuine parts and expert technicians.
                </p>
            </div>

            {/* Gradient Masks */}
            <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-dark to-transparent z-10 pointer-events-none"></div>
            <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-dark to-transparent z-10 pointer-events-none"></div>

            <div className="flex overflow-hidden pause-on-hover">
                <div className="flex animate-marquee gap-16 min-w-full items-center shrink-0 py-8">
                    {[...brands, ...brands, ...brands].map((brand, index) => (
                        <div key={index} className="flex flex-col items-center justify-center gap-4 text-gray-400 hover:text-white hover:scale-110 transition-all duration-300 min-w-[120px] cursor-pointer group">
                            <div className="h-16 flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity drop-shadow-lg">
                                {brand.logo}
                            </div>
                            <span className="text-xs font-medium uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 text-primary">
                                {brand.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Brands;
