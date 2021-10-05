import React from 'react'
import { useEffect, useState } from 'react'
import '../../HomeView/Clock/clock.css';

export const Clock = () => {

    const [time, setTime] = useState( new Date() )

    useEffect( () => {
        
        setTimeout( () => {
            setTime( new Date() )
        }, 1000);

    }, [time] )

    return(
        <div className="clock">
            <h3>{time.toLocaleString()}</h3>
        </div>
    )
}
