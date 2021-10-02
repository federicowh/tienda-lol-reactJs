import './homeView.css';
import React from 'react';
import { Clock } from './Clock';
import { ItemListContainer } from './ItemListContainer';


export const HomeView = ( props ) => {

    const {homeViewTitle} = props;

    return (
        <>
            <Clock />

            <ItemListContainer />
        </>
    )

}