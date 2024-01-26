import React from 'react';
import "../HeroSection/_HeroSection.scss"; 

// Import images for different screen sizes
import heroImageSmall from '../../assets/img/bank-tree-small.webp';
import heroImageMedium from '../../assets/img/bank-tree-medium.webp';
import heroImageLarge from '../../assets/img/bank-tree-large.webp';

const HeroSection = () => {
    return (
        <div className="hero">
            <picture>
                <source media="(min-width: 1200px)" srcSet={heroImageLarge} />
                <source media="(min-width: 768px)" srcSet={heroImageMedium} />
                <img src={heroImageSmall} alt="Hero Section Background" />
            </picture>
            <section className="hero-content">
                <h2 className="sr-only">Promoted Content</h2>
                <p className="subtitle">No fees.<br />No minimum deposit.<br />High interest rates.<br /></p>
                <p className="text">Open a savings account with Argent Bank today!</p>
            </section>
        </div>
    );
};

export default HeroSection;
