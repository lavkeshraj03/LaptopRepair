import React from 'react';
import { motion } from 'framer-motion';

const GlassCard = ({ children, className = '', hoverEffect = true, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            viewport={{ once: true }}
            whileHover={hoverEffect ? { y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.4)" } : {}}
            className={`glass-card rounded-2xl p-6 transition-all duration-300 ${className}`}
        >
            {children}
        </motion.div>
    );
};

export default GlassCard;
