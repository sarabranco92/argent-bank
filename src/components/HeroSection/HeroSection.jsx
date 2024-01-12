import React from 'react';
import "../HeroSection/_HeroSection.scss";

const HeroSection = () => {
    return (
        <div className="hero">
            <section className="hero-content">
                <h2 className="sr-only">Promoted Content</h2>
                <p className="subtitle">No fees.<br />No minimum deposit.<br />High interest rates.<br /></p>
                <p className="text">Open a savings account with Argent Bank today!</p>
            </section>
        </div>
    );
};

export default HeroSection;
