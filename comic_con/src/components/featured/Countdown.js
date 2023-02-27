import React, { useState, useEffect, useCallback } from "react"
import Slide from "react-awesome-reveal"

const Countdown = () => {
    const [time, setTime] = useState({
        days: '0',
        hours: '0',
        minutes: '0',
        seconds: '0',
    })

    const getTimeUntil = useCallback((deadline) => {
        const time = Date.parse(deadline) - Date.parse(new Date());
        if (time < 0) {
            console.log("Date has passed");
        } else {
            const seconds = Math.floor((time / 1000) % 60);
            const minutes = Math.floor((time / 1000 / 60) % 60);
            const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
            const days = Math.floor((time / (1000 * 60 * 60 * 24)));
            setTime({
                days,
                hours,
                minutes,
                seconds
            })
        }
    }, []);

    useEffect(() => {
        setInterval(() => getTimeUntil('Nov, 20, 2023, 01:20:00'), 1000)

    }, [getTimeUntil])

    const renderItem = (time, value) => {
        return (
            <div className="countdown_item">
                <div className="countdown_time">
                    {time}
                </div>
                <div className="countdown_tag">
                    {value}
                </div>
            </div>
        )
    }

    return (
        <Slide left delay={1000}>
            <div className="countdown_wrapper">
                <div className="countdown_top">
                    Event Starts In
                </div>
                <div className="countdown_bottom">
                    {renderItem(time.days, 'Days')}
                    {renderItem(time.hours, 'Hours')}
                    {renderItem(time.minutes, 'Minutes')}
                    {renderItem(time.seconds, 'Seconds')}
                </div>
            </div>
        </Slide>
    );
}

export default Countdown;