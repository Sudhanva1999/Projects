import React from "react";

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d81313.81620252869!2d72.79989017636682!3d19.00831839544403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c902003fc289%3A0x40308b1e806bc1ac!2sGrand%20Hyatt%20Mumbai%20Hotel%20%26%20Residences!5e0!3m2!1sen!2sin!4v1677590034843!5m2!1sen!2sin"
                width="100%"
                height="500"
                allowFullScreen
            />
            <div className="location_tag">
                <div>
                    Location
                </div>
            </div>
        </div>
    );
}

export default Location;