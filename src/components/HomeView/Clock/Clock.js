import React, { useEffect, useState } from 'react'
import '../../HomeView/Clock/clock.css';

export const Clock = () => {

    const [time, setTime] = useState( new Date() )

    function refreshClock() {
        setTime(new Date())
    }

    useEffect(() => {
        const timerId = setInterval(refreshClock, 1000)
        return function cleanup() {
            clearInterval(timerId)
        }
    }, [])

    return(
        <div className="clock">
            <h3>{time.toLocaleString()}</h3>
        </div>
    )
}
