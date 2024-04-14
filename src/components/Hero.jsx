import React from "react";
// import photoGrid from '../assets/images/photo-grid.png'

export default function Hero() {
    return (
        <section className="hero-comp">
            <div className="photo-grid">

                <img src="../assets/images/photo-grid.png" alt="photo grid" />
            </div>
            <h1 className="hero-title">Online Experiences</h1>
            <p className="hero-desc">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </section>
    );
}