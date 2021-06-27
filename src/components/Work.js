import React from 'react';
import closeUp from "../images/close-up.jpg";
import fallFlowers from "../images/fall-flower.jpg";
import woodFlowers from "../images/flowers-on-wood.jpg";
import peachAndWhiteFlowers from "../images/peach-and-white.jpg";
import peachFlowers from "../images/peachy.jpg";
import redFlowers from "../images/redflowers-dark.jpg";

const Work = () => {
    return (
        <div className="Work">
            <div className="work-text">
                <p>Whether it's roses, wildflowers, or everything in between: we love to create custom bouquets with some real creative flair. Flowershop was founded with the principle of collaboration in mind, and we love to collaborate with our customers to create their perfect floral arrangements for any occasion.</p>
                <p>Want to get even more hands on? We offer both one-on-one and small group classes. Contact us to get more details or set up your next class.</p>
            </div>
            <div className="work-gallery">
                <img src={closeUp} alt="a close up photo of pink flowers in a vase" />
                <img src={fallFlowers} alt="a bouquet of flowers on a white background" />
                <img src={woodFlowers} alt="a bouquet of flowers on a wooden table" />
                <img src={peachAndWhiteFlowers} alt="peach and white hued flowers" />
                <img src={peachFlowers} alt="a photo of peach color flowers" />
                <img src={redFlowers} alt="peach and red color flowers on a dark background" />
            </div>
        </div>
    )
}

export default Work;