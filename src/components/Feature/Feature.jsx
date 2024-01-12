import React from "react";
import "../Feature/_Feature.scss";


const Feature = ({ image, title, description }) => {
    return (
        <div className="feature-item">
            <img src={image} loading="lazy" alt={title} className="feature-icon" />
            <h3 className="feature-item-title">{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default Feature;
