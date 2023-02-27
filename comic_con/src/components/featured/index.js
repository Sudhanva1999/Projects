import React from "react";
import Carrousel from "./Carrousel";
import Countdown from "./Countdown";

const Featured = () => {
    return (
        <div className="featured_container">
            <Carrousel />
            <div className="artist_name">
                <div className="wrapper">
                    Anime Con <br /> Mumbai
                </div>
            </div>
            <Countdown />
        </div>
    )
}

export default Featured;