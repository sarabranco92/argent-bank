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
                        < Feature 
                        key={data.id} // Clé unique pour chaque fonctionnalité (requis dans les listes)
                        image={imageData[data.image]} // Image correspondant à la fonctionnalité
                        descriptionImage={data.descriptionImage} // Description de l'image (cette propriété semble inutilisée dans le composant Feature)
                        title={data.title} // Titre de la fonctionnalité
                        description={data.description} // Description de la fonctionnalité
                    />
                        ))}
                
            </section>
        </div>
    );
};

export default HomePage;
