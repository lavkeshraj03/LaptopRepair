import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', className = '', icon: Icon, onClick, ...props }) => {
    const baseStyles = 'px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer';

    const variants = {
        primary: 'bg-primary text-white shadow-[0_0_15px_rgba(0,102,255,0.3)] hover:shadow-[0_0_25px_rgba(0,102,255,0.6)] border border-transparent',
        outline: 'bg-transparent border border-primary text-primary hover:bg-primary/10 hover:shadow-[0_0_15px_rgba(0,102,255,0.2)]',
        white: 'bg-white text-black hover:bg-gray-200 shadow-lg',
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            onClick={onClick}
            {...props}
        >
            {Icon && <Icon size={20} />}
            {children}
        </motion.button>
    );
};

export default Button;
