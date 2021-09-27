import React from 'react';

export const HomeView = ( props ) => {

    const {homeViewTitle} = props;

    return (
        <>
            <p className="homeview-parrafoPrincipal">{homeViewTitle}</p>
        </>
    )

}