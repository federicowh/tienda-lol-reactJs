import './homeView.css';
import React from 'react';
import { TimeIs } from './TimeIs';

export const HomeView = ( props ) => {

    const {homeViewTitle} = props;

    return (
        <>
            <TimeIs />

            <p className="homeview-parrafoPrincipal">{homeViewTitle}</p>
        </>
    )

}