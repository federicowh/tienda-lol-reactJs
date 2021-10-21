import React, { useState, useEffect } from 'react'
import '../../helpers/ClickTracker/clickTracker.css';

export const ClickTracker = () => {

    const [coord, setCoord] = useState({x: 0, y: 0})

    const handleClick = (e) => {
        console.log(e)

        setCoord({
            x: e.x,
            y: e.y
        })
    }

    useEffect( () => {
        window.addEventListener('click', handleClick)

        return () => {
            window.removeEventListener('click', handleClick)
        }
    }, [])

    return (
        <div  
            className="trackerContainer"
            onClick={handleClick}
        >
            <h3>X: {coord.x}</h3>

            <h3>Y: {coord.y}</h3>
        </div>
    )
}
