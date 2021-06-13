import React from 'react';
import PinkFlowers from "../images/pink-flowers.jpg";

const Home = () => {
    return (
        <div className="Home">
            <div className="landing-text">
                <div className="headline">
                    <h2>hand-crafted florals arrangements for your special day or your everyday.</h2>
                </div>
                <div className="landing-btn">
                    <button>contact us</button>
                </div>
            </div>
            <div className="landing-img">
                <img src={PinkFlowers} alt="a bouquet of pink and cream hued flowers" />
            </div>
        </div>
    )
}

export default Home;