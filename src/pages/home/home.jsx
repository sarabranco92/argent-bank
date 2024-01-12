import React from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import Feature from '../../components/Feature/Feature';
import ItemData from '../../data/item.json'

import "../../assets/_main.scss"

import iconChat from '../../assets/img/icon-chat.webp';
import iconMoney from '../../assets/img/icon-money.webp';
import iconSecurity from '../../assets/img/icon-security.webp';

function HomePage () {
    const imageData = {
        "icon-chat.png": iconChat,
        "icon-money.png": iconMoney,
        "icon-security.png": iconSecurity
    }
    return (
        <div className='content-wrapper'>
            <HeroSection />
            <section className="features">
                <h2 className="sr-only">Features</h2>
                {ItemData.map((data) => (
                        /* Return item component */
                        < Feature 
                            key={data.id}
                            image={imageData[data.image]}
                            descriptionImage={data.descriptionImage}
                            title={data.title}
                            description={data.description}
                        />
                        ))}
                
            </section>
        </div>
    );
};

export default HomePage;
