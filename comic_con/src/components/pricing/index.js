import React from "react";
import Zoom from 'react-awesome-reveal';
import MyButton from "../utils/MyButton";

const Pricing = () => {

    const statePricing = {
        prices: [50, 100, 200],
        type: ["Balcony", "Middle", "Premium"],
        desc: [
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
            "praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias",
            "excepturi sint occaecati cupiditate non provident, similique sunt in culpa",
        ],
        links: [
            "http://www.google.com",
            "http://www.youtube.com",
            "http://www.github.com",
        ],
        delay: [500, 0, 500]
    }

    const showBoxes = () => (
        statePricing.prices.map((price, index) => (
            <Zoom key={index} className="pricing_item" delay={statePricing.delay[index]}>
                <div className="pricing_inner_wrapper">
                    <div className="pricing_title">
                        <span>${price}</span>
                        <span>{statePricing.type[index]}</span>
                    </div>
                    <div className="pricing_description">
                        <span>{statePricing.desc[index]}</span>
                    </div>
                    <div className="pricing_buttons">
                        <MyButton
                            text="Purchase"
                            link={statePricing.links[index]}
                            iconTicket={true}
                        />
                    </div>
                </div>
            </Zoom>
        ))
    );

    return (
        <div className="bck_black">
            <div className="center_wrapper pricing_section">
                <h2>Pricing</h2>
                <div className="pricing_wrapper">
                    {showBoxes()}
                </div>
            </div>
        </div>
    )

}

export default Pricing;