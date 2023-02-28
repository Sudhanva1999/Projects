import React, { useEffect, useState } from "react";
import { Fade, Slide } from 'react-awesome-reveal';
import MyButton from "../utils/MyButton";

const Discount = () => {

    const endDiscountAt = 30
    const [start, setStart] = useState(0);

    const updatePercentage = () => {
        if (start < endDiscountAt) {
            setStart(prevCount => prevCount + 1)
        }
    }

    useEffect(() => {
        if (start > 0 && start < endDiscountAt) {
            setTimeout(() => {
                setStart(prevCount => prevCount + 1);
            }, 30);
        }

    }, [start]);

    return (
        <div className="center_wrapper">
            <div className="discount_wrapper">
                <Fade
                    onVisibilityChange={(inView) => {
                        if (inView) {
                            updatePercentage()
                        }
                    }}
                >
                    <div className="discount_porcentage">
                        <span>{start}%</span>
                        <span>OFF</span>
                    </div>
                </Fade>
                <Slide right>
                    <div className="discount_description">
                        <h3>Purchase your tickets now !</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <MyButton
                            text="Purchase Tickets"
                            link="http://www.google.com"
                            style={{
                                color: "white",
                                background: "red",
                            }}
                            iconTicket={true}
                        />
                    </div>

                </Slide>

            </div>

        </div>
    );
}

export default Discount;