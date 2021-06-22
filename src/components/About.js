import React, { useState } from 'react';
import floristWorking from "../images/florist-working.jpg";
import flowerPhoto from "../images/lots-of-flower.jpg";


const About = () => {
    return (
        <div className="About">
            <div className="about-sect-one">
                <p>The concept for Flowershop was created in 2017 when college friends Celeste, a business student, met Sarah, a floral design student. <br /><br />The two had the idea to create a boutique florist shop with a focus on sustainability. Since the beginning, Flowershop has used only ethically sourced and, most often, local flowers. </p>
                <img src={floristWorking} />
            </div>
            <div className="about-sect-two">
                <img src={flowerPhoto} />
                <p></p>
            </div>
        </div>
    )
}

export default About;