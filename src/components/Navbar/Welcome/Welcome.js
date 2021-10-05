import '../../Navbar/Welcome/welcome.css';
import React from 'react'

export const Welcome = ( props ) => {

    const {title, subTitle} = props;

    return (
        <>
            <div className="welcome"> 
                <h1 className="welcomeTitle"> {title} </h1>
                <p className="welcomeSubTitle"> {subTitle} </p>
            </div>
        </>
    )
}
