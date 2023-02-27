import React from "react";
import { Fade } from "react-awesome-reveal";

const Footer = () => {
    return (
        <Fade>
            <footer style={{
                backgroundColor: "#491cba"
            }}>
                <div className="footer_logo">
                    <div className="font_righteous footer_logo_venue">Comic Con 2023</div>
                    <div className="footer_copyright">© DreamMarvel Comics Copyright 2023</div>
                </div>
            </footer>
        </Fade>
    );
}

export default Footer;
