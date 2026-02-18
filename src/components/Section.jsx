import React from 'react';

const Section = ({ children, className = '', id = '' }) => {
    return (
        <section id={id} className={`py-20 px-6 md:px-12 lg:px-24 w-full relative overflow-hidden ${className}`}>
            <div className="max-w-7xl mx-auto relative z-10">
                {children}
            </div>
        </section>
    );
};

export default Section;
