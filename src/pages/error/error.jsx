import React from "react";
import { Link } from "react-router-dom";
import GreenError from '../../assets/img/404-page.webp'
import '../error/_error.scss';



function Error () {
    return (
        <div className="error-page">
            <main>
                <section className="error">
                    <img src={GreenError} alt="error 404" className="green-error"/>
                    <h1>Oops! Page Not Found.</h1>
                <p className="text-error">The page you're looking for doesn't seem to exist. It might have been moved or deleted.</p>
                <p className="text-error">Don't worry, let's get you back on track!</p>
                    < Link to="/">
                        <button className="button-404" to="/">Back to the Homepage</button>
                    </Link>
                </section>
            </main>
        </div>
    );
};

export default Error